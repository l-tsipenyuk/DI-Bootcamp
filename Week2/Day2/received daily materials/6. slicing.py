colors = ["blue", "red", "yellow", "pink"]

# copy the colors arrays
# from blue to yellow only

# first number is the index where we start copying
# second number is the index where we finish copying (NOT INCLUDED)
new_colors = colors[0:3] #['blue', 'red', 'yellow']

# print(colors)
# print(new_colors)

# not pointing to the same address
# from the begining to the end
new_colors_again = colors[:]

# print(colors)
# print(new_colors_again)

# point to the same address
new_colors_again = colors

print(colors)
print(new_colors_again)
