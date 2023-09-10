#1

# def sort_sequence():
#     user_input = input("Type a sequence of words: \n")
#     sequence_list = []
#     sequence_list.extend(user_input.split(","))
#     result = sorted(sequence_list)
#     return result

# print(sort_sequence())

#2

def longest_word(user_input):
    sentence_list = user_input.split(" ")
    longest_word = max(sentence_list, key = len)
    print(f"The longest word in your sentence is {longest_word}")

user_input = input("Type your sentence: \n")
longest_word(user_input)

#another option. pay attention! it occurs on interviews

# def longest_word():
#     sentence = "I like programming in Python"
#     list_words = sentence.split(" ")
#     longest_word = list_words[0]
#     for word in list_words: 
#         if len(word) > len(longest_word):
#             longest_word = word
#     print(longest_word)

# longest_word()

def longest_word():
    sentence = "I like programming and asdfrewqgtr in Python"
    list_words = sentence.split(" ")
    longest_words = []
    longest_word = list_words[0]
    for word in list_words: 
        if len(word) > len(longest_word):
            longest_word = word
    for word in list_words:     #this allows us to see 2 longest words (if their length is the same)
        if len(word) == len(longest_word):
            longest_words.append(word)
    print(longest_words)

longest_word()