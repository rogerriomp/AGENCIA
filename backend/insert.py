import pandas as pd
import settings
import auth
from random import choice
import string
import ast
import datetime

engine = settings.engine
cur = engine.connect()

#=====================Senha====================
def definirsenha():
    tamanho = 8
    valores = string.ascii_lowercase + string.digits
    senha = ''
    for i in range(tamanho):
        senha += choice(valores)

    return senha


def gerasenha(id_usr):
    query = """update funcionarios set senha = %s where id = %s"""

    permissoes = auth.Permisoes(id_usr)
    if permissoes['permissoes']:
        senha = definirsenha()
        result = cur.execute(query, (senha,id_usr))
        resultado = {'resultado': 'Senha gerada com sucesso! \n\n\n\n * Senha:'+senha+' \n\n\n No primeiro acesso sera solicitado a alteração da senha para o usuário'}

    return resultado


#==========================Funcionários==================================
def insert_funcionario(dados_funcionario):
    #print(dados_funcionario)

    dados = (dados_funcionario['nome'], dados_funcionario['cpf'], dados_funcionario['rg'], dados_funcionario['tp_acesso'],
             dados_funcionario['status'], 1, dados_funcionario['email'],
             dados_funcionario['telefone'], dados_funcionario['obs'], dados_funcionario['funcao'], dados_funcionario['ctps'],
             dados_funcionario['reservista'],dados_funcionario['titulo'], dados_funcionario['dt_nascimento'],
             dados_funcionario['dt_admissao'], dados_funcionario['dt_desligamento'], dados_funcionario['genero'],
             dados_funcionario['cep'],dados_funcionario['cod_cidade'], dados_funcionario['estado'], dados_funcionario['rua'],
             dados_funcionario['bairro'], dados_funcionario['complemento'], dados_funcionario['banco'],
             dados_funcionario['agencia'],dados_funcionario['conta'], dados_funcionario['tp_conta']
             )
    #print(len(dados), 'Tamanho do vetor')
    query = """INSERT INTO public.funcionarios (nome, cpf, rg, tp_acesso, status, primeiro_acesso, email, 
    telefone, obs, funcao, ctps, reservista, titulo, dt_nascimento, dt_admissao, dt_desligamento, genero, cep, 
    cod_cidade, estado, rua, bairro, complemento, banco, agencia, conta, tp_conta, dt_create) 
    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
    %s, current_timestamp) RETURNING id"""

    result = cur.execute(query, dados)
    id = result.fetchone()[0]
    print("Funcionario cadastrado com sucesso: ", id)
    return {'id_funcionario': id}



def UpdateFuncionario(dados_funcionario):

    id = dados_funcionario['id']
    for i in dados_funcionario:
        if dados_funcionario[i]==None:
            dados_funcionario[i]="Null"

    if dados_funcionario['dt_admissao']!='Null':
        dados_funcionario['dt_admissao'] = "'"+dados_funcionario['dt_admissao']+"'"

    if dados_funcionario['dt_nascimento'] != 'Null':
        dados_funcionario['dt_nascimento'] = "'" + dados_funcionario['dt_nascimento'] + "'"

    if dados_funcionario['dt_desligamento'] != 'Null':
        dados_funcionario['dt_desligamento'] = "'" + dados_funcionario['dt_desligamento'] + "'"





    # dados = (
    # dados_funcionario['nome'], dados_funcionario['cpf'], dados_funcionario['rg'], dados_funcionario['tp_acesso'],
    # dados_funcionario['status'], dados_funcionario['email'],
    # dados_funcionario['telefone'], dados_funcionario['obs'], dados_funcionario['funcao'], dados_funcionario['ctps'],
    # dados_funcionario['reservista'], dados_funcionario['titulo'], dados_funcionario['dt_nascimento'],
    # dados_funcionario['dt_admissao'], dados_funcionario['dt_desligamento'], dados_funcionario['genero'],
    # dados_funcionario['cep'], dados_funcionario['cod_cidade'], dados_funcionario['estado'], dados_funcionario['rua'],
    # dados_funcionario['bairro'], dados_funcionario['complemento'], dados_funcionario['banco'],
    # dados_funcionario['agencia'], dados_funcionario['conta'], dados_funcionario['tp_conta']
    # )

    query = """update funcionarios 
                set nome= '"""+ dados_funcionario['nome'] +"""', """+""" cpf='"""+dados_funcionario['cpf']+"""', """+"""rg='"""+dados_funcionario['rg']+"""', """+"""tp_acesso='"""+str(dados_funcionario['tp_acesso'])+"""', """ \
                +"""status="""+str(dados_funcionario['status'])+""", """+"""email='"""+dados_funcionario['email']+"""', """ \
            + """telefone='""" + dados_funcionario['telefone'] + """', """ \
            + """obs='""" + dados_funcionario['obs'] + """', """ \
            + """funcao='""" + dados_funcionario['funcao'] + """', """ \
            + """ctps='""" + dados_funcionario['ctps'] + """', """ \
            + """reservista='""" + dados_funcionario['reservista'] + """', """ \
            + """titulo='""" + dados_funcionario['titulo'] + """', """ \
            + """dt_nascimento=""" + dados_funcionario['dt_nascimento'] + """, """ \
            + """dt_admissao=""" + dados_funcionario['dt_admissao'] + """, """ \
            + """dt_desligamento=""" + dados_funcionario['dt_desligamento'] + """, """ \
            + """genero=""" + str(dados_funcionario['genero']) + """, """ \
            + """cep='""" + dados_funcionario['cep'] + """', """ \
            + """cod_cidade=""" + str(dados_funcionario['cod_cidade']) + """, """ \
            + """estado=""" + str(dados_funcionario['estado']) + """, """ \
            + """rua='""" + dados_funcionario['rua'] + """', """ \
            + """bairro='""" + dados_funcionario['bairro'] + """', """ \
            + """complemento='""" + dados_funcionario['complemento'] + """', """ \
            + """banco='""" + dados_funcionario['banco'] + """', """ \
            + """agencia='""" + dados_funcionario['agencia'] + """', """ \
            + """conta='""" + dados_funcionario['conta']  + """' """ \
            + "where id ="+str(id)

    # print("Print Query Update:  ",query)

    cur.execute(query)
    resultado = {"msg":"Usuário Atualizado com sucesso"}
    print(resultado)
    return resultado


#===================AGENCIA==========================
def insert_agencia(dados_agencia):
    #print(dados_funcionario)

    dados = (dados_agencia['nome'], dados_agencia['cnpj'], dados_agencia['tp_pessoa'], dados_agencia['status'],
             dados_agencia['email'], dados_agencia['telefone'],
             dados_agencia['fax'], dados_agencia['contato'], dados_agencia['fantasia'], dados_agencia['nome_red'],
             dados_agencia['cidade_red'],dados_agencia['cargo'], dados_agencia['clientes'],
             dados_agencia['obs'], dados_agencia['insc_est'], dados_agencia['cod_cont'],
             dados_agencia['cep'],dados_agencia['rua'], dados_agencia['cod_cidade'], dados_agencia['bairro'],
             dados_agencia['complemento'], dados_agencia['estado']
             )
    #print(len(dados), 'Tamanho do vetor')
    query = """INSERT INTO public.agencias
(nome, cnpj, tp_pessoa, status, email, telefone, fax, contato, fantasia, nome_red, cidade_red, cargo, clientes, obs, 
insc_est, cod_cont, cep, rua, cod_cidade, bairro, complemento, estado, dt_create)
VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,current_timestamp) 
RETURNING id"""

    result = cur.execute(query, dados)
    id = result.fetchone()[0]
    print("Agência cadastrada com sucesso: ", id)
    return {'id_agencia': id}


def UpdateAgencia(dados_agencia):

    id = dados_agencia['id']
    for i in dados_agencia:
        if dados_agencia[i]==None:
            dados_agencia[i]="Null"


    query = """update agencias 
                set nome= '"""+ dados_agencia['nome'] +"""', """+""" cnpj='"""+dados_agencia['cnpj']+"""', """+"""fax='"""+dados_agencia['fax']+"""', """+"""tp_pessoa='"""+str(dados_agencia['tp_pessoa'])+"""', """ \
                +"""status="""+str(dados_agencia['status'])+""", """+"""email='"""+dados_agencia['email']+"""', """ \
            + """telefone='""" + dados_agencia['telefone'] + """', """ \
            + """obs='""" + dados_agencia['obs'] + """', """ \
            + """cargo='""" + dados_agencia['cargo'] + """', """ \
            + """contato='""" + dados_agencia['contato'] + """', """ \
            + """fantasia='""" + dados_agencia['fantasia'] + """', """ \
            + """nome_red='""" + dados_agencia['nome_red'] + """', """ \
            + """cidade_red='""" + dados_agencia['cidade_red'] + """', """ \
            + """insc_est=""" + dados_agencia['insc_est'] + """, """ \
            + """cod_cont=""" + dados_agencia['cod_cont'] + """, """ \
            + """cep='""" + dados_agencia['cep'] + """', """ \
            + """cod_cidade='""" + str(dados_agencia['cod_cidade']) + """', """ \
            + """estado=""" + str(dados_agencia['estado']) + """, """ \
            + """rua='""" + dados_agencia['rua'] + """', """ \
            + """bairro='""" + dados_agencia['bairro'] + """', """ \
            + """complemento='""" + dados_agencia['complemento'] + """'""" \
            + "where id ="+str(id)

    # print("Print Query Update:  ",query)

    cur.execute(query)
    resultado = {"msg":"Usuário Atualizado com sucesso"}
    print(resultado)
    return resultado

#=======================Parceiros=================

def insert_parceiro(dados_parceiro):
    #print(dados_funcionario)

    dados = (dados_parceiro['rz_social'], dados_parceiro['fantasia'], dados_parceiro['cnpj'], dados_parceiro['tp_acesso'],
             dados_parceiro['status'], dados_parceiro['email'],
             dados_parceiro['telefone'], dados_parceiro['whatsapp'], dados_parceiro['obs'], dados_parceiro['cep'],
             dados_parceiro['cod_cidade'],dados_parceiro['estado'], dados_parceiro['rua'],
             dados_parceiro['bairro'], dados_parceiro['complemento'], dados_parceiro['banco'],
             dados_parceiro['agencia'],dados_parceiro['conta'], dados_parceiro['tp_conta'], dados_parceiro['insc_est'],
             dados_parceiro['cod_cont'], dados_parceiro['nome_red'],dados_parceiro['cidade_red'], dados_parceiro['tp_pessoa']
             )
    #print(len(dados), 'Tamanho do vetor')
    query = """INSERT INTO public.parceiros
    (rz_social, fantasia, cnpj, tp_acesso, status, email, telefone, whatsapp, obs, cep, cod_cidade, estado, rua, 
    bairro, complemento, banco, agencia, conta, tp_conta, dt_create, insc_est, cod_cont, nome_red, cidade_red, tp_pessoa)
    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, current_timestamp, %s, %s, 
    %s, %s, %s) RETURNING id"""


    result = cur.execute(query, dados)
    id = result.fetchone()[0]
    print("Parceiro cadastrado com sucesso: ", id)
    return {'id_parceiro': id}


def UpdateParceiro(dados_agencia):

    id = dados_agencia['id']
    for i in dados_agencia:
        if dados_agencia[i]==None:
            dados_agencia[i]="Null"


    query = """update parceiros 
                set rz_social= '"""+ dados_agencia['rz_social'] +"""', """\
            +""" cnpj='"""+dados_agencia['cnpj']+"""', """\
            +"""fantasia='"""+dados_agencia['fantasia']+"""', """\
            +"""tp_pessoa='"""+str(dados_agencia['tp_pessoa'])+"""', """ \
            +"""status="""+str(dados_agencia['status'])+""", """\
            +"""email='"""+dados_agencia['email']+"""', """ \
            + """telefone='""" + dados_agencia['telefone'] + """', """ \
            + """whatsapp='""" + dados_agencia['whatsapp'] + """', """ \
            + """obs='""" + dados_agencia['obs'] + """', """ \
            + """nome_red='""" + dados_agencia['nome_red'] + """', """ \
            + """cidade_red='""" + dados_agencia['cidade_red'] + """', """ \
            + """insc_est='""" + dados_agencia['insc_est'] + """', """ \
            + """cod_cont='""" + dados_agencia['cod_cont'] + """', """ \
            + """banco='""" + dados_agencia['banco'] + """', """ \
            + """agencia='""" + dados_agencia['agencia'] + """', """ \
            + """conta='""" + dados_agencia['conta'] + """', """ \
            + """tp_conta='""" + dados_agencia['tp_conta'] + """', """ \
            + """cep='""" + dados_agencia['cep'] + """', """ \
            + """cod_cidade='""" + str(dados_agencia['cod_cidade']) + """', """ \
            + """estado=""" + str(dados_agencia['estado']) + """, """ \
            + """rua='""" + dados_agencia['rua'] + """', """ \
            + """bairro='""" + dados_agencia['bairro'] + """', """ \
            + """complemento='""" + dados_agencia['complemento'] + """'""" \
            + "where id ="+str(id)

    # print("Print Query Update:  ",query)

    cur.execute(query)
    resultado = {"msg":"Usuário Atualizado com sucesso"}
    print(resultado)
    return resultado

#==================Anunciantes======================

def insert_anunciante(dados_anunciante):
    #print(dados_funcionario)

    dados = (dados_anunciante['nome'], dados_anunciante['fantasia'], dados_anunciante['cnpj'], dados_anunciante['agencia_select'],
             dados_anunciante['tp_pessoa'], dados_anunciante['classificacao'],
             dados_anunciante['telefone'], dados_anunciante['observacao'], dados_anunciante['whatsapp'], dados_anunciante['cep'],
             dados_anunciante['rua'],dados_anunciante['bairro'], dados_anunciante['cod_cidade'],
             dados_anunciante['uf'], dados_anunciante['complemento'], dados_anunciante['banco'],
             dados_anunciante['agencia'],dados_anunciante['conta'], dados_anunciante['tp_conta'], dados_anunciante['historico'],
             dados_anunciante['insc_est'], dados_anunciante['cod_cont'],dados_anunciante['nome_red'], dados_anunciante['cidade_red']
             )
    #print(len(dados), 'Tamanho do vetor')
    query = """INSERT INTO public.anunciantes
(nome, fantasia, cnpj, agencia_select, tp_pessoa, classificacao, telefone, observacao, whatsapp, cep, rua, bairro,
cod_cidade, estado, complemento, banco, agencia, conta, tp_conta, historico, insc_est, cod_cont, nome_red, cidade_red, dt_create)
VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, current_timestamp)
 RETURNING id"""


    result = cur.execute(query, dados)
    id = result.fetchone()[0]
    print("Parceiro cadastrado com sucesso: ", id)
    return {'id_parceiro': id}


def UpdateAnunciante(dados_anunciante):

    id = dados_anunciante['id']
    for i in dados_anunciante:
        if dados_anunciante[i]==None:
            dados_anunciante[i]="Null"


    query = """UPDATE public.anunciantes  SET """\
        +"""nome='"""+dados_anunciante['nome']+"""',"""\
        +"""fantasia='"""+dados_anunciante['fantasia']+"""',""" \
        +"""cnpj='"""+dados_anunciante['cnpj']+"""',""" \
        +"""agencia_select='"""+str(dados_anunciante['agencia_select'])+"""',""" \
        +"""tp_pessoa='"""+dados_anunciante['tp_pessoa']+"""',""" \
        +"""classificacao='"""+dados_anunciante['classificacao']+"""',"""\
        +"""telefone='"""+dados_anunciante['telefone']+"""',""" \
        +"""observacao='"""+dados_anunciante['observacao']+"""',"""\
        +"""whatsapp='"""+dados_anunciante['whatsapp']+"""',""" \
        +"""cep='"""+dados_anunciante['cep']+"""',""" \
        +"""rua='"""+dados_anunciante['rua']+"""',""" \
        +"""bairro='"""+dados_anunciante['bairro']+"""',"""\
        +"""cod_cidade="""+str(dados_anunciante['cod_cidade'])+""",""" \
        +"""estado="""+str(dados_anunciante['uf'])+""",""" \
        +"""complemento='"""+dados_anunciante['complemento']+"""',""" \
        +"""banco='"""+dados_anunciante['banco']+"""',""" \
        +"""agencia='"""+dados_anunciante['agencia']+"""',"""\
        +"""conta='"""+dados_anunciante['conta']+"""',""" \
        +"""tp_conta='"""+dados_anunciante['tp_conta']+"""',""" \
        +"""historico='"""+dados_anunciante['historico']+"""',""" \
        +"""insc_est='"""+dados_anunciante['insc_est']+"""',""" \
        +"""cod_cont='"""+dados_anunciante['cod_cont']+"""',""" \
        +"""nome_red='"""+dados_anunciante['nome_red']+"""',"""\
        +"""cidade_red='"""+dados_anunciante['cidade_red']+"""'"""\
        +"""where id ="""+str(id)

    print("Print Query Update:  ",query)

    cur.execute(query)
    resultado = {"msg":"Usuário Atualizado com sucesso"}
    print(resultado)
    return resultado

####======================Veiculo=======================

def insert_veiculo(dados):

    _dados = (dados['rz_social'], dados['fantasia'], dados['cnpj'], dados['agencia_select'], dados['tp_pessoa'],
              dados['tp_veiculo'], dados['email'], dados['classificacao'], dados['telefone'], dados['observacao'],
              dados['whatsapp'], dados['contato'], dados['cep'], dados['rua'], dados['bairro'], dados['cod_cidade'],
              dados['estado'], dados['complemento'], dados['banco'], dados['agencia'],
              dados['conta'], dados['tp_conta'], dados['historico'], dados['insc_est'], dados['cod_cont'],
              dados['nome_red'], dados['cidade_red'], dados['ativo_tabela_preco'], dados['preco_15'], dados['preco_30'],
              dados['preco_60']
              )

    query = """INSERT INTO public.veiculos
    (rz_social, fantasia, cnpj, agencia_select, tp_pessoa, tp_veiculo, email, classificacao, telefone, observacao, 
    whatsapp, contato, cep, rua, bairro, cod_cidade, estado, complemento, banco, agencia, conta, tp_conta, 
    historico, insc_est, cod_cont, nome_red, cidade_red, ativo_tabela_preco, preco_15, preco_30, preco_60, dt_create)
    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
    %s, %s, %s, %s, %s, current_timestamp) RETURNING id"""

    result = cur.execute(query, _dados)
    id = result.fetchone()[0]
    print("Veiculo cadastrado com sucesso: ", id)

    return {'id_parceiro': id}

def UpdateVeiculo(dados):

    id = dados['id']
    for i in dados:
        if dados[i]==None:
            dados[i]="Null"


    query = """UPDATE public.veiculos SET"""\
    +""" rz_social='"""+dados['rz_social']+"""',"""\
    +"""fantasia='"""+dados['fantasia']+"""',"""\
    +"""cnpj='"""+dados['cnpj']+"""',"""\
    +"""agencia_select='"""+str(dados['agencia_select'])+"""',"""\
    +"""tp_pessoa='"""+dados['tp_pessoa']+"""',"""\
    +"""tp_veiculo='"""+dados['tp_veiculo']+"""',"""\
    +"""email='"""+dados['email']+"""',"""\
    +"""classificacao='"""+dados['classificacao']+"""',"""\
    +"""telefone='"""+dados['telefone']+"""',"""\
    +"""observacao='"""+dados['observacao']+"""',"""\
    +"""whatsapp='"""+dados['whatsapp']+"""',"""\
    +"""contato='"""+dados['contato']+"""',"""\
    +"""cep='"""+dados['cep']+"""',"""\
    +"""rua='"""+dados['rua']+"""',"""\
    +"""bairro='"""+dados['bairro']+"""',"""\
    +"""cod_cidade='"""+str(dados['cod_cidade'])+"""',"""\
    +"""estado='"""+str(dados['estado'])+"""',"""\
    +"""complemento='"""+dados['complemento']+"""',"""\
    +"""banco='"""+dados['banco']+"""',"""\
    +"""agencia='"""+dados['agencia']+"""',"""\
    +"""conta='"""+dados['conta']+"""',"""\
    +"""tp_conta='"""+dados['tp_conta']+"""',"""\
    +"""historico='"""+dados['historico']+"""',"""\
    +"""insc_est='"""+dados['insc_est']+"""',"""\
    +"""cod_cont='"""+dados['cod_cont']+"""',"""\
    +"""nome_red='"""+dados['nome_red']+"""',"""\
    +"""cidade_red='"""+dados['cidade_red']+"""',"""\
    +"""ativo_tabela_preco='"""+dados['ativo_tabela_preco']+"""',"""\
    +"""preco_15='"""+dados['preco_15']+"""',"""\
    +"""preco_30='"""+dados['preco_30']+"""',"""\
    +"""preco_60='"""+dados['preco_60']+"""'"""\
    +"""where id ="""+str(id)



    print("Print Query Update:  ",query)

    cur.execute(query)
    resultado = {"msg":"Veiculo Atualizado com sucesso"}
    print(resultado)
    return resultado

#==================Ex-TESTES======================
# print(gerasenha(1))
# df = pd.read_sql("select * from funcionarios", cur)
#
# print(df['senha'])

#=================================================

def insert_mapa(dados):
    dados = ast.literal_eval(dados[0])

    _dados = (dados['numero_agencia'],
              datetime.datetime.strptime(dados['dt_emissao'], "%d/%m/%Y").strftime("%Y-%m-%d"),
              dados['periodo'],
              dados['ano'],
              dados['cod_agencia'],
              dados['cod_veiculo'],
              dados['servico'],
              dados['campanha'],
              dados['produto'],
              dados['titulo'],
              datetime.datetime.strptime(dados['dt_vencimento'], "%d/%m/%Y").strftime("%Y-%m-%d"),
              dados['observacao'],
              dados['nota_fiscal'],
              dados['saac'],
              dados['empenho'],
              dados['fat_expansao'],
              dados['fat_veiculo'],
              dados['mapa_prog'],
              dados['imprimir'],
              dados['faturar'],
              dados['valor_total'],
              dados['valor_bruto'],
              dados['comissao_ag'],
              dados['valor_comissao'],
              dados['valor_normal'],
              dados['comissao'],
              dados['valor_comissao_normal'],
              dados['valor_liquido'])

    query = """INSERT INTO public.mapa_pi
(numero_agencia, dt_emissao, periodo, ano, cod_agencia, cod_veiculo, servico, campanha, produto, titulo, dt_vencimento, observacao, nota_fiscal, saac, empenho, fat_expansao, fat_veiculo, mapa_prog, imprimir, faturar, valor_total, valor_bruto, comissao_ag, valor_comissao, valor_normal, comissao, valor_comissao_normal, valor_liquido)
VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
    %s, %s) RETURNING id
"""
    result = cur.execute(query, _dados)
    id = result.fetchone()[0]
    print("Mapa cadastrado com sucesso: ", id)

    return {'id_mapa': id}


#========Mapa PI

def insert_colocacao(id_mapa, dados_colocacao):

    dados_colocacao = dados_colocacao

    for dados in dados_colocacao:
        _dados = (id_mapa,
              dados['colocacao'],
              dados['um'],
              dados['dois'],
              dados['tres'],
              dados['quatro'],
              dados['cinco'],
              dados['seis'],
              dados['sete'],
              dados['oito'],
              dados['nove'],
              dados['dez'],
              dados['onze'],
              dados['doze'],
              dados['treze'],
              dados['quatorze'],
              dados['quinze'],
              dados['dezesseis'],
              dados['dezessete'],
              dados['dezoito'],
              dados['dezenove'],
              dados['vinte'],
              dados['vinte_um'],
              dados['vinte_dois'],
              dados['vinte_tres'],
              dados['vinte_quatro'],
              dados['vinte_cinco'],
              dados['vinte_seis'],
              dados['vinte_sete'],
              dados['vinte_oito'],
              dados['vinte_nove'],
              dados['trinta'],
              dados['trinta_um'],
              dados['total'])

        print(_dados, 'insert data')

        query = """INSERT INTO public.colocacao
        (id_mapa_pi, colocacao, um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte, vinte_um, vinte_dois, vinte_tres, vinte_quatro, vinte_cinco, vinte_seis, vinte_sete, vinte_oito, vinte_nove, trinta, trinta_um, total)
        VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s) RETURNING id"""
        result = cur.execute(query, _dados)
        id = result.fetchone()[0]
        print("Colocacao cadastrado com sucesso: ", id)

    return {'return':'Colocacao_cadastrada'}