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