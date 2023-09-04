# fruit_one = "apple"
# fruit_two = "banana"

# list

# fruits = ["apple", "banana", "melon"]
# # stuffs = ["apple", 1, True, "hello"]
# other_fruits = ["apple", "banana", ["a", "b"], "melon"]

# when working with a list you can have duplicate elements
# cart = ["apple", "apple", "apple", "banana", "apple", "melon"]

# collection that is ordered
# every element has a position
fruits = ["apple", "banana", "melon"]
first_fruit = fruits[0] 
print(first_fruit) #apple

second_fruit = fruits[1] 
print(second_fruit) #banana

last_fruit = fruits[-1] 
print(last_fruit) #melon

last_fruit_again = fruits[2] 
print(last_fruit_again) #melon

other_fruits = ["apple", "banana", ["a", "b", "c", "d"], "melon"]

# retrieve the value of the last element 
# inside the inner list
letter = other_fruits[2][-1]
last_letter = other_fruits[2][1]

# retrieve b - we know its in the inner list that is at the position 2
# use the index method
inner_list = other_fruits[2]
position_of_b = inner_list.index("b") # 1
print(inner_list[position_of_b]) # "b"
    # other_fruits[2][1]

# print(other_fruits[2][other_fruits[2].index("b")])

# modify the colors black to pink
colors = ["blue", "red", "yellow", "black"]
colors[-1] = "pink"
print(colors) # ['blue', 'red', 'yellow', 'pink']

# string containing all the colors
# all_colors = "-".join(colors)
# print(all_colors) #blue-red-yellow-pink

all_colors = " ".join(colors)
print(all_colors) #blue red yellow pink

# add elements to a list

# The append() method appends an element to the end of the list.
colors_two = ["blue", "red", "yellow", "black"]
colors_two.append("orange")
print(colors_two)
# ['blue', 'red', 'yellow', 'black', 'orange']

colors_two.insert(2, "green")
print(colors_two) # ['blue', 'red', 'green', 'yellow', 'black', 'orange']


# add several elements at the same time
# my_list = ["a", "b"]
# my_other_list = ["c", "d"]
# my_last_list = my_list + my_other_list
# print(my_last_list)
# ['a', 'b', 'c', 'd']



# want to ask to the user for 2 values separated by a comma
# position
# new object he wants to add to his cart
# use the values to add it to the cart
# "tablet,0"

# "hello-how-are-you".split("-")
# ['hello', 'how', 'are', 'you']

cart = ["computer", "phone"]
user_answer = input("give me an index and a new object separated by a comma \n")
print(user_answer) #"2,tablet" --> ["2", "tablet"]
list_user = user_answer.split(",") #['2', 'tablet']

cart.insert(int(list_user[0]), list_user[1])
print(cart)

# exercise

list_number = [5, 10, 15, 20, 25, 50, 20]
position_of_20 = list_number.index(20) #3
print("the position of the number 20 is ", position_of_20)
list_number[position_of_20] = 200
print(list_number)
#[5, 10, 15, 200, 25, 50, 20]

# remove an element from a list

# pop()	Removes the element at the specified position

animals = ["horse", "cat", "dog"]
# delete the last element of the list
animals.pop()
print(animals)
animals.pop(-1)
print(animals)

#delete cat - by index
animals.pop(1)
print(animals) ['horse', 'dog']

# remove the cat - delet by value
animals.remove("cat")
print(animals) # ['horse', 'dog']