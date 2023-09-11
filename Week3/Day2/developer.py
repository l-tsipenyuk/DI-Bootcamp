# from employee import Employee

# class Developer(Employee):

#     def __init__(self, firstname, lastname, age, job = "Developer", salary = 15000):
#         super().__init__(firstname, lastname, age, job, salary)
#         self.coding_skills = []
    
#     def add_skills(self, *skills):
#         self.coding_skills.extend(skills)
#         return self.coding_skills
    
#     def coding(self):
#         print(f"{super().get_fullname()}'s coding skills are {', '.join(self.coding_skills)}.")
    
#     def coding_with_partner(self, other_developer):
#         print("Developers are working together.")
#         self.coding()
#         other_developer.coding()
    
# #     def get_promotion(self, new_promotion) :
# #         self.salary *= new_promotion


# # tom = Developer("Tom", "Cruize", 30)
# # angelina = Developer("Angelina", "Jolie", 23)
# # tom.add_skills("java", "python", "react")
# # angelina.add_skills("CSS", "HTML")
# # tom.coding()
# # # tom_cruiz.show_info()
# # # tom_cruiz.add_skills()
# # # tom_cruiz.coding()

# # tom.coding_with_partner(angelina)
# # tom.get_promotion(1.1)
# # tom.show_info()


# class Family():
#     def __init__(self, last_name):
#         self.last_name = last_name
#         self.members = []

#     def add_member(self, **kwargs):
#         self.members.append(kwargs)
#         return self.members

#     def born(self, *other_names):
#         for name in other_names:
#             # Check if the name exists in the members list
#             name_exists = any(member["name"] == name for member in self.members)
#             if not name_exists:
#                 # If the name doesn't exist, add a new child with default attributes
#                 self.add_member(name=name, age=0, gender="none", is_child=True)
#             else:
#                 # If the name exists, return an error message
#                 return f"Child named {name} already exists in the family."

#         return "Congrats with a new child!"

#     def is_18(self, name):
#         for member in self.members:
#             if member["name"] == name and member["age"] > 18:
#                 return True
#         return False

#     def family_presentation(self):
#         family_info = [f"{self.last_name} family members: "]
#         for member in self.members:
#             family_info.append(member["name"])
#         return ", ".join(family_info)

# # Create a Family instance
# smiths = Family("Smith")

# # Add some family members
# smiths.add_member(name="Michael", age=35, gender="Male", is_child=False)
# smiths.add_member(name="Roxana", age=33, gender="Female", is_child=False)
# smiths.add_member(name="Earl", age=48, gender="Male", is_child=False)
# smiths.add_member(name="Ella", age=16, gender="Female", is_child=True)

# # Test the born method
# print(smiths.born("New Child"))


class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = int(pageSize)
        self.currentpage = 0
        self.currentitem = 0

    def get_visible_items(self):
        if self.items is None:
            return []
        n = self.pageSize
        result = [self.items[i * n:(i + 1) * n] for i in range((len(self.items) + n - 1) // n)]
        return result

    def first_page(self):
        first = self.get_visible_items()
        return first[0]

    def last_page(self):
        last = self.get_visible_items()
        x = len(last)
        return last[x-1]

    def go_to_page(self, pageNum):
        go = self.get_visible_items()
        self.currentpage = pageNum
        self.currentitem = 0
        return go[pageNum]

    def next_page(self):
        d = self.get_visible_items()
        if self.currentpage < len(d) - 1:
            # if self.currentitem < len(d[self.currentpage]) - 1:
            self.currentpage += 1
        else:
            self.currentpage += 1
            # self.currentitem = 0
        return d[self.currentpage]
        # else:
        #     return None

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
example = Pagination(alphabetList, 4)
# print(example.get_visible_items())
# print(example.first_page())
# print(example.last_page())
print(example.go_to_page(1))
print(example.next_page())
print(example.next_page())





