# Exercise 1 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
# Initial members data:

# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]


# 2. Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ first name.

# class Family ():
#     def __init__(self, last_name):
#         self.last_name = last_name
#         self.members = []
#     def add_member(self, **kwargs):
#         self.members.append(kwargs)
#         return self.members
#     def born(self, *other_names):
#         for name in other_names:
#             is_name = any(member["name"] == name for member in self.members)
#             if not is_name:
#                 self.add_member(name = name,age = 0,gender = "none", is_child = True)
#             else:
#                 print("Child with this name is already present")
#         return "Congrats with a new child!"
#     def is_18(self, name):
#         for member in self.members:
#             if member["name"] == name and member["age"] > 18:
#                 return True
#             else:
#                 return False
#     def family_presentation(self):
#         family_info = [f"{self.last_name} family members: "]
#         for member in self.members:
#             family_info.append(member["name"])
#         return ", ".join(family_info)

# smiths = Family("Smith")

# smiths.add_member(name = "Michael",age = 35,gender = "Male",is_child = False)
# smiths.add_member(name = "Roxana",age = 33,gender = "Female",is_child = False)
# smiths.add_member(name = "Earl",age = 48,gender = "Male",is_child = False)
# smiths.add_member(name = "Ella",age = 16,gender = "Female",is_child = True)
# print(smiths.born("New Child"))
# print(smiths.is_18("Ella"))
# print(smiths.family_presentation())

# class TheIncredibles(Family):
#     def __init__(self, last_name):
#         super().__init__(last_name) 
#     def use_power(self, name):
#         # try:
#         if self.is_18(name) == True:
#             for member in self.members:
#                 if member["name"] == name:
#                     return member["power"]
#             # raise Exception("This member is younger than 18")
#         else: 
#             return "This member is younger than 18"

#     def incredible_presentation(self):
#         family_info = [f"{self.last_name} family members: "]
#         members_names = []
#         members_powers = []
#         for member in self.members:
#             members_names.append(member["name"])
#             members_powers.append(f"{member['name']} {member['power']}")
        
#         family_info.append(', '.join(members_names))
#         family_info.append("Powers: " + ", ".join(members_powers))
#         return ". ".join(family_info)
 
#     def born(self, *other_names, power=None, incredible_name=None):
#         if power is not None and incredible_name is not None:
#             for name in other_names:
#                 self.add_member(name=name, age=0, gender="none", is_child=True, power=power, incredible_name=incredible_name)
#         else:
#             for name in other_names:
#                 self.add_member(name=name, age=0, gender="none", is_child=True)
#         return "Congrats with a new child!"

       
    

# incr = TheIncredibles("Incredibles")
# incr.add_member(name = "Michael",age = 35,gender = "Male", is_child = True, power = "fly", incredible_name = "MikeFly" )
# incr.add_member(name = "Max",age = 5,gender = "Male", is_child = False, power = "read minds", incredible_name = "Mikey" )
# incr.add_member(name = "Rosa",age = 20,gender = "Female", is_child = False, power = "be invisible", incredible_name = "Rosush" )


# print(incr.use_power("Max"))
# print(incr.family_presentation())
# print(incr.incredible_presentation())
# print(incr.born("Baby", power = "Unknown Power", incredible_name = "JackJack"))
# print(incr.incredible_presentation())