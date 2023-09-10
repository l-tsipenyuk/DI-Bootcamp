# class Farm: 
#     def __init__(self,farm_name):
#         self.name = farm_name
#         self.animals = []
#     def add_animal(self, *new_animals):
#         for new_animal in new_animals:
#             self.animals.append(new_animal)
#         # return self.animals
#     def dict_animal(self):
#         animal_counts = {}
#         for animal in self.animals:
#             if animal in animal_counts:
#                 animal_counts[animal] += 1
#             else:
#                 animal_counts[animal] = 1
#         result = [f"{self.name}'s farm"]
#         for animal, count in sorted(animal_counts.items()):
#             result.append(f"{animal}:{count}")
#         result.append("E-I-E-I-0!")
#         return "\n".join(result)
#     def get_animal_types(self):
#         animal_types = set()
#         for animal in self.animals:
#             animal_types.add(animal)
#         return list(animal_types)
#     def get_short_info(self):
#         animal_types2 = self.get_animal_types()
#         animal_types2 = [animal.lower() for animal in animal_types2]
#         animal_types2 = ", ".join(animal_types2)
#         return f"{self.name}'s farm has {animal_types2}."

# macdonald = Farm("McDonald")
# macdonald.add_animal("Ship", "Goat", "Ship", "Cow","Cow","Cow","Cow")
# print(macdonald.dict_animal())
# print(macdonald.get_animal_types())
# print(macdonald.get_short_info())