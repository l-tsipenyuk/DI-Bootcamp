from dogcls import Dog #to import the module we created in different file

class GermanShepard(Dog):  
    def __init__(self, IQ, name): 
        super().__init__("rex", "Germanshepard", "black", 10) 
        self.IQ = IQ
    def jump(self):
        super().run() 
        print("I jump high")
    def bark(self):
        print("Wouf "*10)

my_dog = GermanShepard("Rex",100)
my_dog.jump()