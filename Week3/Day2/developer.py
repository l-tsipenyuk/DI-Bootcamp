from employee import Employee

class Developer(Employee):

    def __init__(self, firstname, lastname, age, job = "Developer", salary = 15000):
        super().__init__(firstname, lastname, age, job, salary)
        self.coding_skills = []
    
    def add_skills(self, *skills):
        self.coding_skills.extend(skills)
        return self.coding_skills
    
    def coding(self):
        print(f"{super().get_fullname()}'s coding skills are {', '.join(self.coding_skills)}.")
    
    def coding_with_partner(self, other_developer):
        print("Developers are working together.")
        self.coding()
        other_developer.coding()
    
    def get_promotion(self, new_promotion) :
        self.salary *= new_promotion


tom = Developer("Tom", "Cruize", 30)
angelina = Developer("Angelina", "Jolie", 23)
tom.add_skills("java", "python", "react")
angelina.add_skills("CSS", "HTML")
tom.coding()
# tom_cruiz.show_info()
# tom_cruiz.add_skills()
# tom_cruiz.coding()

tom.coding_with_partner(angelina)
tom.get_promotion(1.1)
tom.show_info()




