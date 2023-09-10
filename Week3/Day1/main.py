#how to create our class. first letter of every word of class name should be upperletter 

# class Dog:
#     #method is used to initialize the instance attributes
#     def __init__(self, dog_name) :
#         self.name = dog_name
#         #name is attribute. every dog in the class will have the name Rex.
#         #if we want to make the name different, we add self and dog_name in def init

#     #method
#     def drink_water(self): 
#         print("The dog is drinking water")
    

# #here we created a dog object or a Dog instance. an object is an instance of a class
# # my_dog = Dog()
# # my_dog.drink_water()

# #the init method is called automatically when we create a new object
# my_dog = Dog("Rex")
# # print(f"My dog name is {my_dog.name}")
# my_dog.drink_water()

# # print(my_dog)
# print(my_dog.__dict__)


class Dog:
    def __init__(self, dog_name, dog_age, dog_color = "black") :
        self.name = dog_name
        self.age = dog_age
        self.color = "black" #this is a default value
        self.color = dog.color
    def happy_birthday(self):
        self.age += 1 #the age of exact dog
    def show_info (self):
        print(f"The dog name is {self.name}, his age is {self.age}, he is of color {self.color}")
    def go_to_groomer(self, owner_color) : 
        self.color = owner_color

 

lea_dog = Dog("Spock",2)
# print(lea_dog.__dict__)
lea_dog.show_info()
print(f"the age of Lea's dog is {lea_dog.age}")
lea_dog.happy_birthday()
print(f"the age of Lea's dog is {lea_dog.age}")
# lea_dog.go_to_groomer()

dan_dog = Dog("Rex",7, "white")
dan_dog.show_info()