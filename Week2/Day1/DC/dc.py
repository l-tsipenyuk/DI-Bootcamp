#1
# value = (input("Type in some string \n"))
# if len(value) < 10:
#     print("String not long enough")
# if len(value) > 10:
#     print("String too long")
# if len(value) == 10:
#     print("Perfect string")

#2
# value = (input("Type in some string \n"))
# last_char = value[len(value)-1]
# first_char = value[0]
# print("The first character of the string is ", first_char, ", and the last character is" ,last_char)

#3
# value = (input("Type in some string \n"))
# rows = len(value) 
# for x in range(1, rows + 1): 
#     for y in range(x):
#         print(value[y], end=' ')
#     print()  

#4
value = "Moscow"
from random import shuffle
# for x in range (len(value))
# shuffle(x)

shuf = list([value])
random.shuffle(shuf)
print(shuf)
