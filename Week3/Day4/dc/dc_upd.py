import os
dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, string):
        self.string = string
        self.frequency = self.frequency()

    def frequency(self):
        lower = self.string.lower()
        word_list = lower.split()
        dictionary = {}
        for word in word_list:
            word_count = word_list.count(word)
            if  word_count > 1:
                dictionary[word] = word_count
        return dictionary

    def frequency_result(self):
  
        if not self.frequency:
            return "There are no dublicates in the provided text."
        else:
            non_repeating = set(self.frequency.keys())
            most_frequent = max(self.frequency, key = self.frequency.get)
            return f"Here are non-repeating words: {non_repeating}, here are repeating words: {self.frequency}. The most frequent word is '{most_frequent}'."    

    def get_frequency_word(self, word):
        if word in self.frequency:
            return f"The word '{word}' repeats {self.frequency[word]} times."
        else:
            return None
    
    @classmethod   
    def from_file(cls, filename):
        text = "" 
        with open (filename, "r") as words_file:
            words_list = words_file.readlines()
            for i in words_list: 
                word = i.strip()
                text += word + " "
        return cls(text.strip())

# example = Text("A good book would sometimes cost as much as a good house.")
# print(example.frequency_result())
# print(example.get_frequency_word("good"))

example2 = Text.from_file(dir_path + r"\\stranger.txt")
# print(example2.frequency_result())
print(example2.get_frequency_word("slight"))







