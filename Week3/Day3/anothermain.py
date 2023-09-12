class Student:
    def __init__(self, name, level):
        self.name = name
        self.level = level

    #instance method
    def do_exams(self, test_name):
        print(f"{self.name} is doing a {test_name} exam")

    @staticmethod #this is a decorator. This allows this function to work with a class dicrectly
    def check_grade(grade):
        if grade == "A":
            return "pass"
        else:
            return "fail"

#if we want to create a method that doesn't need the self, we use staticmethod
#we want to create a method which created a new student only if he has a grade above B
#cls is the class we're working with
    @classmethod
    def create_new_student(cls, grade):
        if grade == "A":
            new_student_name = input("Your name \n")
            new_student_level = input("Your level \n")
            return cls(new_student_name, new_student_level) #this creates a new student
            #the same as cls("John", "1st")


# stu1 = Student("Max", "1st")
# stu1.do_exams("Maths")
# print(Student.check_grade("B")) #to call static method
new_student = Student.create_new_student("A")