
import pdfkit
from PyPDF2 import PdfFileMerger, PdfFileReader
from datetime import datetime
import pandas as pd
import settings
import codecs
import uuid
import os
import fitz

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
    df_controle_tb = pd.read_sql("select * from controle_tb_preco where id="+str(id_tb),cur)


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
    dir = 'resources/temp/'+str(name)
    os.mkdir(dir)

    Html_file = open(dir+'/'+str(name)+".html", "w")
    Html_file.write(new_file)
    Html_file.close()

    retorno = (dir+"/"+str(name)+".html", dir)
    return retorno

# CreateCapa(1, 25)
# 'resources/templates/capa.html'
def CriaPdf(id_empresa,id_tb):
    html_template_file = CreateCapa(id_empresa,id_tb)
    pdfkit.from_file(html_template_file[0], html_template_file[1]+"/1.pdf", options=options)
    return html_template_file

def CarregaTbPreco(tb_preco):
    df = pd.read_sql("""select p.id_tabela, p.id_veiculo, v.fantasia, p."15", p."30", p."60", e.nome as estado , c.nome as cidade
from preco p 
join veiculos v on v.id = p.id_veiculo 
join estados e on e.id = v.estado
join cidades c on c.id = v.cod_cidade 
where id_tabela ="""+str(tb_preco),cur)

    if len(df)>0:
        string_tag_list = list()
        list_uf = list(df.estado)
        for uf in list_uf:
            tag_temp = list()
            tamanho = len(df[df.estado==uf])
            for idx,linha in df[df.estado==uf].iterrows():
                if (idx % 2) == 0:
                    bg = """<tr>"""
                else:
                    bg = """<tr style="background:#d9e2f3">"""

                t = bg + "<th>{cidade}</th><th>{veiculo}</th><th>{trinta}</th><th>{sessenta}</th><th>{quinze}</th></tr>".format(cidade=linha.cidade,veiculo=linha.fantasia, trinta=linha["30"],sessenta=linha["60"],quinze=linha["15"])
                tag_temp.append(t)

            first = tag_temp[0]
            tag_temp[0] = first.replace("<tr>",
                                     """<tr><th style='text-align:center;vertical-align:middle;writing-mode: tb-rl;transform: rotate(-180deg);' ROWSPAN="{tamanho}">{cidade}</th>""".format(
                                         tamanho=tamanho, cidade=uf))
            string_tag_list = string_tag_list + tag_temp


    return string_tag_list



def GeraTabelahtml(id_tabela):
    capa_dir = CriaPdf(1,id_tabela)
    string_html = CarregaTbPreco(id_tabela)
    seq_pgs = 2
    if len(string_html) > 42:
        None
    elif len(string_html) <=42:
        file = codecs.open("resources/templates/tabela.html", "r", "utf-8").read()
        new_file = file.format(dados_tabela=''.join(string_html))
        Html_file = open(capa_dir[1]+"/"+str(seq_pgs)+".html", "w")
        Html_file.write(new_file)
        Html_file.close()
        pdfkit.from_file(capa_dir[1]+"/"+str(seq_pgs)+".html", capa_dir[1]+"/"+str(seq_pgs)+".pdf", options=options)


        all_files = []
        for dirpath, dirnames, filenames in os.walk(capa_dir[1]):
            for filename in [f for f in filenames if f.endswith(".pdf")]:
                all_files.append(os.path.join(dirpath, filename))

    report = fitz.open()

    for pdf in all_files:
        with fitz.open(pdf) as mfile:
            report.insertPDF(mfile)

    report.save(capa_dir[1]+"/report.pdf")

    return capa_dir[1]+"/report.pdf"

print(GeraTabelahtml(25))



def SeparaDocs(df):
    dict_result = dict()
    string_tag_list = list()
    list_uf = list(df.estado)
    for uf in list_uf:
        tag_temp = list()
        tamanho = len(df[df.estado == uf])
        for idx, linha in df[df.estado == uf].iterrows():
            if (idx % 2) == 0:
                bg = """<tr>"""
            else:
                bg = """<tr style="background:#d9e2f3">"""

            t = bg + "<th>{cidade}</th><th>{veiculo}</th><th>{trinta}</th><th>{sessenta}</th><th>{quinze}</th></tr>".format(
                cidade=linha.cidade, veiculo=linha.fantasia, trinta=linha["30"], sessenta=linha["60"],
                quinze=linha["15"])
            tag_temp.append(t)

        first = tag_temp[0]
        tag_temp[0] = first.replace("<tr>",
                                    """<tr><th style='text-align:center;vertical-align:middle;writing-mode: tb-rl;transform: rotate(-180deg);' ROWSPAN="{tamanho}">{cidade}</th>""".format(
                                        tamanho=tamanho, cidade=uf))
        string_tag_list = string_tag_list + tag_temp
    return None


#for est in ['São Paulo', 'Rio Grande do Sul', 'Paraná']:
#    for i in range(0,100):



# string = list()
#
# for cit in ['Florianópolis','Porto Alegre']:
#     ttemp = list()
#     for idx,i in enumerate(range(0,50)):
#         if (idx % 2) == 0:
#             bg = """<tr>"""
#         else:
#             bg = """<tr style="background:#d9e2f3">"""
#
#         t = bg+"<th>Cidade Teste"+"</th>"+"<th>Radio Globo</th>"+"<th>"+str(i)+"</th>"+"<th>"+str(i)+"</th>"+"<th>" + str(i) + "</th>" +"</tr>"
#         ttemp.append(t)
#
#     first = ttemp[0]
#     ttemp[0] = first.replace("<tr>","""<tr><th style='text-align:center;vertical-align:middle;writing-mode: tb-rl;transform: rotate(-180deg);' ROWSPAN="{tamanho}">{cidade}</th>""".format(tamanho=50,cidade=cit))
#     string = string + ttemp
#
# string = ''.join(string)
#
#
#
#




#----------------------------------------------------------------------------------------------------------------------

# Funcionando---------Merge PDF
# import fitz
#
# result = fitz.open()
#
# for pdf in ['resources/temp/ea0b2eac-caf2-4cc7-94d4-dd1737bdc84a.pdf','micro.pdf']:
#     with fitz.open(pdf) as mfile:
#         result.insertPDF(mfile)
#
# result.save("result.pdf")


