def get_data ():
    #read the data
    #give a list 
    with open("choco.txt", "r") as chocolate_file: 
        # print(chocolate_file.read())
        # list_sentences = chocolate_file.readlines()
        # for sentence in list_sentences: 
        #     print(sentence)
        chocolate_file.write("Hello")

def add_data_to_file():
    with open("choco.txt", "r+") as chocolate_file:
        list_sentence = chocolate_file.readlines()
        list_sentence.insert(1,"hello hello \n")
        chocolate_file.writelines(list_sentence)


# get_data()
add_data_to_file()


import random
import os

def get_data():
    words = []
    with open(dir_path + r"\\words.txt", "r") as words_file: 
        words_list = words_file.readlines()
        for i in words_list: 
            word = i.strip()
            words.append(word)
        return words

def get_random_sentence(length):
    return random.choise(words)

print(get_data())
print(get_random_sentence(1))
