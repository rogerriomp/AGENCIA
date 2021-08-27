import os
from flask_cors import CORS, cross_origin
from flask_restful import Resource, reqparse
from flask import Flask, request, redirect, jsonify
import json
from flask import Flask
from flask_cors import CORS
from app import app
import pandas as pd
import ast
import os
import insert as insert
import consultas
from flask import send_file, current_app
import mountPDF
import auth

dados = reqparse.RequestParser()
# dados.add_argument('usuario', type=str)
# dados.add_argument('cpf', action='append')
# dados.add_argument('estado', action='append')
# dados.add_argument('cadastra_atendimento', action='append')
# dados.add_argument('cadastro_pessoa', action='append')
# dados.add_argument('dt_inicio', action='append')
# dados.add_argument('dt_fim', action='append')
# dados.add_argument('n_atendimento', action='append')
# dados.add_argument('edita_atendimento', action='append')
# dados.add_argument('token', action='append')
# dados.add_argument('senha', action='append')
# dados.add_argument('BuscaPessoa', action='append')
# dados.add_argument('agendamento', action='append')
# dados.add_argument('dados', action='append')
dados.add_argument('consulta_funcionario', action='append')
dados.add_argument('consulta_agencia', action='append')
dados.add_argument('cadastro_funcionario', action='append')
dados.add_argument('alterasenha', action='append')
dados.add_argument('cria_senha', action='append')
dados.add_argument('consulta', action='append')
dados.add_argument('cadastro_agencia', action='append')
dados.add_argument('cadastro_parceiro', action='append')
dados.add_argument('consulta_parceiro', action='append')
dados.add_argument('cadastro_anunciante', action='append')
dados.add_argument('consulta_anunciante', action='append')
dados.add_argument('cadastro_veiculo', action='append')
dados.add_argument('consulta_veiculo', action='append')
dados.add_argument('cadastro_mapa', action='append')
dados.add_argument('consulta_mapa', action='append')
dados.add_argument('colocacoes', action='append')
dados.add_argument('usuario', action='append')
dados.add_argument('senha', action='append')
dados.add_argument('token', action='append')
dados.add_argument('nova_senha', action='append')





app.config['SECRET_KEY'] = "secret key"
app.config['CORS_HEADERS'] = 'Content-Type'



app = Flask(__name__)


cors = CORS(app, resources={r"/file-upload": {"origins": "http://localhost:2000"}})

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'csv', 'bib', 'word', 'xlsx', 'xls', 'doc', 'docx'])


@app.route('/consulta_funcionario', methods=['GET', 'POST'])
def consultafuncionario():
    post = dados.parse_args()
    consulta = post['consulta_funcionario'][0]
    print('-----------------/-############################ busca: ', consulta)
    nome = ast.literal_eval(consulta)
    busca = nome['nome']
    resultado = consultas.BuscaFuncionarios(busca)
    print('-----------------/-############################ busca: ', busca)

    return resultado,200



@app.route('/cadastra_funcionario', methods=['GET', 'POST'])
def cadastrafuncionario():
    post = dados.parse_args()
    dados_cadastro = post['cadastro_funcionario'][0]
    print("cadastra Funcionario: ", dados_cadastro)
    if ast.literal_eval(dados_cadastro)['id']=="":
        retorno = insert.insert_funcionario(ast.literal_eval(dados_cadastro))
    else:
        retorno = insert.UpdateFuncionario(ast.literal_eval(dados_cadastro))
    # print('-----------------/-############################ busca: ', consulta)
    # d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return retorno,200

@app.route('/cria_senha', methods=['GET', 'POST'])
def criasenha():
    post = dados.parse_args()
    cod_funcionario = post['cria_senha'][0]
    print(cod_funcionario)
    resultado = insert.gerasenha(cod_funcionario)
    return resultado,200

@app.route('/carregadadosfuncionario', methods=['GET', 'POST'])
def consultafuncionariounico():
    post = dados.parse_args()
    consulta = post['consulta_funcionario'][0]

    resultado = consultas.BuscaFuncionarioUnico(consulta)

    print(resultado, '---------------Funcionario unico')
    return resultado,200





@app.route('/altera_senha', methods=['GET', 'POST'])
def alterasenha():
    post = dados.parse_args()
    consulta = post['consulta']
    print('-----------------/-############################ busca: ', consulta)
    d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return d,200

@app.route('/consultacidades', methods=['GET', 'POST'])
def consultacidades():
    post = dados.parse_args()
    consulta = post['consulta'][0]
    print('-----------------/-############################ busca: ', consulta)
    estado = ast.literal_eval(consulta)
    cidades = consultas.BuscaCidades(str(estado['estado']))

    d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return cidades


@app.route('/cadastra_agencia', methods=['GET', 'POST'])
def cadastraagencia():
    post = dados.parse_args()
    dados_cadastro = post['cadastro_agencia'][0]
    print("cadastra Agencia: ", dados_cadastro)
    if ast.literal_eval(dados_cadastro)['id']=="":
        retorno = insert.insert_agencia(ast.literal_eval(dados_cadastro))
    else:
        retorno = insert.UpdateAgencia(ast.literal_eval(dados_cadastro))

    # d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return retorno,200

@app.route('/consulta_agencia', methods=['GET', 'POST'])
def consultaagencia():
    post = dados.parse_args()
    consulta = post['consulta_agencia'][0]
    print('-----------------/-############################ busca: ', consulta)
    nome = ast.literal_eval(consulta)
    busca = nome['nome']
    resultado = consultas.BuscaAgencias(busca)
    print('-----------------/-############################ busca: ', busca)

    return resultado,200


@app.route('/carregadadosagencia', methods=['GET', 'POST'])
def consultaagenciaunico():
    post = dados.parse_args()
    consulta = post['consulta_agencia'][0]

    resultado = consultas.BuscaAgenciaUnica(consulta)

    print(resultado, '---------------Agencia unico')
    return resultado,200



@app.route('/cadastra_parceiro', methods=['GET', 'POST'])
def cadastraparceiro():
    post = dados.parse_args()
    dados_cadastro = post['cadastro_parceiro'][0]
    print("cadastra Parceiro: ", dados_cadastro)
    if ast.literal_eval(dados_cadastro)['id']=="":
        retorno = insert.insert_parceiro(ast.literal_eval(dados_cadastro))
    else:
        retorno = insert.UpdateParceiro(ast.literal_eval(dados_cadastro))

    # d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return retorno,200

@app.route('/consulta_parceiro', methods=['GET', 'POST'])
def consultaparceiro():
    post = dados.parse_args()
    print(post)
    consulta = post['consulta_parceiro'][0]
    print('-----------------/-############################ busca: ', consulta)
    nome = ast.literal_eval(consulta)
    busca = nome['nome']
    resultado = consultas.BuscaParceiro(busca)
    print('-----------------/-############################ busca: ', busca)

    return resultado,200


@app.route('/carregadadosparceiro', methods=['GET', 'POST'])
def consultaparceirounico():
    post = dados.parse_args()
    consulta = post['consulta_parceiro'][0]

    resultado = consultas.BuscaParceiroUnico(consulta)

    print(resultado, '---------------Parceiro unico')
    return resultado,200

#==========Anunciantes========================

@app.route('/cadastra_anunciante', methods=['GET', 'POST'])
def cadastraanunciante():
    post = dados.parse_args()
    dados_cadastro = post['cadastro_anunciante'][0]
    print("cadastra Anunciante: ", dados_cadastro)
    if ast.literal_eval(dados_cadastro)['id']=="":
        retorno = insert.insert_anunciante(ast.literal_eval(dados_cadastro))
    else:
        retorno = insert.UpdateAnunciante(ast.literal_eval(dados_cadastro))

    # d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return retorno,200

@app.route('/consulta_anunciante', methods=['GET', 'POST'])
def consultaanunciante():
    post = dados.parse_args()
    print(post)
    consulta = post['consulta_anunciante'][0]
    print('-----------------/-############################ busca: ', consulta)
    nome = ast.literal_eval(consulta)
    busca = nome['nome']
    resultado = consultas.BuscaAnunciante(busca)
    print('-----------------/-############################ busca: ', busca)

    return resultado,200


@app.route('/carregadadosanunciante', methods=['GET', 'POST'])
def consultaAnuncianteunico():
    post = dados.parse_args()
    consulta = post['consulta_anunciante'][0]

    resultado = consultas.BuscaAnuncianteUnico(consulta)

    print(resultado, '---------------Parceiro unico')
    return resultado,200


#=========Veiculos===================================

@app.route('/cadastra_veiculo', methods=['GET', 'POST'])
def cadastraaveiculo():
    post = dados.parse_args()
    dados_cadastro = post['cadastro_veiculo'][0]
    print("cadastra Veiculo: ", dados_cadastro)
    if ast.literal_eval(dados_cadastro)['id']=="":
        retorno = insert.insert_veiculo(ast.literal_eval(dados_cadastro))
    else:
        retorno = insert.UpdateVeiculo(ast.literal_eval(dados_cadastro))

    # d = {'funcionarios': [{'nome': 'Rogerio de Aquino silva', 'cpf': '322.684.848-82', 'cod_funcionario':123}, {'nome': 'Everton Davi', 'cpf': '322.664.878-84', 'cod_funcionario':126}]}
    return retorno,200

@app.route('/consulta_veiculo', methods=['GET', 'POST'])
def consultaveiculo():
    post = dados.parse_args()
    print(post)
    consulta = post['consulta_veiculo'][0]
    print('-----------------/-############################ busca: ', consulta)
    nome = ast.literal_eval(consulta)
    busca = nome['nome']
    resultado = consultas.BuscaVeiculo(busca)
    print('-----------------/-############################ busca: ', busca)

    return resultado,200


@app.route('/carregadadosveiculo', methods=['GET', 'POST'])
def consultaVeiculounico():
    post = dados.parse_args()
    consulta = post['consulta_veiculo'][0]

    resultado = consultas.BuscaVeiculoUnico(consulta)

    print(resultado, '---------------Parceiro unico')
    return resultado,200

#----------Mapa PI---------
@app.route('/cadastromapapi', methods=['GET', 'POST'])
def cadastromapapi():
    post = dados.parse_args()

    consulta = post['cadastro_mapa']
    c = ast.literal_eval(consulta[0])
    colocacoes = (c['colocacoes'])

    resultado = insert.insert_mapa(consulta)
    id_mapa = resultado['id_mapa']
    cad_colocacao = insert.insert_colocacao(id_mapa,colocacoes)

    print(cad_colocacao, '---------------Mapa cadastrado unico')
    return cad_colocacao,200

@app.route('/consultamapapi/<string:dt_inicio>/<string:dt_fim>', methods=['GET', 'POST'])
def consultamapapi(dt_inicio,dt_fim):
    resultado = consultas.ConsultaMapas(dt_inicio,dt_fim)
    return resultado

@app.route('/retornamapapi/<string:cod_mapapi>', methods=['GET', 'POST'])
def retornamapapi(cod_mapapi):
    resultado = consultas.BuscaMapaPiUnico(cod_mapapi)

    return resultado

#-------Tabela de precos-------

@app.route('/consultatbpreco_detalhada/<string:id_tb>', methods=['GET', 'POST'])
def consultatabelapreco_detalhada(id_tb):
    resultado = consultas.ConsultaPrecoVeiculoTb(id_tb)
    return resultado

@app.route('/consultatbpreco/<string:dt_inicio>/<string:dt_fim>/<string:tp_veiculo>', methods=['GET', 'POST'])
def consultatabelapreco(dt_inicio,dt_fim,tp_veiculo):
    resultado = consultas.ConsultaTabelaPreco(dt_inicio,dt_fim,tp_veiculo)
    return resultado


@app.route('/cria_tb_preco/<string:dt_inicio>/<string:dt_fim>/<string:tp_veiculo>', methods=['GET', 'POST'])
def criatabelapreco(dt_inicio,dt_fim,tp_veiculo):
    resultado = insert.CriaTabela(dt_inicio,dt_fim,tp_veiculo)
    return resultado


#Envia tabela de preço pdf

# @app.route('/show/tb_preco-pdf/<string:id_empresa>/<string:id_tb>')
# def show_static_pdf(id_empresa, id_tb):
#     file_name = mountPDF.CriaPdf(id_empresa, id_tb)
#     return send_file(file_name, mimetype='application/x-pdf', attachment_filename='Tabela_preco.pdf',
#               as_attachment=True)

#Rotas de autenticação e validação
@app.route('/auth', methods=['GET', 'POST'])
def autenticacao():
    post = dados.parse_args()
    usuario = post['usuario'][0]
    senha = post['senha'][0]

    resultado = auth.ValidaUsuario(usuario,senha)

    print(resultado, '---------------autenticado')
    return resultado,200

@app.route('/valida', methods=['GET', 'POST'])
def valida_autenticacao():
    post = dados.parse_args()
    token = post['token'][0]
    resultado = auth.ValidaToken(token)

    print(resultado, '---------------validação de token')
    return resultado,200

@app.route('/alterarsenha', methods=['GET', 'POST'])
def alterarsenha():
    post = dados.parse_args()
    usuario = post['usuario'][0]
    senha = post['senha'][0]
    nova_senha = post['nova_senha'][0]

    resultado = insert.Alterasenha(usuario,senha,nova_senha)

    return resultado

# @app.route('/cadastra_funcionario', methods=['GET', 'POST'])
# def consulta_cpf():
#     post = dados.parse_args()
#     cpf = post['cpf'][0]
#     print(cpf, '------------Consulta CPF')
#     retorno = cons.consulta_cpf(cpf)
#     return retorno


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=2000)
    # app.run(host="192.168.0.103", debug=True)
    #app.run(debug=True)

