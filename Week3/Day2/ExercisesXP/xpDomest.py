from xp import Dog
from random import choice

class PetDog(Dog):
    def __init__(self,name,age,weight,trained = False): 
        super().__init__(name,age,weight) 
    def train(self):
        self.trained = True
        print(self.bark())
        return self.trained
    def play(self, *other_names):
        dog_names = list(other_names)
        return f"{' ,'.join(dog_names)} all play together."
    def do_a_trick(self):
        tricks = ["does a barrel roll","stands on his back legs","shakes your head","plays dead"]
        if self.trained == True:
            sentence2 = f"{self.name} {''.join(choice(tricks))}"
        return sentence2

dog1 = PetDog("Rex",5,50)
dog2 = PetDog("Rox",4,10)
dog3 = PetDog("Puppy",2,8)
# dog1.train()

# result = dog2.play(dog1.name,dog2.name,dog3.name)
# print(result)

dog1.train()
print(dog1.do_a_trick())


