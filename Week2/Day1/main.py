# integer
year = 2023
age = 19
city = "Tel Aviv"

#concatenate
sentence_two = str(year) + "is the current year"

# print(sentence_two)

#string formatting
sentence_three = f"{year} is the current year"
sentence_four = f"{year} + is the current year, I'm {age} years old, I live in {city}"

# print(sentence_four)

#excercise_1
my_age = 25
length = 123879
my_future = "My future age is" + str(my_age+length)

# print(my_future)

# excercise_2
first_name = "Liya"
last_name = "Tsipenyuk"
full_name = f"{first_name} {last_name}"
# print(full_name)

favourite_color = "pink"
# print(favourite_color)
# print(id(favourite_color)) #id is different
# favourite_color = "blue"
# print(favourite_color)
# print(id(favourite_color))

sentence = "I like javascript"
#ask the use what language does you want to replace js with

user_choice = input("what language do you want \n")
# print(user_choice)

# sentence = sentence.replace("javascript", user_choice)

# print(sentence)

#always show the useer the last letter of any word

game = input("Give me a sentence \n")

last_character = game[len(game)-1]

print(f"the last character of the word {game} is {last_character}")
