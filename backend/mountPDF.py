
import pdfkit
from datetime import datetime
import pandas as pd
import settings
import codecs
import uuid

import auth
from random import choice
import string

engine = settings.engine
cur = engine.connect()
#
options = {
'dpi': 300,
    'encoding': "UTF-8",
        'enable-local-file-access': None,
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'orientation': 'Landscape',

}


def CreateCapa(id_empresa,id_tb):
    file = codecs.open("resources/templates/capa.html", "r", "utf-8").read()
    df_parametros = pd.read_sql("select * from parametros where inativo = False and id = "+str(id_empresa),cur)
    df_controle_tb = pd.read_sql("select * from controle_tb_preco where inativo = False and id="+str(id_tb),cur)


    if(len(df_parametros)>0 and len(df_controle_tb)>0):
        mes = {
            '01': 'Janeiro',
            '02': 'Fevereiro',
            '03': 'Março',
            '04': 'Abril',
            '05': 'Maio',
            '06': 'Junho',
            '07': 'Julho',
            '08': 'Agosto',
            '09': 'Setembro',
            '10': 'Outubro',
            '11': 'Novembro',
            '12': 'Dezembro'
        }
        tp_veiculos = {
            '1':'Rádios',
            '2':'Jornais',
            '3':'Outros'
        }


        _obj = {
            'rz_social':df_parametros.nome[0],
            'nu_tabela':df_controle_tb.num_tb[0],
            'serie': df_controle_tb.serie[0],
            'tp_veiculo': tp_veiculos[str(df_controle_tb.tp_veiculo[0])],
            'dt_inicio': df_controle_tb.dt_inicio[0],
            'dt_fim': df_controle_tb.dt_fim[0],
            'mes_ini':mes[df_controle_tb.dt_inicio[0].strftime("%m")],
            'mes_fim': mes[df_controle_tb.dt_fim[0].strftime("%m")],
            'ano_ini':df_controle_tb.dt_inicio[0].strftime("%Y"),
            'ano_fim': df_controle_tb.dt_fim[0].strftime("%Y"),

            'rua':df_parametros.endereco[0],
            'bairro':df_parametros.bairro[0],
            'cep':df_parametros.cep[0],
            'cidade':df_parametros.cidade[0],
            'estado':df_parametros.uf[0],
            'cnpj':df_parametros.cnpj[0],
            'insc_est':df_parametros.insc_est[0],
            'fone':df_parametros.telefone[0],
            'whatsapp':df_parametros.whatsapp[0],
            'email':df_parametros.email[0]

     }
        #print("------------------objeto: ",_obj)


    #print(file)
    new_file = file.format(nome=_obj['rz_social'], rua=_obj['rua'], bairro=_obj['bairro'],cep=_obj['cep'],cidade=_obj['cidade'], estado=_obj['estado'],
                           cnpj=_obj['cnpj'], insc_est=_obj['insc_est'],fone=_obj['fone'], whatsapp=_obj['whatsapp'], email=_obj['email'],
                           nu_tabela=_obj['nu_tabela'], serie_tabela=_obj['serie'], tp_tabela=_obj['tp_veiculo'], mes_ini=_obj['mes_ini'], ano_ini=_obj['ano_ini'],
                           mes_fim=_obj['mes_fim'], ano_fim=_obj['ano_fim'])

    name = uuid.uuid4()
    print(name)
    Html_file = open("resources/temp/"+str(name)+".html", "w")
    Html_file.write(new_file)
    Html_file.close()

    return "resources/temp/"+str(name)+".html"






# CreateCapa(1, 25)
# 'resources/templates/capa.html'
def CriaPdf(id_empresa,id_tb):
    html_template_file = CreateCapa(id_empresa,id_tb)
    pdfkit.from_file(html_template_file, html_template_file.replace('html','pdf'), options=options)
    return html_template_file.replace('html','pdf')