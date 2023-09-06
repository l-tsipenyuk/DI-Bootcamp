#default parameters
# def calculate (a, b, operator = "+"): #this is default parameter - this is used if the argument is not passed
#     if operator == "+" :
#         total = a + b
#         print(total)
#     elif operator == "-":
#         total = a - b
#         print(total)
#     else:
#         print("nothing")

# calculate(2,4)

#reuse function 

# def get_fullname (firstname, lastname) : 
#     fullname = f"{firstname} {lastname}"
#     #variable created inside of a function can be used only inside, it's local
#     return fullname #return means that function has a result (fullname in this case). it allows to have an access to the local variable outside of function

# username = get_fullname("John", "Smith")
# sentence = f"Hi user your fullname is {username}"
# print(sentence)


# def get_fullname (firstname, lastname) : 
#     if firstname == "Sara" :
#         return #this means that function stops 
#     else: 
#         return firstname + " " + lastname
    

# username = get_fullname("Neithan", "Smith")
# sentence = f"Hi user your fullname is {username}"
# print(sentence)

#2 functions. one which finds the sum of a list of numbers 
#second receives this sum and multiple by the taxes 1.17

# prices = [32,24,16]
# def find_sum (): 
#     total = 0
#     for price in prices: 
#         total += price
#     if total > 100:
#         return "the price is high"
#     else : 
#         return "the price is low"

# def inform_user () :
#     sentence = f"Hi user, {find_sum()}"
#     print(sentence)

# def multiply_taxes () :
#     final_total = find_sum() * 1.17
#     print(final_total)

# # multiply_taxes ()
# inform_user()

#excercise
def get_price_car (age):
    if age > 40: 
        return 200
    else: 
        return 300


def price_flight (destination):
    if destination == "Paris":
        return 400
    else:
        return 600

def total():
    age = int(input("what is yout age? \n"))
    destination = input("where do you go? \n")
    final_total = get_price_car(age) + price_flight(destination)
    print(f"You vacation will cost {final_total} dollars")

total()