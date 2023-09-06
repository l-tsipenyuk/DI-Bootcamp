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

# Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

# def make_shirt(size,user_input):
#     print (f"The size of the shirt is {size} and the text is {user_input}")

# user_input = input("Type some text for your shirt: ")
# make_shirt("L", user_input)

# def make_shirt(size = "Large",user_input = "I love Python"):
#     print (f"The size of the shirt is {size} and the text is {user_input}")
#     if size == "Large":
#         print("default message")
#     elif size == "Medium":
#         print("default message2")
#     else:
#         print("Different message")

# user_input = input("Type some text for your shirt: ")
# size = input("Type the size: ")
# # make_shirt("Small",user_input)
# make_shirt(size,user_input)

# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.


# magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]
# def show_magicians ():
#     print(", ".join(magician_names))

# show_magicians()


# def make_great():
#     for i in range(len(magician_names)):
#         magician_names[i] = "the Great " + magician_names[i]
#         print(magician_names)

# make_great()

#  Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

#1

# import random
# def get_random_temp ():
#     random_temp = random.randint(-10, 40)
#     return random_temp

# get_random_temp()
#2

# def main ():
#     print(f"The temperature right now is {get_random_temp()}")

# main()

#3

# def main ():
#     if get_random_temp () < 0:
#         print("It's freezing")
#     elif 0 < get_random_temp () < 16:
#         print("Quite chilly")
#     elif 17 < get_random_temp () < 23:
#         print("Don't forget the coat")
#     elif 24 < get_random_temp () < 32:
#         print("Seems like it's Israeli winter")
#     elif 33 < get_random_temp () < 40:
#         print("Drink more water!")

# main()

#4

# import random

# def get_random_temp(season):
#     if season == "winter":
#         temp = random.randint(-10, 16)
#         return temp
#     elif season == "spring":
#         temp = random.randint(17, 23)
#         return temp
#     elif season == "summer":
#         temp = random.randint(24, 40)
#         return temp
#     elif season == "autumn":
#         temp = random.randint(18, 28)
#         return temp

# # print(get_random_temp("winter"))

# def main ():
#     season = input("Type in the season: \n")
#     if get_random_temp (season) < 0:
#         print("It's freezing")
#     elif 0 < get_random_temp (season) < 16:
#         print("Quite chilly")
#     elif 17 < get_random_temp (season) < 23:
#         print("Don't forget the coat")
#     elif 24 < get_random_temp (season) < 32:
#         print("Seems like it's getting hot")
#     elif 33 < get_random_temp (season) < 40:
#         print("Drink more water!")

# main()

#bonus: if the temperature is a float - we use random.uniform instead of random.int 

# import random

# def get_random_temp(season):
#     if season == "winter":
#         temp = random.uniform(-10.5, 16.5)
#         return temp
#     elif season == "spring":
#         temp = random.uniform(17.4, 23.2)
#         return temp
#     elif season == "summer":
#         temp = random.uniform(24.3, 40.2)
#         return temp
#     elif season == "autumn":
#         temp = random.randint(18.3, 28.2)
#         return temp

# # print(get_random_temp("winter"))

# def main ():
#     season = input("Type in the season: \n")
#     if get_random_temp (season) < 0:
#         print("It's freezing")
#     elif 0 < get_random_temp (season) < 16:
#         print("Quite chilly")
#     elif 17 < get_random_temp (season) < 23:
#         print("Don't forget the coat")
#     elif 24 < get_random_temp (season) < 32:
#         print("Seems like it's getting hot")
#     elif 33 < get_random_temp (season) < 40:
#         print("Drink more water!")

# main()

#bonus: if the month is a number 

# import random

# def get_random_temp(monthnum):
#     # monthnum = int(input("Type in the number of month: \n"))
#     if  monthnum == 12 or monthnum <=2: 
#         season = "winter"
#         temp = random.randint(-10, 16)
#         return season, temp
#     elif 3 <= monthnum  <=5:
#         season = "spring"
#         temp = random.randint(17, 23)
#         return season, temp
#     elif 6 <= monthnum  <=8:
#         season = "summer"
#         temp = random.randint(24, 40)
#         return season, temp
#     elif 9 <= monthnum  <=11:
#         season = "autumn"
#         temp = random.randint(18, 28)
#         return season, temp


# def main ():
#     monthnum = int(input("Type in the number of month: \n"))
#     season, temp = get_random_temp(monthnum)
#     if temp < 0:
#         print(f"It's freezing. The temperature is {temp}, the season is {season}")
#     elif 0 < temp < 16:
#         print(f"Quite chilly. The temperature is {temp}, the season is {season}")
#     elif 17 < temp < 23:
#         print(f"Don't forget the coat. The temperature is {temp}, the season is {season}")
#     elif 24 < temp < 32:
#         print(f"Seems like it's getting hot. The temperature is {temp}, the season is {season}")
#     elif 33 < temp < 40:
#         print(f"Drink more water! The temperature is {temp}, the season is {season}")

# main()

# Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# wrong_answers = []
# wrong_questions = []

# def quiz():
#     wrong_amount = 0  
#     for question_data in data:
#         question = question_data["question"]
#         your_answer = input(f"{question}\nType your answer: ")
#         right_answer = question_data["answer"]
#         if your_answer == right_answer:
#             print("Congrats! It's correct.")
#         else:
#             wrong_answers.append(your_answer)
#             wrong_questions.append(question)
#             print(f"It's wrong. The right answer was {right_answer}.")
#             wrong_amount += 1  
#             if (wrong_amount) > 3:
#                 print("You lost. Try once again.")
#                 break
#     print(f"You have {wrong_amount} wrong answers out of {len(data)} questions.")  

# quiz()
