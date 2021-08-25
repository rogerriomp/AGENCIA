launchctl start postgresql.service

screen -S "PYTHON-SERVER-BACKEND" -d -m /Users/gucarvalho/go/src/github.com/aquino/AGENCIA/backend/venv/bin/python /Users/gucarvalho/go/src/github.com/aquino/AGENCIA/backend/api_run.py

cd /Users/gucarvalho/go/src/github.com/aquino/AGENCIA/agencia/
screen -S "REACT-SERVER" -d -m npm start
