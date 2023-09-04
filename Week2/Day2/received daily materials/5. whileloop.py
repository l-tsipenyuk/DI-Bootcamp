# while loop is a loop that continues running until the condition is false

num = 0

while num < 3 :
    print(f"num is {num}")
    # num = num + 1
    num += 1 # adding 1 to the number

# 1st loop
# num = 0
# num < 3 --> True
# num = 1

# 2nd loop
# num = 1
# num < 3 --> True
# num = 2

# 3rd loop
# num = 2
# num < 3 --> True
# num = 3

# 4th loop
# num = 3
# num < 3 --> False
# we don't enter the loop

bank_amount = 10000
computer_price = 2000
count = 0
# i want to buy a computer until i run out of money
# i want to count how many computers I bought in total

while bank_amount >= computer_price :
    print("i buy a computer")
    bank_amount -= computer_price
    count += 1

print(f"i have {bank_amount} dollars left, I bought {count} computers")


