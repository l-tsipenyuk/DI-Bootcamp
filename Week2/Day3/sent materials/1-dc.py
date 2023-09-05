# DC 1

# user_answer = input("give me a number and a length separated by a comma \n")
# # "7,5"
# list_answers = user_answer.split(",")
# # ["7", "5"]
# number = int(list_answers[0])
# length = int(list_answers[1])
# list_multiples = []

# # we need the loop to run 5 times (meaning the length)
# # [0, 1, 2, 3, 4]
# for x in range(length):
#     # find the multiple
#     multiple = number * (x+1)
#     list_multiples.append(multiple)

# print(list_multiples)


# 1st loop
# x = 0
# multiple =  7 * 1

# 2nd loop
# x = 1
# multiple =  7 * 2

user_answer = input("give me a number and a length separated by a comma \n")
list_answers = user_answer.split(",")
number = int(list_answers[0])
length = int(list_answers[1])
list_multiples = []

for x in range(length):
    multiple = number * (x+1)
    list_multiples.append(multiple)

print(list_multiples)

user_answer = input("give me a number and a length separated by a comma \n")
list_answers = user_answer.split(",")
number = int(list_answers[0])
length = int(list_answers[1])
new_list_multiples = []

for x in range(1, length+1):
    multiple = number * x
    new_list_multiples.append(multiple)

print(new_list_multiples)

# list comprehension
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# number_list = [x+1 for x in range(20)]
# print(number_list)
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
# create a new list
# how do we fill this list ?

# do a loop from 1 to 19
# every number of this range + 1 should
# be appended to the new list

# end result
# [1, 2, 3, ...., 20]

# # loops
# number_list = []

# for x in range(20) :
#     number_list.append(x+1)


fruits = ["banana", "apple", "pear", "melon"]

relevant_fruits = [fruit for fruit in fruits if len(fruit) >= 5]

# create a new list
# how we do fill this list ?

# we do a loop on the fruits list
# if the fruit length is bigger or equal than 5
# we add it to the new list

# end result : a list containing only the fruits
# that have a length bigger or equal than 5


fruits = ["banana", "apple", "pear", "melon"]

other_fruits = []

for fruit in fruits :
    if len(fruit) >= 5 :
        other_fruits.append(fruit)

# DAILY CHALLENGE with list comprehension
user_answer = input("give me a number and a length separated by a comma \n")
list_answers = user_answer.split(",")
number = int(list_answers[0])
length = int(list_answers[1])

list_multiples = [number * x for x in range(1, length+1)]


# DC2 

# word = "ttiiitllleeee"

# new_word = word[0]
# # new_word = "t"

# first_letter = word[0]

# 1st loop
# letter = "t"

# 2nd loop
# letter = "t"

word = "ttiiitllleeee"

new_word = word[0]
# new_word = "t"

# [1, 2, 3, 4, 5]
for number in range(1, len(word)) : 
    if word[number] != new_word[-1] :
        new_word += word[number]

print(new_word)

# 1st loop
# new_word = "t"
# word[number] --> word[1] --> "t"
# "t" != new_word[-1]
# --> "t" != "t"

# 2nd loop
# new_word = "t"
# word[number] --> word[2] --> "i"
# "i" != new_word[-1]
# --> "i" != "t"
# --> new_word = "t" + "i" --< "ti"