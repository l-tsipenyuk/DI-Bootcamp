class Employee :
    def __init__(self, firstname, lastname, age, job, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
    
    def get_fullname(self) :
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self):
        self.age += 1
    
    def get_promotion(self, new_promotion) :
        self.salary += new_promotion

    # def show_info (self) :
    #     print(f"{self.get_fullname()} is {self.age} years old, his job is {self.job} and his salary is {self.salary}")
    def __add__(self, other_employee) :
        return self.salary + other_employee.salary

    def __gt__(self, other_employee) :
        if self.salary > other_employee.salary :
            return self
        else :
            return other_employee
        
    def __str__(self) :
        return f"{self.get_fullname()} is {self.age} years old, his job is {self.job} and his salary is {self.salary}"
        
emp1 = Employee("Lea", "Smith", 30, "developer", 30000)
emp2 = Employee("John", "Smith",23, "developer", 23000)
print(emp1 > emp2)
print(emp1 + emp2) #53000