class Dog :

    def __init__(self, name) :
        self.name = name

    def bark (self) :
        print("Woof")

class GermanShepard(Dog) :

    def bark (self) :
        print("Woof"*10)

# Polymorphism
# polymorphism means the same function name 
# (but different signatures) being used for different types. 
# The key difference is the data types and number of arguments 
# used in function.
my_dog = Dog("Rex")
my_dog.bark()

my_friend_dog = GermanShepard("Spock")
my_friend_dog.bark()
