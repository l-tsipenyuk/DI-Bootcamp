#modules
from random import choice
from random import randint, shuffle

list = ["apple", "banana", "pear"]
shuffle(list)
# print(list)


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
    



# Program should be a function
# that contains a few lists
# list of names, of job, of salary ect...
# create a program that create 10 employees with random information
# and save them into a list
# then call the show_info method for each of them

# lst_names = ["John", "Lea", "Emma", "Josh", "Eli"]
# lst_lastnames = ["Cohen", "Smith", "Doe", "Sevi", "Swtazh"]
# lst_jobs = ["developer", "dancer", "cowboy", "tennis player", "doctor"]
# --> random age from 18 to 67
# --> random salary from 10000 to 45000


#my version

# def random_object ():
#     lst_names = ["John", "Lea", "Emma", "Josh", "Eli"]
#     lst_lastnames = ["Cohen", "Smith", "Doe", "Sevi", "Swtazh"]
#     lst_jobs = ["developer", "dancer", "cowboy", "tennis player", "doctor"]
#     age = randint(18,67)
#     salary = randint(10000,45000)
#     a = [random.choice(lst_names),random.choice(lst_lastnames), age, random.choice(lst_jobs),salary]
#     return a

#solution

def create_employees():
    lst_names = ["John", "Lea", "Emma", "Josh", "Eli"]
    lst_lastnames = ["Cohen", "Smith", "Doe", "Sevi", "Swtazh"]
    lst_jobs = ["developer", "dancer", "cowboy", "tennis player", "doctor"]
    all_emp = []
    for _ in range(10): #this creates 10 sentences
        first_name = choice(lst_names)
        last_name = choice(lst_lastnames)
        job = choice(lst_jobs)
        age = randint(18,67)
        salary = randint(10000,45000)
        emp = Employee(first_name, last_name, age, job, salary)
        emp.show_info()
        all_emp.append(emp)
    # print(all_emp)

create_employees()







