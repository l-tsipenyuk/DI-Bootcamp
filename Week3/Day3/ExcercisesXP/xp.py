# Exercise 1: Currencies
# Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         if self.amount == 1:
#             return f"{self.amount} {self.currency}"
#         else:
#             return f"{self.amount} {self.currency}s"

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         if self.amount == 1:
#             return f"{self.amount} {self.currency}"
#         else:
#             return f"{self.amount} {self.currency}s" 

#     def __add__(self, other_num):
#         return self.amount + other_num
    
#     def __add__(self, other_curr):
#         return self.amount + other_curr.amount
    
#     def __iadd__(self, other_num2):
#         if isinstance(other_num2, int):
#             self.amount += other_num2
#             return self
#         else:
#             if self.currency == other_num2.currency:
#                     self.amount += other_num2.amount
#                     return self
#             else:
#                  return f"Error. These are different currencies"
    

# c1 = Currency("dollar",5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
# print(c1)
# print(c2)
# print(c3)
# print(c4)
# print(int(c1))
# print(repr(c1))
# print(c1 + 5) 
# print(c1 + c2)
# print(c1)
# c1 += 5 
# print(c1)
# c1 += 20 
# print(c1)
# c1 += c3 #I used if else instead of TypeError
# print(c1)


# Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

# import module_name 

# OR 

# from module_name import function_name 

# OR 

# from module_name import function_name as fn 

# OR

# import module_name as mn

#see in files func.py and excercise_one.py

#  Exercise 3: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

# from random import randint

# def number_comparison(number):
#     number = int(input("Type a number between 0 and 100 \n"))
#     random_number = randint(0,100)
#     if number == random_number:
#         print("Success!")
#     else:
#         print(f"No success for today. Random number was {random_number}")

# number_comparison(40)

# Exercise 4: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

# import string
# import random

# length = 5
# result = ''.join(random.choices(string.ascii_letters, k=length))
# print(f"Random string of length {length} is '{result}'")

# Exercise 5 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

# import datetime

# def datetime_today():
#     datetime_today = datetime.datetime.now().date()
#     return f"Today's date is {datetime_today}."

# print(datetime_today())

# Exercise 6 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours)

# import datetime
# from datetime import datetime

# def when_is_january():
#     jan = datetime(2024, 1, 1)
#     now = datetime.now()
#     left = jan - now
#     left_str = str(left).split(".")[0]
#     return f"The first of January is in {left_str} hours"

# print(when_is_january())

# Exercise 7 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime
from datetime import datetime, timedelta

# def life_minutes(birthday_date):
#     now = datetime.now()
#     delta = now - birthday_date

#     result = delta.days * 24 * 60 + delta.seconds // 60 + (delta.seconds // 60) % 60
#     return result

# print(life_minutes(datetime(1996, 12, 11)))

##alternative version

# def life_minutes(birthday_date):
#     now = datetime.now()
#     lived = now - birthday_date
#     days = lived.days
#     lived2 = str(lived).split(".")[0]
#     lived3 = str(lived).split(", ")[1]
#     hours = str(lived3).split(":")[0]
#     minutes = str(lived3).split(":")[1]
#     hours_correct = int(hours)
#     minutes_correct = int(minutes)
    
#     result = days*1440 + hours_correct*60 + minutes_correct
 
#     return f"The user lived in his life {result} minutes"


# print(life_minutes(datetime(1996, 12, 11)))

# Exercise 8 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker
fake = Faker()
# users = [{"name": x, "address": y, "language_code": z}]
def fill_in_the_data():
    # user = [{}]
    key1 = "name"
    key2 = "address"
    # key3 = "language_code"
    value1 = fake.name()
    value2 = fake.address()
    user = {key1 : value1, key2 : value2}
    return user


print(fill_in_the_data())

