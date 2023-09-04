user_answer = input("give me a string \n")
#"HelloWorld"

if len(user_answer) < 10 :
    print(f"The string '{user_answer}' is not long enough")
elif len(user_answer) > 10 :
    print(f"The string '{user_answer}' is too long")
elif len(user_answer) == 10 :
    print(f"The string '{user_answer}' is perfect")
    print(f"the last letter is {user_answer[-1]}")
    print(f"the first letter is {user_answer[0]}")

#"HelloWorld"
word = ""
for letter in user_answer :
    word += letter
    print(word)

# 1st loop
# word = ""
# letter = "H"
# word += letter --> "" + "H" --> "H"

# 2nd loop
# word = "H"
# letter = "e"
# word += letter --> "H" + "e" --> "He"