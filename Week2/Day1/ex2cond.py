#Excercise 2
# Fill missing pieces (____) of the following code such that prints make sense.

name = 'John Doe'

if len(name) > 20:
    print(f"Name '{name}' is more than 20 chars long")
    length_description = 'long'
elif len(name) > 15:
    print(f"Name '{name}' is more than 15 chars long")
    length_description = 'semi long'
elif 20 >= len(name) > 15: #between 20 and 15 included
    print(f"Name '{name}' is more than 10 chars long")
    length_description = 'semi long'
elif 10 >= len(name) > 8:
    print(f"Name '{name}' is 8, 9, 10 or 20 chars long")
    length_description = 'semi short'
else:
    print(f"Name '{name}' is a short name")
    length_description = 'short'
