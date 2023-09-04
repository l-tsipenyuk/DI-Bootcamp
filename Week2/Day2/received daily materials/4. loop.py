# print("hello")
# print("hello")
# print("hello")
# print("hello")
# print("hello")

# dry " dont repeat yourself"

# loop
# FOR LOOPS

# WHILE LOOPS

# >>> range(5)
# range(0, 5)
# >>> list(range(5))
# [0, 1, 2, 3, 4]

# FOR LOOP
# - a beginning and an end 
            # --> [0, 1, 2, 3, 4]
for number in range(5) :
    print("hello")
    print(number)
    
# 1st Loop
# number = 0

# 2nd Loop
# number = 1

for number in [10,20,30,40] :
    print("hello")
    print(number)

# string is a list of characters
for letter in "computer" :
    print(letter)

print("out")

# 1st loop
# letter = c

# 1st loop
# letter = o

# for x in "computer" :
#     print(x)

# print("out")

# colors = ["yellow", "blue", "red"]

# for color in colors :
#     print(color)

# create a list of numbers from 0 to 15 not included
# loop inside this list
# and check if the number is odd or even

for num in range(15):
    if num % 2 == 0 :
        print(f"the number {num} is even")
    else :
        print(f"the number {num} is odd")

prices_restaurant = [20, 31.4, 27.8]
sum = 0

# sum of the prices
for price in prices_restaurant :
    sum = sum + price

print(f"the sum is {sum}")

# sum = 0
# 1st loop
# price = 20
# sum = sum + price

# sum = 0 + 20 --> 20

# 2nd loop
# price = 31.4
# sum = sum + price

# sum = 20 + 31.4 --> 51.4

# create a new list that only contains the uppercased words
words = ['PYTHON', 'JOHN', 'chEEse', 'hAm', 'DOE', '123']
uppercased_words = []

for word in words :
    if word.isupper():
        uppercased_words.append(word)
    else :
        print(f"the word {word} is not uppercased")

print(uppercased_words)