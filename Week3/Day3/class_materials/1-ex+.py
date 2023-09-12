class Family :

    def __init__(self, lastname, members) :
        self.lastname = lastname
        self.members = members
    
    def born (self, **info) :
        is_child = False
        if info["age"] <= 18 :
            is_child = True

        info["is_child"] = is_child
        self.members.append(info)
        print("New member in the family")

    def is_18 (self, firstname) :
        for member in self.members :
            if member["name"] == firstname and member["age"] > 18 :
                return True
            else :
                return False
    
    def presentation (self) :
        sentence = f"The {self.lastname} family contains"
        for index, member in enumerate(self.members) :
            if index == len(self.members)-1 :
                sentence += f" and {member['name']}"
            else :
                sentence += f" {member['name']},"
        return sentence

# my_family = Family("Smith")
# my_family.born(name="Lisa", age = 18, gender = "Female")
# my_family.presentation()
# my_family.born(name="George", age = 28, gender = "Male")
# my_family.presentation()

class TheIncredibles(Family) :
    
    def use_power (self, name) :
        if self.is_18(name) :
            for member in self.members :
                if member["name"] :
                    print(member["power"])

    def incredible_presentation(self) :
        sentence = super().presentation()
        sentence += " their powers are : "
        for index, member in enumerate(self.members) :
            if index == len(self.members)-1 :
                sentence += f" and {member['power']}"
            else :
                sentence += f" {member['power']},"
        print(sentence)
    

existing_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]
my_inc_family = TheIncredibles("Smith", existing_members)
my_inc_family.use_power("Michael")
my_inc_family.incredible_presentation()
