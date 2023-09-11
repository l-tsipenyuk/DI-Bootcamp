class Dog:

    def __init__(self, name, type, color, velocity):
        self.name = name
        self.type = type
        self.color = color
        self.velocity = velocity

    def bark(self):
        print("Wouf")
    
    def change_color(self, new_color):
        self.color = new_color

    def run(self):
        print(f"I run at {self.velocity} km per hour")

class GermanShepard(Dog): #this is inheritance. the german shepard class inherits from the dog class all the methods from the dog class
    def __init__(self, IQ, name): #this overwrites the name of parent class
        # super().__init__(name, type, color, velocity) #this adds the names from parent class
        super().__init__("rex", "Germanshepard", "black", 10) #this sets the default values 
        self.IQ = IQ
    def jump(self):
        super().run() #to call the method for the parent. now we first run and then jump
        print("I jump high")
    def bark(self): #if we want to modify funct from upper class, we need to create the funct from the stratch with the same name
        print("Wouf "*10)

my_dog = GermanShepard("Rex",100)
my_dog.jump()
# my_dog.bark()
# print(my_dog.__dict__)
# lea_dog = Dog("Spark","chichaua","white",5)
# lea_dog.jump()
# print(dir(my_dog)) #shows all the methods