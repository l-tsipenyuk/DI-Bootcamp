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





