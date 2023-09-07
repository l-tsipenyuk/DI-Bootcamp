data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def check_answers () :
    number_correct_answers = 0
    number_incorrect_answers = 0
    list_wrong_answers = []

    print("\n ---- The quizz starts ----")
    for quizz in data :
        user_answer = input(quizz["question"])
        if user_answer.lower() == quizz["answer"].lower(): #checks if the provided answer is right
            number_correct_answers += 1
        else :
            number_incorrect_answers += 1 #track the wrong answers 
            new_quizz = quizz.copy() #make a copy of the dictionary
            new_quizz["user_answer"] = user_answer #add answers to the list 
            list_wrong_answers.append(new_quizz)
    
    inform_user(number_correct_answers, number_incorrect_answers, list_wrong_answers) #call the function to derive user's analysis

def inform_user (correct, incorrect, wrong_answers) :
    print("\n ----------------------------")
    print(f"You have {correct} correct answers")
    print(f"You have {incorrect} incorrect answers")
    for global_answer in wrong_answers :
        print(f'The question was {global_answer["question"]}')
        print(f'Your answer was {global_answer["user_answer"]}')
        print(f'Your got it wrong, the correct answer is {global_answer["answer"]}')
    
    print("\n --------------------")
    if incorrect > 3 : #make the pattern for the user to play the game one more time 
        print(" YOU GOT MORE 3 ANSWERS WRONG Play Again")
        check_answers()
    else :
        print("Good Job - YOU DONT NEED TO REDO THE GAME")

check_answers()