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
    

    
# def create_employees():
#     lst_names = ["John", "Lea", "Emma", "Josh", "Eli"]
#     lst_lastnames = ["Cohen", "Smith", "Doe", "Sevi", "Swtazh"]
#     lst_jobs = ["developer", "dancer", "cowboy", "tennis player", "doctor"]
#     all_emp = []
#     for _ in range(10): 
#         first_name = choice(lst_names)
#         last_name = choice(lst_lastnames)
#         job = choice(lst_jobs)
#         age = randint(18,67)
#         salary = randint(10000,45000)
#         emp = Employee(first_name, last_name, age, job, salary)
#         emp.show_info()
#         all_emp.append(emp)

# create_employees()



