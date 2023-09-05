# fruits = ["apple", "apple", "banana", "orange"]

# dictionary
# data type to save key value pairs

fruits = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

#retrieve data from it, we do name_dict["name_key"]
amount_apple = fruits["apple"]
# print(amount_apple)

total_amount_fruits = fruits["apple"]+fruits["banana"]+fruits["orange"]
# print(total_amount_fruits)

# fruits["orange"] = 2
# print(fruits)

fruits["orange"] += 1
# print(fruits)


family = {
    "name" : "Smith",
    "members" : 5,
    "number_rooms" : 5,
    "names" : ["Jon", "Paul"],
    "live_in_tlv" : True,
    "friends" : {
        "username" : ["Sara", "Lea"],
        "have_dog" : False
    }
}

rooms = family["number_rooms"]
second_member = family["names"][1]
first_friend = family["friends"]["username"][0]
# print(rooms, second_member, first_friend)


prices = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

# ask the user for the fruit he wants
# depending on the fruit we show him the price
# don't use conditionals

user_fruit = input("what fruit do you want \n")
print(f"the price for the fruit {user_fruit} is {prices[user_fruit]} dollars")

#list comprehension
words = ['PYTHON', 'JOHN', 'chEEse', 1234, 'hAm', 'DOE', '123']
new_list = [word for word in words if str(word).isupper()]
# print(new_list)

fruit_amount = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

print(fruit_amount.keys())
print(fruit_amount.values())
print(fruit_amount.items()) # dict_items([('apple', 2), ('banana', 5), ('orange', 1)])

total = 0 

for amount in fruit_amount.values() : 
    total += amount

print(total)

# loop
# inside the loop print a sentence for each fruit
# "the user bought 2 apples"
# dict_items([('apple', 2), ('banana', 5), ('orange', 1)])

for element in fruit_amount.items() :
    print(element) #tuple ('apple', 2)
    print(f"the user bought {element[1]} {element[0]}")


# when working with a tuple, we can destructure it
# >>> name, address = ("John", "Tlv")
# >>> name
# 'John'
# >>> address
# 'Tlv'

for fruit,amount in fruit_amount.items() :
    if amount > 1 :
        print(f"the user bought {amount} {fruit}s")
    else :
        print(f"the user bought {amount} {fruit}")

# the user bought 2 apples
# the user bought 5 bananas
# the user bought 1 orange

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

total_duration = 0
for music in playlist["songs"]:
    total_duration += music["duration"]

print(f"the total duration is {total_duration}")

# songs = [
#         {
#             'song_title': "Song One",
#             'artist': ['Artist 1', 'Artist 2'],
#             'duration': 4.31,
#         },
#         {
#             'song_title': "Song Two",
#             'artist': ['Artist 1'],
#             'duration': 2.53,
#         },
#         {
#             'song_title': "Song Three",
#             'artist': ['Artist 1', 'Artist 2', 'Artist 3'],
#             'duration': 3.43,
#         }
#     ]

# print(songs[0]["song_title"])