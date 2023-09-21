import psycopg2
from dotenv import load_dotenv
import os
load_dotenv()

# 1. How to connect python to a postgress database:
DB_NAME = "db_actors"
USER = "postgres"
PASSWORD = "root"
HOST = "localhost"
PORT = "5432" #5433

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

# 2. Create a cursor object - to run queries in pgadmin. 
cursor = connection.cursor()

def create_table(table_name: str):

    query = f'''
    create table {table_name} (
        id serial primary key,
        num integer not null
    );
    '''

    cursor.execute(query) #commit or prepare for actual execution
    connection.commit() #make changes in the database

# create_table('another_table')

def insert_into_table(table_name: str,num_value: int):

    query = f'''
    insert into {table_name}(num)
    values 
    ({num_value}) 
    '''
    cursor.execute(query) #commit or prepare for actual execution
    connection.commit() #make changes in the database

# insert_into_table('another_table', 200)

table_name = 'another_table'
query = f'''
select * from {table_name};
'''

cursor.execute(query)
output = cursor.fetchall()
# print(output)

#3. Close the connection - in the end of working with the db.
connection.close()