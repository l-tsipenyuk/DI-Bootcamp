#1

def sort_sequence():
    user_input = input("Type a sequence of words: \n")
    sequence_list = []
    sequence_list.extend(user_input.split(","))
    result = sorted(sequence_list)
    return result

print(sort_sequence())


