# fruits = ["apple","banana","melon"]
# fav_fruits = fruits[:] #[:] this copies from the beginning to the end. now the list address differs
# fav_fruits.append("pear")
# print(fruits, fav_fruits)

fruits = ["melon", "apple","banana"]
fruits.sort() #sorts the initial list
ordered_fruits = sorted(fruits)
print(ordered_fruits)
