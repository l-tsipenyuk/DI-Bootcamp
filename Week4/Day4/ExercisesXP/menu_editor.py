from xp import MenuItem, MenuManager

def show_user_menu():
    user_input = input("Please choose an action (typing the first letter of it):\n View an Item (V)\n Add an Item (A)\n Delete an Item (D)\n Update an Item (U)\n Show the Menu (S)\n Exit\n")
    # d = input("Type the item\n")
    # e = MenuManager()
    if user_input == "V":
        d = input("Type the item\n")
        e = MenuManager()
        print(e.get_by_name(d))
    if user_input == "A":
        add_item_to_menu()
    if user_input == "D":
        remove_item_from_menu()
    if user_input == "U":
        update_item_from_menu()
    if user_input == "S" or "Exit":
        show_restaurant_menu()

def add_item_to_menu():
        a = str(input("Type the item\n"))
        b = int(input("Type the item's price\n"))
        c = MenuItem(a,b)
        try:
            c.save()
            print("Item was added successfully.")
        except Exception as e:
            None

def remove_item_from_menu():
        a = str(input("Type the item\n"))
        b = int(input("Type the item's price\n"))
        c = MenuItem(a,b)
        try:
            c.delete()
            print("Item was deleted successfully.")
        except Exception as e:
            print("There's an error.")

def update_item_from_menu():
        a = str(input("Type item which you would like to update:\n"))
        b = str(input("Type the name of an updated item.\n"))
        c = str(input("Type the price of an updated item.\n"))
        d = MenuItem(b,c)
        try:
            d.update(a)
            print("Item was updated successfully.")
        except Exception as e:
            print("There's an error.")

def show_restaurant_menu():
    a = MenuManager()
    print(a.all_items())

show_user_menu()