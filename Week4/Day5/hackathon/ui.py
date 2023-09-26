from main import EnergyData

def getting_started():
    user_input = input("Welcome to BP Energy data tool. Please choose an action (typing the first letter of it):\n View a country's electricity generation mix over time (V)\n  Get the generation mix in % (G)\n Add the country's energy mix to PostgreSQL db(A)\n Exit\n")
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

    if user_input == "G":
        country = input("Type in the country:\n")
        start_year = int(input("Type in the year:\n"))
        last_year = start_year
        a = EnergyData(country)
        result = a.get_the_share(country, start_year)
        print(result)

        while True:
            user_input_level3 = input("Do you want to check another year for the same country?(Yes or No)\n")
            if user_input_level3.lower() == "yes":
                start_year = int(input("Type in the other year.\n"))
                result = a.get_the_share(country, start_year)
                print(result)
            elif user_input_level3.lower() == "no":
                break
   
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
            if user_input_level3.lower() == "yes":
                result = a.add_data_to_a_table(table_name, start_year, last_year)
                return result
            if user_input_level3.lower() == "no":
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