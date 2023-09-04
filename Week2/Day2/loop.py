# FOR LOOP
#number is just a variable (which can be whatever we want). range is [0,1,2,3,4]
# for number in range(5) :
#     print("hello")
#     print(number)

# for x in "computer": 
#     print(x)

# colors = ["yellow","blue", "red"]
# for color in colors:
#  print(color)

 #create a list of numbers from 0 to 15 not included. loop inside the list and check if the number is even or odd
# for num in range(15):
#     if (num % 2) == 0:
#         print(f"The number {num} is even")
#     else: 
#         print(f"The number {num} is odd")

# prices_restaurant = [20, 31.4, 27.8]
# sum = 0 
# #sum of the prices 
# for price in prices_restaurant: 
#     sum = sum + price

# print(f"the sum is {sum}")

#excercise 
# create a new list that only contains the uppercased words
words = ["PYTHON", "JOHN", "chEEse", "hAm", "DOE", "123"]
uppercased_words = []
for word in words:
    if word.isupper():
        uppercased_words.append(word)
    else:
        print(f"the word {word} is not uppercased")
print(uppercased_words)

