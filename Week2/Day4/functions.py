#syntax of a function

#create a function
# def say_hello ():
#     print("hello")

# #invokation or calling the function (in this example 3 times)
# say_hello()
# say_hello()
# say_hello()

#arguments(inside invokation) and parameters (inside the brackets in def). parameter is a box waiting to be filled with info

# def say_hello (username):
#     print("hello " + username)

# say_hello("John")
# say_hello("Kate")

# #if we don't call the function we won't see it 
# def say_bye ():
#     print("bye")

# def calculate (a, b, operator):
#     if operator == "+" :
#         total = a + b
#         print(total)
#     elif operator == "-":
#         total = a - b
#         print(total)

# calculate(2,4,"+")

# Exercise
#  1. create a function that takes a number as an argument, and check if this number is even or odd
# def odd_even (a):
#     if a % 2 == 0:
#         print(f"{a} is even")
#     else: 
#         print(f"{a} is odd")

# odd_even (3)


# 2. create a function that takes a list of numbers as an argument, and check if each number is even or odd
# def odd_even_list (numbers):
#     for number in numbers:
#         if number % 2 == 0:
#             print(f"{number} is even")
#         else: 
#             print(f"{number} is odd")

# odd_even_list ([4, 8, 9])