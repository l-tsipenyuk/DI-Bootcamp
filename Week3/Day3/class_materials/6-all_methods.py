# class Student :

#     school_name = "DevelopersInstitute"

#     def __init__(self, name, level) :
#         self.name = name
#         self.level = level

#     # instance method
#     def do_exams(self, test_name) :
#         print(f"{self.name} is doing a {test_name} exam")

#     # everytime you want to create a method
#     # that doesnt need the self
#     # you need to make a static method
#     # how ? @staticmethod
#     @staticmethod #decorator
#     def check_grade(grade) :
#         if grade == "A" :
#             print("pass")
#         else :
#             print("fail")

#     # create a method that create a new student
#     # cls means : the class I'm working with
#     @classmethod
#     def create_new_student(cls, grade) :
#         print(cls.school_name)
#         if grade == "A" :
#             new_student_name = input("Your name \n")
#             new_student_level = input("Your level \n")
#             return cls(new_student_name, new_student_level) 
#             # creating a new student
#             # Student("John", "1st")
    

# stu1 = Student("Max", "1st")
# stu1.do_exams("Maths")
# Student.check_grade("B") #related to the class
# print(dir(stu1))
# new_student = Student.create_new_student("A")
# print(new_student.__dict__)


class Student :

    school_name = "DevelopersInstitute"

    def __init__(self, name, level) :
        self.name = name
        self.level = level

    # instance method
    def do_exams(self, test_name) :
        print(f"{self.name} is doing a {test_name} exam")

    @classmethod
    def create_new_student(cls, grade) :
        print(cls.school_name)
        if grade == "A" :
            new_student_name = input("Your name \n")
            new_student_level = input("Your level \n")
            return cls(new_student_name, new_student_level) 
            # creating a new student
            # Student("John", "1st")
    

class BestStudent(Student) :
    pass


new_student = BestStudent.create_new_student("A")
print(new_student)