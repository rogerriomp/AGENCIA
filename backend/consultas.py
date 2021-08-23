import pandas as pd
import settings
import auth
from random import choice
import string

engine = settings.engine
cur = engine.connect()

#Busca dados de cidades cadastradas
def BuscaCidades(id_uf):
    query = "select c.*, e.id as est_id, e.nome as est_name  from cidades c join estados e on e.id = c.estado_id where e.id=" + id_uf

    df = pd.read_sql(query, cur)
    lista_cidades = list()
    for i in df.itertuples():
        d = {'value': i[1],
             'label': i[2]
             }
        lista_cidades.append(d)

    return {'cidades': lista_cidades}

#===========Funcionarios=============
def BuscaFuncionarios(nome):
    q = "select * from funcionarios where nome like " + "'" + "%%" + nome + "%%" + "'"
    df = pd.read_sql(q, cur)
    resultado = {}
    lista = list()
    for i in df.itertuples():
        d = {
            'nome':i[2],
            'cpf':i[3],
            'key':i[1]
        }
        lista.append(d)
    resultado = {'funcionarios': lista}

    return resultado

def BuscaFuncionarioUnico(cod_funcionario):
    q = "select * from funcionarios where id = " + str(cod_funcionario)
    df = pd.read_sql(q, cur)
    d = df.T.to_dict()[0]

    if d['dt_nascimento'] != None:
        d['dt_nascimento'] = d['dt_nascimento'].strftime("%d/%m/%Y")

    if d['dt_admissao'] != None:
        d['dt_admissao'] = d['dt_admissao'].strftime("%d/%m/%Y")

    if d['dt_desligamento'] != None:
        d['dt_desligamento'] = d['dt_desligamento'].strftime("%d/%m/%Y")

    resultado = {'resultado': d}
    return resultado


#==============Agencia==========================
def BuscaAgenciaUnica(cod_agencia):
    q = "select * from agencias where id = " + str(cod_agencia)
    df = pd.read_sql(q, cur)
    d = df.T.to_dict()[0]

    if d['dt_create'] != None:
        d['dt_create'] = d['dt_create'].strftime("%d/%m/%Y")


    resultado = {'resultado': d}
    return resultado

def BuscaAgencias(nome):
    q = "select * from agencias where nome like " + "'" + "%%" + nome + "%%" + "'"
    df = pd.read_sql(q, cur)
    resultado = {}
    lista = list()
    for i in df.itertuples():
        d = {
            'nome':i[2],
            'cnpj':i[3],
            'key':i[1]
        }
        lista.append(d)
    resultado = {'funcionarios': lista}

    return resultado

#======================Parceiros====================

def BuscaParceiroUnico(cod_agencia):
    q = "select * from parceiros where id = " + str(cod_agencia)
    df = pd.read_sql(q, cur)
    d = df.T.to_dict()[0]

    if d['dt_create'] != None:
        d['dt_create'] = d['dt_create'].strftime("%d/%m/%Y")


    resultado = {'resultado': d}
    return resultado

def BuscaParceiro(nome):
    q = "select * from parceiros where rz_social like " + "'" + "%%" + nome + "%%" + "'"
    df = pd.read_sql(q, cur)
    resultado = {}
    lista = list()
    for i in df.itertuples():
        d = {
            'rz_social':i[2],
            'cnpj':i[3],
            'key':i[1]
        }
        lista.append(d)
    resultado = {'parceiros': lista}

    return resultado

#================Anunciante==========================
def BuscaAnuncianteUnico(cod_anunciante):
    q = "select * from anunciantes where id = " + str(cod_anunciante)
    df = pd.read_sql(q, cur)
    d = df.T.to_dict()[0]

    if d['dt_create'] != None:
        d['dt_create'] = d['dt_create'].strftime("%d/%m/%Y")


    resultado = {'resultado': d}
    return resultado

def BuscaAnunciante(nome):
    q = "select * from anunciantes where nome like " + "'" + "%%" + nome + "%%" + "'"
    df = pd.read_sql(q, cur)
    resultado = {}
    lista = list()
    for i in df.itertuples():
        d = {
            'nome':i[2],
            'cnpj':i[4],
            'key':i[1]
        }
        lista.append(d)
    resultado = {'anunciantes': lista}

    return resultado

#========================Veiculos============================

def BuscaVeiculoUnico(cod_anunciante):
    q = "select * from veiculos where id = " + str(cod_anunciante)
    df = pd.read_sql(q, cur)
    d = df.T.to_dict()[0]

    if d['dt_create'] != None:
        d['dt_create'] = d['dt_create'].strftime("%d/%m/%Y")


    resultado = {'resultado': d}
    return resultado

def BuscaVeiculo(nome):
    q = "select * from veiculos where rz_social like " + "'" + "%%" + nome + "%%" + "'"+ "or fantasia like " + "'" + "%%" + nome + "%%" + "'"

    df = pd.read_sql(q, cur)
    resultado = {}
    lista = list()
    for i in df.itertuples():
        d = {
            'nome':i[2],
            'cnpj':i[4],
            'key':i[1]
        }
        lista.append(d)
    resultado = {'veiculos': lista}
    print(resultado)

    return resultado


#========================MapaPI============================

def BuscaMapaPiUnico(cod_mapa):
    df = pd.read_sql("select * from mapa_pi where id="+str(cod_mapa),cur)
    df_colocacao = pd.read_sql("select * from colocacao where id_mapa_pi="+str(cod_mapa),cur)

    cols_df = list(df)
    cols_df_co = list(df_colocacao)

    if len(df)==1:
        d = df.to_dict('index')
        retorno = {'cadastro_mapa':d[0]}
    else:
        retorno = {"msg":"Mapa Não Localizado"}

    if len(cols_df_co)>0:
        c = df_colocacao.to_dict('index')
        lista_colocacao = list()
        for i in c:
            lista_colocacao.append(c[i])

        retorno['colocacoes']=lista_colocacao

    return retorno

def ConsultaMapas(dt_inicio,dt_fim):
    df = pd.read_sql("select * from mapa_pi where dt_emissao between '"+dt_inicio+"'and'"+dt_fim+"'",cur)
    #print(list(df))
    #print(df.describe())
    #print(df.head(5))

    d = df.to_dict('index')
    retorno = list()
    for mapa in d:

        cadastro_mapa = {}
        cadastro_mapa['cadastro_mapa'] = d[mapa]
        df_colocacao = pd.read_sql("select * from colocacao where id_mapa_pi="+str(d[mapa]['id']),cur)

        if len(df_colocacao) > 0:
            c = df_colocacao.to_dict('index')
            lista_colocacao = list()
            for i in c:
                lista_colocacao.append(c[i])
            cadastro_mapa['colocacoes']=lista_colocacao
        retorno.append(cadastro_mapa)

    print(retorno)
    resultado= {}
    resultado['resultado']=retorno


    return resultado


def ConsultaTabelaPreco(dt_ini,dt_fim):
    query1 = """select * from public.controle_tb_preco where dt_inicio >='""" + dt_ini + "'" + """ and dt_fim <= '""" + dt_fim + "'"
    df = pd.read_sql(query1,cur)
    d = df.to_dict('index')
    list_tb_preco = list()
    for i in d:
        list_tb_preco.append(d[i])
    resultado = {'resultado':list_tb_preco}

    return resultado

def ConsultaPrecoVeiculoTb(id_tb):
    df = pd.read_sql("""select preco.id, preco.id_tabela, ctp.num_tb, ctp.serie ,preco."15", preco."30", preco."60", v.fantasia ,
v.id as id_veiculo, ctp.inativo as tb_inativa
from preco
join controle_tb_preco ctp on ctp.id = preco.id_tabela 
join veiculos v on v.id = preco.id_veiculo 
where preco.id_tabela ="""+str(id_tb),
                              cur)
    d = df.to_dict('index')

    lista_preco_veiculos = list()
    for i in d:
        lista_preco_veiculos.append(d[i])

    resultado = {'resultado':lista_preco_veiculos}

    return resultado
