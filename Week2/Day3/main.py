# fruits = ["apple", "banana", "orange"]
#dictionary - data type to save key value pairs

fruits = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

amount_apple = fruits ["apple"]
# print(amount_apple) - prints the amount of apples

total_amount_fruits = fruits["apple"] + fruits["banana"] + fruits["orange"]
# print(total_amount_fruits)

# fruits["orange"] = 2 - how to change the value in dictionary
# print(fruits)

#how better change the data in dictionary:
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
second_members = family["names"][1]
first_friend = family["friends"]["username"][0]
# print(first_friend)

price = {
    "apple" : 2,
    "banana" : 5,
    "orange" : 1
}

user_input = input("Type in your fruit")
price = price[user_input]
print(f"Your price is {price}")