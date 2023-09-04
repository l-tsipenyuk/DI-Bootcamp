# TUPLE
>>> fruits = ("apple", "pear", "banana")
>>> fruits[0]
'apple'
>>> fruits[0] = "melon"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> all_fruits = fruits + ("melon","watermelon")
>>> all_fruits
('apple', 'pear', 'banana', 'melon', 'watermelon')

# SET
>>> colors = ["blue", "red", "yellow", "red", "blue"]
>>> set_colors = set(colors) #CONVERT TO A SET
>>> set_colors
{'blue', 'yellow', 'red'}
>>> list_colors = list(set_colors) #CONVERT TO A LIST
>>> list_colors
['blue', 'yellow', 'red']



int() 
--> convert a string to a integer
--> convert a float to a number

str()
--> convert an integer to a string

list() 
--> convert something into a list
list(range(5))

set()
--> convert a list or a tuple into a set