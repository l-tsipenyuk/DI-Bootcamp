# Exercise 1: Counting Frequencies
# Problem Description
# Create a function that counts the frequency of each unique word in a given string and returns a dictionary. The keys will be the unique words and the values will be the counts of those words. The function should have a time complexity of (O(n)).

# def word_frequency(input_str):
#     input_list = input_str.split()
#     word_dict = {}
#     for i in input_list:
#         if i in word_dict:
#             word_dict[i] += 1
#         else:
#             word_dict[i] = 1

#     return word_dict

# input_str = "apple orange apple banana orange apple"
# result = word_frequency(input_str)
# print(result)
    

# Exercise 2: Longest Substring Without Repeating Characters
# Problem Description
# You are given a string s. Your task is to find the length of the longest substring without repeating characters. A substring is a contiguous sequence of characters within a string.

# Write a function to accomplish this task with an efficient time complexity.

# def longest_unique_substring(s):
#     longest_str = ""
#     current_str = ""
#     start = 0

#     for i in range(len(s)):
#         if s[i] not in current_str:
#             current_str += s[i]
#         else:
#             start = s.index(s[i], start) + 1
#             current_str = s[start:i + 1]
    
#         if len(current_str) > len(longest_str):
#             longest_str = current_str
    
#     return longest_str

# s = "abcabcbb"
# # s = "pwwkew"
# # s = "bbbbb"
# result = longest_unique_substring(s)
# length = len(longest_unique_substring(s))
# print(f"The answer is '{result}', with the length of {length}.")