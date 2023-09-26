from main import EnergyData

def getting_started():
    user_input = input("Welcome to BP Energy data tool. Please choose an action (typing the first letter of it):\n View a country's electricity generation mix over time\n Add an Item (A)\n Delete an Item (D)\n Update an Item (U)\n Show the Menu (S)\n Exit\n")
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

print(getting_started())