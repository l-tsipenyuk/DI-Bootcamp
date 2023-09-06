# Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = [7, 18, 25]
# set_my_numbers = set(my_fav_numbers)
# my_fav_numbers_extra = [26, 27, 28]
# set_my_fav_numbers_extra = set(my_fav_numbers_extra)
# my_new_set = set_my_numbers | set_my_fav_numbers_extra
# list_from_new_set = list(my_new_set)
# remove = list_from_new_set.pop(-1)
# print(list_from_new_set)
# friend_numbers = [99, 98, 97]
# friend_set = set(friend_numbers)
# our_fav_numbers = set_my_numbers | friend_set
# print(our_fav_numbers)

# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No, tuple's items can't be changed 

# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# fruits = ["Banana", "Apples", "Oranges", "Blueberries"]
# fruits.remove("Banana")
# fruits.remove("Blueberries")
# fruits.append("Kiwi")
# fruits.insert(0, "Apples")
# count = fruits.count("Apples")
# # print(f"There are {count} 'Apples' items in fruits list")
# clear_fruits = fruits.clear()
# print(clear_fruits)

# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# # Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

# Floats are numbers with decimals (like 4.5) and integers are real numbers (like 4 or 5)
# We can generate an array of floats using numpy linspace

# import numpy as np
# seq, step = np.linspace(1.5, 5.0, num=8, retstep=True)
# seq_list = seq.tolist()
# print(seq_list)

# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for number in range (21):
#     print(number)

# my_list = list(range(1,21))
# for number in my_list:
#     if my_list.index(number) % 2 == 0:
#         print(number)
#     else: 
#         pass

# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# while True:
#     user_input = input("Enter your name ")
#     my_name = "Liya"
#     if my_name != user_input:
#         print("We don't share the same name, try one more time.")
#     else:
#         print("We share the same name")
#         break  

# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# user_input = input("Type your favourite fruits, separated by a single space ")
# list_fruits = user_input.split()
# user_input_extra = input("Input a name of any fruit ")
# list_fruits_extra = user_input_extra.split()
# list_merged = list_fruits + list_fruits_extra
# duplicates = any(list_merged.count(x) > 1 for x in list_merged)
# if duplicates == True:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# all_toppings = []
# price = float(2.5)

# while True:
#     user_input = input("Type in some pizza toppings (if you're done, type 'quit') ")
#     if user_input == "quit":
#         if len(all_toppings) == 0:
#             print("That's it. Your bill will be 10 dollars")
#         else:
#             amount = len(all_toppings)
#             bill = 10 + price * amount
#             print(f"That's it. Your bill will be {bill} dollars")
#         break
#     else:
#         all_toppings.append(user_input)

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


# order = []
# price3 = 0
# price12 = 10
# price13 = 15
# total1 = 0  
# total2 = 0
# total3 = 0

# while True:
#     user_input = input("What's your age? (if you mentioned all the family members, type 'quit') ")
#     if user_input == "quit":
#         bill = total1 + total2 + total3
#         print(f"That's it. Your bill will be {bill} dollars")
#         break
#     else:
#         age = int(user_input)
#         if 0 <= age <= 3:  
#             total1 += price3 
#         elif 4 <= age <= 12:  
#             total2 += price12 
#         elif age > 12:
#             total3 += price13 
#         order.append(age)  

#for a teenager group

# order = []
# price = 15
# total = 0  

# while True:
#     user_input = input("What's your age? (we won't sell you a ticket if you're age is between 16 and 21). If you mentioned all of your company members, type 'quit') ")
#     if user_input == "quit":
#         print(f"Alrighty. Your bill will be {total} dollars")
#         break
#     else:
#         age = int(user_input)
#         if 16 <= age <= 21:  
#             order.pop()
#         else:  
#             total += price
#         order.append(age)  

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# orders = []

# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")
# while True:
#     user_input = input("What do you want to order? Choose from our menu. If you're done, type 'quit': ") 
#     if user_input == "quit":
#         break
#     elif user_input == "Pastrami sandwich":
#         print("Sorry, we ran out of pastrami. Please choose something else")
#     else:
#         orders.append(user_input)
# finished_orders = []
# if orders != []:
#     finished_orders.append(orders)
#     for order in finished_orders[0]:
#         print(f"I made your {order}.")
