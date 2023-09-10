# Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Whiskers",10)
# cat2 = Cat("Luna",2)
# cat3 = Cat("Oliver",5)

# def get_cat_age(cat):
#     return cat.age

# def oldest_cat():
#     cats = [cat1, cat2, cat3]
#     oldest = max(cats, key=get_cat_age)
#     return print(f"The oldest cat is {oldest.name} and is {oldest.age} years old.")

# oldest_cat()

# Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# class Dog:
#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height
#     def bark(self):
#         return f"{self.name} goes woof!"
#     def jump(self):
#         return f"{self.name} jumps {self.height*2} cm high!"

# dog1 = Dog("Baily", 45)
# print(dog1.bark())
# print(dog1.jump())
# davids_dog = Dog("Rex", 50)
# print(davids_dog.name)
# print(davids_dog.bark())
# print(davids_dog.jump())
# sarahs_dog = Dog("Teacup",20)
# print(sarahs_dog.name)
# print(sarahs_dog.bark())
# print(sarahs_dog.jump())

# if sarahs_dog.height > davids_dog.height:
#     print(f"{sarahs_dog.name} is bigger.")
# else:
#     print(f"{davids_dog.name} is bigger")

# Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

# class Zoo: 
#     def __init__(self, zoo_name):
#         self.zoo_name = zoo_name
#         self.animals = []
#         self.animals_new_list = []
#         self.animals_sold_list = []
#     def add_animal(self, *new_animals):
#         for new_animal in new_animals:
#             if new_animal in self.animals:
#                 return f"The {new_animal} is already in the zoo."
#             else:
#                 self.animals.append(new_animal)
#                 self.animals_new_list.append(new_animal)
#         return new_animal
#     def get_animals (self):
#         return self.animals
#     def sell_animal (self, *sold_animals):
#         for sold_animal in sold_animals:
#             if sold_animal in self.animals:
#                 self.animals.remove(sold_animal)
#                 self.animals_sold_list.append(sold_animal)
#                 return f"The {sold_animal} is sold. New list of animals is {self.animals}."
#             else:
#                 return f"The {sold_animal} is not in the zoo."
#     def sort_animal(self):
#         animal_dict = {}
#         for animal in self.animals:
#             first_letter = animal[0].upper()
#             if first_letter not in animal_dict:
#                 animal_dict[first_letter] = []
#             animal_dict[first_letter].append(animal)        
#         sorted_animals = {}
#         index = 1
#         for key, value in sorted(animal_dict.items()):
#             sorted_animals[index] = value
#             index += 1        
#         return sorted_animals

#     def get_groups_words (self): 
#         sold_animals = ", ".join(self.animals_sold_list)
#         new_animals = ", ".join(self.animals_new_list)
#         all_animals = ", ".join(self.animals)
#         return f"These animals are new: {new_animals}. These animals are sold: {sold_animals}. This is our full list of animals: {all_animals}."
 
  

# ramat_gan_safari = Zoo("Ramat Gan safari")
# ramat_gan_safari.add_animal("Elephant", "Monkey", "Penguin", "Pigeon","Baboon","Bear","Cat","Cougar")
# ramat_gan_safari.sell_animal("Pigeon","Penguin")
# print(ramat_gan_safari.sort_animal())