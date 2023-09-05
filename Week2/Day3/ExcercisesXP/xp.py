# Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# output = list(zip(keys, values))
# dict1 = dict(output)
# print(dict1)

# Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# price2 = []
# for x, y in family.items():
#     if y<3: 
#         price2.append(0)
#     elif 3<y<12:
#         price2.append(10)
#     elif y>12:
#         price2.append(15)

# total_cost = sum(price2)
# print(f"The family's total cost for the movies is {total_cost}")

#bonus question
# family = {}
# for i in range (4):
#     x = input("Enter the name")
#     y = int(input("Enter the age"))
#     family[x] = y
# price2 = []
# for x, y in family.items():
#     if y<3: 
#         price2.append(0)
#     elif 3<y<12:
#         price2.append(10)
#     elif y>12:
#         price2.append(15)

# total_cost = sum(price2)
# print(f"The family's total cost for the movies is {total_cost}")

# Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000


# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

#2
# brand = {
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000,
#     "major_color": {
#         "France": "blue",
#         "Spain": "red",
#         "US": "pink, green"
#     }
# }

#3
# brand["number_stores"] = 2
# print(brand)

#4
# 
# types = ",".join(brand["type_of_clothes"])
# print(f"Zara's clients are rich people. The enjoy following types of clothes:{types}.")

#5
# brand["country_creation"] = "Spain"
# print(brand)

#6
# brand["international_competitors"] += ["Desigual"]
# print(brand)

#7
# del brand["creation_date"]
# print(brand)

#8
# print(brand["international_competitors"][2])

#9
# print(brand["major_color"]["US"])

#10
# print(f"Amount of key key value pairs is {len(brand)}")

#11
# print(brand.keys())

#12
# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000,
# }

# # print(more_on_zara)

# #13
# new_dict = brand | more_on_zara
# print(new_dict)

# #14
# print(new_dict["number_stores"])
#the number of stores value was substituted by the value from the new dictionary

# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

#1
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# numbers = list(range(0,5))
# all2 = zip(users, numbers)
# dict1 = dict(all2)
# print(dict1)

#2
