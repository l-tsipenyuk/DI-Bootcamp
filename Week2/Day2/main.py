# colors = ["blue","red"]
# colors[-1] = "pink"
# print(colors)
# string containing all the colors 
# colors = ["red", "green", "blue"]
# all_colors = "-".join(colors)
# print(all_colors)


#add one element to a list
# colors_two = ["red", "green", "blue"]
# colors_two.append("orange")
# print(colors_two)

#to add smth between the list items 
# colors_two.insert(1, "blue")
# print(colors_two)

# for adding several elements at the same time 

# my_list = ["a", "b"]
# my_other_list = ["c", "d"]
# my_last_list = my_list + my_other_list
# print(my_last_list)

#excercise
# cart = ["computer", "phone"]
# #ask user for 2 values separated by a comma
# user_answer = input("give me an index and a new object separated by a comma \n")
# # print(user_answer) #"2, tablet" --> ["2", "tablet"], so we need to convert string to a list
# list_user = user_answer.split(",")
# print(list_user)
# # user_answer.ins2.ert(?, "??")
# cart.insert(int(list_user[0]), list_user[1])
# print(cart)

#excercise form platform - we need to substitute 20 with 200 (only in the first occurance)
# list1 = [5, 10, 15, 20, 25, 50, 20]
# target_index = list1.index(20)
# list1[target_index] = 200
# print(list1)

#remove an element from list 
# animals = ["horse", "cat", "dog"]

#delete the last element of the list
# animals.pop()
# animals.pop(-1)
# print(animals)

#dremove other element
# animals.pop(1)
# print(animals)

#remove the specific element
# animals.remove("cat")
# print(animals)


