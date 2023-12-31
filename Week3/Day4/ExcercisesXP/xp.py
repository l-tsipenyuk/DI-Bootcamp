# Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

import random
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

def get_data():
    global words
    words = []
    with open(dir_path + r"\\words.txt", "r") as words_file: 
        words_list = words_file.readlines()
        for i in words_list: 
            word = i.strip()
            words.append(word)
        return words     

def get_random_sentence(length):
    return ' '.join(random.sample(words,length)).lower()

def main():
    print("Hi! In this program, we provide a wordlist, and you can input a number of words to get a randomly generated sentence of the same length.")
    number = int(input("Insert the length of your sentence: \n"))
    try:
        if not 2 < number < 20:
            raise ValueError("Please enter the number between 2 and 20.")
    except ValueError as error:
        return error
    else:
        get_data()
        return get_random_sentence(number)


# print(get_data())
# print(get_random_sentence(4))
print(main())


