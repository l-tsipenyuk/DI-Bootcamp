# exercise

# Exercise 1 : Basic Classes
# Create a Employee class, With the attributes : firstname, lastname, age, job, salary

# 1. Create 2 users object and display their attribute
# - Lea Smith 30 years old developer 25000 shekels
# - David Schartz 20 years old project manager 20000 shekels
# Add those methods to the class
# get_fullname(self) : that return the firstname + lastname
# happy_birthday(self) : that return the age incremented by one
# get_promotion(self, promotion_amount) : that increment the salary of the user by the promotion
# show_info(self) : that will print the information of the employee --> name, age, job, salary
# Call all the methods

class Employee :

    def __init__(self, firstname, lastname, age, job, salary) :
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
  
    def full_name (self):
        return f"{self.firstname} {self.lastname}"
    def show_info (self):
        print(f"The employee's name is {self.full_name()}, age is {self.age} years old, job is {self.job} and the salary is {self.salary} shekels.")
    def happy_birthday (self):
        self.age += 1
        return f"The new age is {self.age}"
    def get_promotion (self):
        promotion = int(input("Type in the promotion size:"))
        self.salary += promotion
        return f"After the promotion the salary is {self.salary}"

lea_smith = Employee("Lea", "Smith", 30, "Developer", 25000)
david_schartz = Employee("David", "Schartz", 20, "Project manager", 20000)
# lea_smith.show_info()
# lea_smith.happy_birthday()
print(lea_smith.get_promotion())
# print(lea_smith.full_name())
