import jwt
from time import time
from sqlalchemy import create_engine
import ast
import pandas as pd
import json
import settings
# engine = create_engine('postgresql://postgres:55262408@localhost:5432/postgres')
# cur = engine.connect()
engine = settings.engine
cur = engine.connect()
# user_id = 123

def Permisoes(usr):
    q = """select *
            from funcionarios 
            where id = """+"'"+str(usr)+"'"
    df = pd.read_sql(q, cur)
    if len(df) >0:
        permissoes = df['tp_acesso'][0]
        resultado={'permissoes':permissoes}
    else:
        resultado = {'msg': 'Usuário sem premissões, favor entrar em contato com o suporte'}

    return resultado


def Geratoken(user_id):
    secret = 'minha_super_chave_imprevisivel'

    payload = {
      'uid': user_id,
      'exp': int(time()) + 36000#3600 # queremos que o token seja valido por uma hora
    }

    meu_token_assinado = jwt.encode(payload, secret, algorithm='HS256').decode('utf-8')
    return meu_token_assinado


def ValidaToken(token):
    secret = 'minha_super_chave_imprevisivel'
    meu_jwt = token

    try:
        informacoes = jwt.decode(meu_jwt, secret, algorithm='HS256')
    except jwt.ExpiredSignatureError:
        informacoes = 'Seu token esta expirado!'
    except jwt.DecodeError:
        informacoes ='Token invalido ou segredo incorreto!'
    except:
        informacoes = 'Outro erro!'
    else:
        informacoes = informacoes
    return json.dumps({'msg':informacoes})

def ValidaUsuario(usr, password):
    q = """select u.username, p.cpf, u."password" 
from users u 
join pessoas p on p.id = u.id_pessoa 
where (u.username = """+"'"+usr+"'"+""" or LTRIM(translate(p.cpf, translate(p.cpf, '1234567890', '') , '')) = """+"'"+usr+"'"+""")"""
    df = pd.read_sql(q,cur)
    if len(df)>0:
        for i in df.itertuples():
            usuario = i[1]
            cpf = i[2]
            senha = i[3]
        if senha == password:
            token = Geratoken(usuario)
            permissoes = Permisoes(usuario)
            resultado = {'usuario': usuario, 'cpf': cpf, 'token': token, 'permissoes': permissoes}
        else:
            resultado = {'msg': 'Usuário ou senha incorretos'}
    else:
        resultado = {'msg': 'Usuário ou senha incorretos'}
    resultado = json.dumps(resultado)
    return resultado






# print(Permisoes(1))
#usuario = 'rogerio.aquino'
# senha = 'trocar123'
#
# print(ValidaUsuario(usuario, senha))
# d = ValidaUsuario(usuario, senha)
# print(ValidaToken(d['token']))


#print(Permisoes(usuario))

# print(ValidaToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJyb2dlcmlvLmFxdWlubyIsImV4cCI6MTU4NTY3NzExOH0.EanXQiz0PQuD9ILewcG8rUqlD4425fFFa1y5Ld6AZ4s"))


# print(pd.read_sql("select * from funcionarios", cur))