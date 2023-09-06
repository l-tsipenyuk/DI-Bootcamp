# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def what_I_learn ():
#     print("Hi! I'm learning functions in python.")

# what_I_learn()

# Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function

# def favourite_book(title):
#     print(f"My favourite book is {title}")
#     return

# favourite_book("Harry Potter")

# Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city, country="Israel"):
#     print(f"{city} is in {country}")

# describe_city("Moscow","Russia")

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

#complicated version
# import random

# def result(random_num):
#     user_input = int(input("Insert the number between 0 and 100: "))
#     while not (0 <= user_input <= 100): 
#         user_input = int(input("Error. Choose a number between 0 and 100: "))
#     if user_input == random_num:
#         print("Success")
#     else:
#         print(f"Numbers are different. You typed {user_input} and the other number is {random_num}")

# random_num = random.randint(0, 100)
# result(random_num)

#another option 
# import random

# def guess_the_number(number):
#     random_num = random.randint(0, 100)
#     if number == random_num:
#         print(f"Congrats! {random_num}")
#     else:
#         print(f"Not the same number. The random number was {random_num}")

# guess_the_number(59)


