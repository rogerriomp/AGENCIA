import sqlite3
import pandas as pd
import ast as ast
from sqlalchemy import create_engine

#engine = create_engine('postgresql://postgres:55262408@172.16.200.237:5432/postgres')
engine = create_engine('postgresql://postgres:55262408@localhost:5432/expensao')
