from anagram_checker import AnagramChecker

# UI logic

def show_menu():
    print("Welcome to the anagram programm!")
    user_input = input("Please type your word or 'quit' if you're done.\n")
    return user_input

def main():
    user_input = show_menu()
    if user_input.lower() == 'quit':
        return
    
    anagram_checker = AnagramChecker()
    anagram_checker.is_valid_word(user_input.lower())

main()

