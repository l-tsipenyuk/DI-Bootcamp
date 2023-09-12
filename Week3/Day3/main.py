#polimorphism - the same function/method can be used for different data types/items
class Dog:
    def __init__(self,name,color,age):
        self.name = name
        self.color = color
        self.age = age

    def bark(self):
        print("Woof")
    
    def show_info(self):
        print(f"the doh name is {self.name}")
    #the dunder method:

    def __str__(self):
        return f"the dog name is {self.name}"

    def __repr__(self):
        return f"name: {self.name} color : {self.color}"
    
    #the 2 parameters are objects
    def __gt__(self, other_dog):
        if self.age > other_dog.age:
            return self
        else:
            return other_dog
        
    #add 3 dogs together
    def __add__(self,other_dog):
        puppy_name = input("what is the name of the puppy")
        puppy_color = f"{self.color} {other_dog.color}"
        print("A new puppy is born")
        return Dog(puppy_name, puppy_color, 0)

class GermanShepard(Dog):

    def bark(self):
        print("Woof"*10)

my_dog = Dog("Rex", "black",12)
my_friend_dog = Dog("Rexik", "white",14)
new_puppy = my_dog + my_friend_dog
new_puppy.bark()
# print(my_dog > my_friend_dog)
# print(my_dog.bark())

# my_friend_dog = GermanShepard("Rexik", "white")
# print(my_friend_dog.bark())

#dunder methods (i.e. __init__)
# print(my_dog) #this calls dunder method __str___