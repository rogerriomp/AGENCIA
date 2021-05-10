systemctl start postgresql.service

screen -S "PYTHON-SERVER-BACKEND" -d -m /home/aquino/Documentos/Projetos/AGENCIA/backend/venv/bin/python /home/aquino/Documentos/Projetos/AGENCIA/backend/api_run.py

cd /home/aquino/Documentos/Projetos/AGENCIA/agencia/
code .
screen -S "REACT-SERVER" -d -m npm start
