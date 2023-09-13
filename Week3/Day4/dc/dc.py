import os
dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, string):
        self.string = string

    def frequency(self):
        lower = self.string.lower()
        word_list = lower.split()
        dictionary = {}
        for word in word_list:
            word_count = word_list.count(word)
            if  word_count > 1:
                dictionary[word] = word_count

        set_list = set(word_list)
        non_repeating = set_list.difference(dictionary.keys())
        most_frequent = max(word_list, key = word_list.count)

        if dictionary == {}:
            return "There are no dublicates in the provided text."
        else:
            return f"Here are non-repeating words: {non_repeating}, here are repeating words: {dictionary}. The most frequent word is '{most_frequent}'."      
    
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
# print(example.frequency())

example2 = Text.from_file(dir_path + r"\\stranger.txt")
print(example2.frequency())







