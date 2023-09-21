import requests
response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population")

import random
import psycopg2
import psycopg2.extras

DB_NAME = "countries_dc"
USER = "postgres"
PASSWORD = "root"
HOST = "localhost"
PORT = "5432" 

try:
    connection = psycopg2.connect(
        dbname = DB_NAME, 
        user = USER,
        password = PASSWORD,
        host = HOST,
        port = PORT
    )
except Exception as e:
    print(f"Error: {e}")

cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

def create_table(table_name: str):

    query = f'''
    create table {table_name} (
        id serial primary key,
        name varchar(150),
        capital varchar(150),
        flag varchar(500),
        subregion varchar(150),
        population int
    );
    '''
    cursor.execute(query) 
    connection.commit() 

def insert_data():
        item = random.choice(response.json())
        name = item['name']['common']
        capital = ' '.join(item['capital'])
        flag = item['flag']
        subregion = item['subregion']
        population = item['population']

        query = f'''
        insert into countries_dc (name, capital, flag, subregion, population)
        values 
        ('{name}', '{capital}', '{flag}', '{subregion}', {population}); 
        '''
        cursor.execute(query) 
        connection.commit()

# create_table('countries_dc')
for _ in range(10):
    insert_data() 

