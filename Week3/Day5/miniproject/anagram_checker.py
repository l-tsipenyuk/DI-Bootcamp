import os
import nltk
nltk.download('words')
from nltk.corpus import words

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self):
        # self.word = word.lower()
        self.text = ""
        with open (dir_path + r"\\words.txt", "r") as words_file:
            words_list = words_file.readlines()
            for i in words_list: 
                word = i.strip()
                self.text += word + " "
    
    def is_valid_word(self, input_word):
        while True:
            if input_word == "quit":
                break
            if input_word in nltk.corpus.words.words():
                anagrams = self.get_anagrams(input_word)
                if anagrams:
                    print(f"Anagrams for '{input_word}' are '{' ,'.join(anagrams)}'")
                else:
                    print(f"There are no anagrams for the word '{input_word}'")
                break
            else:
                print("It's not an English word.")
                input_word = input("Enter a valid word or 'quit'.\n").strip().lower()

    def get_anagrams(self, input_word):
        text_low = self.text.lower()
        word_list = list(text_low.split(" ")) 
        anagrams = []
        for i in word_list:
            if sorted(i) == sorted(input_word) and i != input_word:
                anagrams.append(i)
        return anagrams









