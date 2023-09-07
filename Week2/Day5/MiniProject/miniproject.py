board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

def display_board():
    global board
    print("Welcome to TIC TAC TOE!")
    print(" "*17)
    print("TIC TAC TOE")
    print("*"*17)
    print("*" + " "*3 + board[0][0] + " " + "|" + " " + board[0][1] + " " + "|" + " " + board[0][2] + " "*3 + "*")
    print("*" + " "*2 + "-"*3 + "|" + "-"*3 + "|" + "-"*3 + " "*2 + "*")
    print("*" + " "*3 + board[1][0] + " " + "|" + " " + board[1][1] + " " + "|" + " " + board[1][2] + " "*3 + "*")
    print("*" + " "*2 + "-"*3 + "|" + "-"*3 + "|" + "-"*3 + " "*2 + "*")
    print("*" + " "*3 + board[2][0] + " " + "|" + " " + board[2][1] + " " + "|" + " " + board[2][2] + " "*3 + "*")
    print("*"*17) 

def player_input(sign):
    global board
    user_input_column = int(input(f"Player {sign}'s turn... \n Enter column number: \n"))
    user_input_row = int(input("Enter row number: \n"))
    while board[user_input_row][user_input_column] != " ":
        print("Choose another place")
        user_input_column = int(input(f"Player {sign}'s turn... \n Enter column number: \n"))
        user_input_row = int(input("Enter row number: \n"))
    board[user_input_row][user_input_column] = sign
    display_board()

def check_win():
    global board
    for row in board:
        if row[0] == row[1] == row[2] and row[0] == row[1] == row[2] != " ":
            print("We have a winner!")
            return  
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] == board[1][col] == board[2][col] != " ":
            print("We have a winner!")
            return 
    if (board[0][0] == board[1][1] == board[2][2] or board[0][2] == board[1][1] == board[2][0]) and board[1][1] != " ":
        print("We have a winner!")
        return 

def play():
    global sign
    display_board()
    count = 0
    sign = "X"
    while True:
        player_input(sign)
        count += 1
        if count % 2 == 0:
            sign = "X"
        else:
            sign = "O"
        if count >= 9:
            print("It's a tie. Try one more time")
            break
        if check_win():
            break

play()






