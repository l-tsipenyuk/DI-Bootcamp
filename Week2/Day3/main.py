# fruits = ["apple", "banana", "orange"]
#dictionary - data type to save key value pairs

# fruits = {
#     "apple" : 2,
#     "banana" : 5,
#     "orange" : 1
# }

# amount_apple = fruits ["apple"]
# print(amount_apple) - prints the amount of apples

# total_amount_fruits = fruits["apple"] + fruits["banana"] + fruits["orange"]
# print(total_amount_fruits)

# fruits["orange"] = 2 - how to change the value in dictionary
# print(fruits)

#how better change the data in dictionary:
# fruits["orange"] += 1
# print(fruits)

# family = {
#     "name" : "Smith",
#     "members" : 5,
#     "number_rooms" : 5,
#     "names" : ["Jon", "Paul"],
#     "live_in_tlv" : True,
#     "friends" : {
#         "username" : ["Sara", "Lea"],
#         "have_dog" : False
#     }
# }

# rooms = family["number_rooms"]
# second_members = family["names"][1]
# first_friend = family["friends"]["username"][0]
# print(first_friend)

#excercise 1
# price = {
#     "apple" : 2,
#     "banana" : 5,
#     "orange" : 1
# }

# user_input = input("Type in your fruit")
# price = price[user_input]
# print(f"Your price is {price}")


# exercise 2
# create a new list that only contains the uppercased words
# words = ['PYTHON', 'JOHN', 'chEEse', 'hAm', 'DOE', '123']
# new_list = [word for word in words if str(word).isupper()]
# print(new_list)


fruit_amount = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

# print(fruit_amount.keys())
# print(fruit_amount.values())
# print(fruit_amount.items())

# total = 0
# for amount in fruit_amount.values() : 
#     total += amount
# print(total)

# for element in fruit_amount.items() :
#     # print(element) #tuple
#     print(f"the user bought {element[1]} {element[0]}")

# for fruit,amount in fruit_amount.items() :
#     if amount > 1: 
#         print(f"the User bought {amount} {fruit}s")
#     else:
#         print(f"the User bought {amount} {fruit}")



# Exercise 3
# Print the total duration of the playlist

playlist = {
    'title': "Hello World",
    'author': "Planet",
    'songs': [
        {
            'song_title': "Song One",
            'artist': ['Artist 1', 'Artist 2'],
            'duration': 4.31,
        },
        {
            'song_title': "Song Two",
            'artist': ['Artist 1'],
            'duration': 2.53,
        },
        {
            'song_title': "Song Three",
            'artist': ['Artist 1', 'Artist 2', 'Artist 3'],
            'duration': 3.43,
        }
    ]
}

# total = 0
# for music in playlist["songs"]:
#     convert_to_seconds = music["duration"]
#     total  += music["duration"]
# print(total)



# fruits = ["apple", "pear", "banana"]

# for num in range(len(fruits)):
#     fruits[num] += "s"

# for index, value in enumerate(fruits):
#     fruits[index] += "s"
# print(fruits)

# print(list(enumerate(fruits)))

# list1 = ["apple", "banana", "pear"]
# list2 = [1.2, 0.5, 1.6]
# list3 = list(zip(list1, list2))
# dict1 = dict(list3)
# print(dict1)


