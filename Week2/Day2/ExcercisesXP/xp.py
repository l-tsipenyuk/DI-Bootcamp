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

# my_list = list(range(21))
# for number in my_list:
#     if my_list[number] % 2 == 0:
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

