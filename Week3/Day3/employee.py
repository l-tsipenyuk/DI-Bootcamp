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

    def show_info (self) :
        print(f"{self.get_fullname()} is {self.age} years old, this person's job is {self.job} and the salary is {self.salary}")
    
    def __gt__(self, other_employee):
        if self.salary > other_employee.salary:
            return f"{self.firstname} has higher salary"
        else:
            return f"{other_employee.firstname} has higher salary"
    
    def __add__(self, other_employee):
        return self.salary + other_employee.salary
    
    def __str__(self):
        return f"This is {self.firstname} {self.lastname}, nice to meet him."

    # class BestEmployee(Employee):
    @classmethod
    def create_best_employee(cls, salary):
        if salary > 30000:
            # new_employee = "John"
            return cls("John", "Smith", 23, "dancer", salary)
        else:
            print("Your salary is too low")




new_emp = Employee.create_best_employee(31000)
#new object
print(new_emp.__dict__)



smith = Employee("Michael","Smith", 40, "Developer", 31000)
shapiro = Employee("Daniella","Shapiro", 32, "Singer", 15000)
# salary = smith + shapiro
# print(shapiro > smith)
# print(salary)
# print(smith)



