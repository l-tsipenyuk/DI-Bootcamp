# My solution:
#1

# user_input = input("Insert a number and length")
# list_user = user_input.split(",") 
# list_user = [int(x) for x in list_user]
# number = list(range(1, list_user[1] + 1))
# row = []
# for i in number:
#     new = list_user[0] * i  
#     row.append(new)
# print(row)

#other options:
#how to make a list of numbers starting from 1
# number_list = [x+1 for x in range(20)]
# print(number_list)

#in one line:
# list_multiples = [number * x for x in range(1, length + 1)]

# (example)
# fruit = ["banana", "appl", "something"]
# other_fruits = []
# for fruit in fruit: 
#     if len(fruit) >= 5:
#         other_fruits.append(fruit)
# print(other_fruits)





#2

# user_input = input("Type a word with duplicates")
# list_user = list(user_input)
# correct = [list_user[0]]
# for i in range(1, len(list_user)): 
#     if list_user[i] != list_user[i-1]:
#         correct.append(list_user[i])
# correct_word = "".join(correct)
# print(f"Correct word is {correct_word}")


#alternative solution

# word = "t"
# new_word = word[0]
# for number in range(1, len(word)): 
#     if word[number] != new_word[-1] :
#         new_word += word[number]
# print(new_word)