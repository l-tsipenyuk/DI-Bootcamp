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

    @classmethod
    def create_best_employee(cls, salary) :
        if salary > 30000 :
            return cls("John", "Smith", 23, "dancer", salary)
        else :
            print("Your salary is too low")

new_emp = Employee.create_best_employee(34000)
# new object created
print(new_emp.__dict__)