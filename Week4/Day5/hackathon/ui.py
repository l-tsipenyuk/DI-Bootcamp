from main import EnergyData

def getting_started():
    user_input = input("Welcome to BP Energy data tool. Please choose an action (typing the first letter of it):\n View a country's electricity generation mix over time\n Add the country's energy mix to PostgreSQL db(A)\n Delete an Item (D)\n Update an Item (U)\n Show the Menu (S)\n Exit\n")
    if user_input == "V":

        print("You can choose the country and the time range for the statistics.")
        country = input("Type in the country:\n")
        start_year = int(input("Type in the first year:\n"))
        last_year = int(input("Type in the last year:\n"))
        a = EnergyData(country)
        if a.valid_country() == False:
            print(f"No values found for {country}.")
        else:
            return a.histdata(start_year, last_year)
    if user_input == "A":
        user_input_level2 = input("Please choose what you want to do:\n Create a table in PostgreSQL (C) \n Fill in the data to an existing table in PostgreSQL (F) \n Delete the table in PostgreSQL (D)\n Go back to menu (Q)\n")

        if user_input_level2 == "C":
            table_name = input("Type in the table name (without spaces):\n")
            country = input("Type in the country:\n")
            start_year = int(input("Type in the first year:\n"))
            last_year = int(input("Type in the last year:\n"))

            a = EnergyData(country)
            result = a.create_a_table(table_name, start_year, last_year)
            user_input_level3 = input("Do you want to add the data? (Yes or No)\n")
            if user_input_level3 == "Yes":
                result = a.add_data_to_a_table(table_name, start_year, last_year)
                return result
            if user_input_level3 == "No":
                return "OK, now you just have an empty table."

        if user_input_level2 == "F":
            table_name = input("Type in the table name (without spaces). The table should already exist!:\n")
            country = input("Type in the country:\n")
            start_year = int(input("Type in the first year:\n"))
            last_year = int(input("Type in the last year:\n"))

            a = EnergyData(country)
            result = a.add_data_to_a_table(table_name, start_year, last_year)
            return result

        if user_input_level2 == "D":
            table_name = input("Type in the table name (without spaces). The table should already exist!:\n")
            country = input("Type in the country:\n")
            start_year = int(input("Type in the first year:\n"))
            last_year = int(input("Type in the last year:\n"))

            a = EnergyData(country)
            result = a.delete_the_table(table_name)
            return result
        
        if user_input_level2 == "Q":
            getting_started()


print(getting_started())