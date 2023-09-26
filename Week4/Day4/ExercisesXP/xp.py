# PART 1
# In this exercise we will use PostgreSQL and Python.

# Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns

# item_id : SERIAL PRIMARY KEY
# item_name : VARCHAR(30) NOT NULL
# item_price : SMALLINT DEFAULT 0

# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.


# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

import psycopg2
import psycopg2.extras

DB_NAME = "menu_items"
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

class MenuItem:
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price
    
    def save(self):

        query = f'''
        insert into menu_items (item_name, item_price)
        values 
        ('{self.name}', {self.price}); 
        '''
        cursor.execute(query) 
        connection.commit()

    def delete(self):

        query = f'''
        delete from menu_items where item_name = '{self.name}' and item_price = {self.price}
        returning item_name, item_price;
        '''
        cursor.execute(query) 
        connection.commit()

    def update(self, old_name, update_name = True, update_price = True):
        query = 'update menu_items set '
        updates = []

        if update_name: 
            updates.append(f"item_name = '{self.name}'")
        if update_price:
            updates.append(f"item_price = {self.price} ")
        if not updates:
            return

        query += ' ,'.join(updates)
        query += f"where item_name = '{old_name}'"
        cursor.execute(query) 
        connection.commit()
    
# a = MenuItem('Good Soup',25)
# b = MenuItem('Steak', 45)
# b.save()
# a.save()
# a.delete()
# a.update('Soup')

class MenuManager():
    def get_by_name(self, search_name):
        try:
            query = '''select * from menu_items where item_name = %s; '''
            cursor.execute(query, (search_name,))
            output = cursor.fetchall()
            for row in output:
                print("Item: ", row['item_name'])
                print("Price: ", row['item_price'])
        except Exception as e:
            None
        
    def all_items(self):
        try:
            query = '''select * from menu_items; '''
            cursor.execute(query)
            output = cursor.fetchall()
            for row in output:
                print("Item: ", row['item_name'])
                print("Price: ", row['item_price'])
        except Exception as e:
            None

# c = MenuManager()
# print(c.get_by_name('Good Soup'))
# print(c.all_items())

# print(new_output)

# print(out)



def get_the_peer(self, country, year, fuel_type):
    total_gen_data = {}
    fuel_type_gen_data = {}

    year_column_total = None
    for col_index, cell in enumerate(ws_total[3]):
        if cell.value == year:
            year_column_total = col_index + 1  
            break

    year_column_hydro = None
    for col_index, cell in enumerate(ws_hydro[3]):
        if cell.value == year:
            year_column_hydro = col_index + 1  
            break

    if year_column_total is not None and year_column_hydro is not None:
        for row_total, row_hydro in zip(
            ws_total.iter_rows(min_row=4, max_row=109, min_col=year_column_total, max_col=year_column_total),
            ws_hydro.iter_rows(min_row=4, max_row=109, min_col=year_column_hydro, max_col=year_column_hydro)
        ):
            country_cell_total = row_total[0]
            country_cell_hydro = row_hydro[0]
            total_gen = country_cell_total.value
            fuel_gen = country_cell_hydro.value

            if total_gen is not None and fuel_gen is not None:
                total_gen_data[country_cell_total.value] = total_gen
                fuel_type_gen_data[country_cell_hydro.value] = fuel_gen

    share_data = {}
    for country in total_gen_data:
        total_gen = total_gen_data[country]
        fuel_type_gen = fuel_type_gen_data.get(country, 0)

        if total_gen is not None and total_gen != 0:
            share_data[country] = (fuel_type_gen / total_gen) * 100

    country_share = share_data.get(self.country, 0)
    sorted_countries = sorted(share_data.items(), key=lambda x: abs(x[1] - country_share))
    result = sorted_countries[:5]

    for country, share in result:
        print(f"Country: {country}, Share: {share:.2f}%")


