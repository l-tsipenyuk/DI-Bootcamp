#exceptions

# def division (a, b):
#     try:
#         print("a", a)
#         print("b", b)
#         print("The division result is", a/b)
#     except:
#         print("A problem occured")
#         new_a = int(input("give me another number \n"))
#         new_b = int(input("give me another number \n"))
#         division(new_a, new_b)

# division(2,0)

#specific exceptions

# def division (a, b):
#     try:
#         print("a", a)
#         print("b", b)
#         print("The division result is", a/b)
#     except ZeroDivisionError:
#         print("A problem occured")
#         new_a = int(input("give me another number \n"))
#         new_b = int(input("give me another number \n"))
#         division(new_a, new_b)
#     except Exception:
#         print("big problem")
#     else :
#         print("congrats!") #runs if there are no exceptions
#     finally: 
#         print("finally") #runs all the time when we call the division

# division(2,0)
# division(10,"hello") #big problem



# Exercise

# Create a colorize(text, color) function that contain this tuple colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
# If the color is not present in the tuple, raise a ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception

# def colorize(text, color):
#     colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
#     new_color = color
#     try:
#         for items in colors:
#             if color == items:
#                 return True
#             else:
#                 return False
#                     except Exception:
#                         print("big problem")
                

def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    # new_color = color
    try:
        if color not in items:
            raise ValueError("color is not in a list")
        if not isinstance(text,str):
            raise TypeError("The text is not a string")
    except ValueError as error: 
        print(error)
        print("Problem with the color")
    except Exception as error:
        print("The error is that", error)
  

colorize("text", "blue")
