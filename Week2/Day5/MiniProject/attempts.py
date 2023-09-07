# def display_board(board):
#     print("Welcome to TIC TAC TOE!")
#     print(" "*17)
#     print("TIC TAC TOE")
#     print("*"*17)
#     for row in range(5):
#         if row % 2 == 0:
#             print("*" + " " * 5 + "|" + " " * 3 + "|" + " " * 5 + "*")
#         else:
#             print("*" + " " * 2 + board[row // 2][0] + " | " + board[row // 2][1] + " | " + board[row // 2][2] + " " * 2 + "*")
#         if row < 4:
#             print("*" + " " * 2 + "-" * 3 + "+" + "-" * 3 + "+" + "-" * 3 + " " * 2 + "*")
#     print("*" * 17)

# board = [
#     ["0", "X", "0"],
#     ["X", "0", "X"],
#     ["0", "0", "X"]
# ]

# display_board(board)