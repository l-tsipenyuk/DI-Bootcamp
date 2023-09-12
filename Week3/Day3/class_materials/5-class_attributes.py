class Dog :

    #class attribute
    shelter = "Dog4Life" #constant
    number_dogs = 0

    def __init__(self, name) :
        self.name = name #instance attribute
        Dog.number_dogs += 1

    def bark (self) :
        print("Woof")

my_dog = Dog("rex") #instance
# print(my_dog.name) #attribute of the instance
# print(my_dog.__dict__)
print(my_dog.shelter)

my_friend_dog = Dog("lola") #instance
print(my_friend_dog.shelter)

Dog.shelter = "Dog4U"

print(my_dog.shelter)
print(my_friend_dog.shelter)

print(Dog.number_dogs)

my_other_dog = Dog("spock")

print(Dog.number_dogs)


class Dog :

    #class attribute
    shelter = "Dog4Life" #constant
    number_dogs = 0

    def __init__(self, name) :
        self.name = name #instance attribute
        Dog.number_dogs += 1

    def bark (self) :
        print("Woof")

my_dog = Dog("rex") 

class GermanShepard(Dog) :

    number_german_shepard = 0

    def __init__(self, name) :
        super().__init__(name)
        GermanShepard.number_german_shepard += 1

my_great_dog = GermanShepard("spock") 

print("dog", Dog.number_dogs)
print("gs", GermanShepard.number_german_shepard)