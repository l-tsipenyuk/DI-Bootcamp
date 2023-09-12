class Dog:

    #class attribute
    shelter = "Dog4Life"
    number_dogs = 0

    def __init__(self,name):
        self.name = name
        Dog.number_dogs += 1 #every time the method is called the number will increase. So it counts the dogs

    def bark(self):
        print("Woof")

my_dog = Dog("Rex")
my_friend_dog = Dog("Rexik")
my_friend_dog2 = Dog("Rexil")
print(my_dog.name)
print(my_dog.__dict__)
print(my_dog.shelter)
print(my_friend_dog.shelter)

Dog.shelter = "Dog4U"
print(my_dog.shelter)
print(my_friend_dog.shelter)
print(Dog.number_dogs)
print(Dog.number_dogs)

# class GermanShepard(Dog):
#      def __init__(self):
#         super().__init__(name)
#         GermanShepard.number_german += 1

