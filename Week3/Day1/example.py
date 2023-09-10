# exercise

class Dog :

    def __init__(self, dog_name, dog_age, dog_color = "black", energy = 100) :
        self.name = dog_name
        self.age = dog_age
        self.color = dog_color
        self.energy = energy

    # method happybirthday increment the age by one
    def happy_birthday(self) :
        self.age += 1

    def show_info (self) :
        print(f"The dog name is {self.name}, his age is {self.age}, he is of color {self.color}")

    def go_to_groomer(self, owner_color) :
        self.color = owner_color

    def play (self, dog_activity) : #dog activity won't be the same for every item and shouldn't be defined in init
        if self.energy >= 10:
            if self.energy >= 10 and dog_activity == "ball":
                self.energy -= 10
                print(f"{self.name} is playing ball - it has {self.energy} energy")
            elif self.energy >= 30 and dog_activity == "frisbee":
                self.energy -= 30
                print(f"{self.name} is playing frisbee - it has {self.energy} energy")
            elif self.energy >= 70 and isinstance(dog_activity, Dog):
                self.energy -= 70 #lea_dog energy
                dog_activity.energy -= 70
                print(f"{self.name} and {dog_activity.name} are playing together. {self.name} has {self.energy} amount of energy, and {dog_activity.name} has {dog_activity.energy} of energy")
            else: 
                print(f"You don't have enough energy to play {dog_activity}, choose another activity.")
                self.play(input("Choose another game \n"))
        else: 
            self.sleep()

    def sleep (self):
        self.energy = 100
        print(f"{self.name} slept, he has {self.energy} energy now.")
      


lea_dog = Dog("Spock", 2)
dan_dog = Dog("Rex", 2)
# lea_dog.play("ball")
lea_dog.play(dan_dog)
lea_dog.play("ball")
lea_dog.play("frisbee")

