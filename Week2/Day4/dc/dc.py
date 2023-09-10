# def message():
#     string = """
#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!"""
#     rows = string.strip().split('\n')
#     print(rows)
#     for row in rows:
#         row_size = (len(row))
#     matrix = [[' ' for _ in range(row_size)] for _ in range(len(rows))]
#     for x, row in enumerate(rows):
#         for y, letter in enumerate(row):
#             matrix[x][y] = letter
#     message = ""
#     for x in range(row_size):
#         for y in range(len(rows)):
#             if matrix[y][x].isalpha():
#                 message += matrix[y][x]
#             else:
#                 if message and message[-1] != " ":
#                     message += " "
#     return message  

# print(message())


# def message():
# string = """
# 7ii
# Tsx
# h%?
# i #
# sM 
# $a 
# #t%
# ^r!"""
# rows = string.strip().split('\n')
# # print(rows)
# for row in rows:
#     row_size = (len(row))
# matrix = [[' ' for _ in range(row_size)] for _ in range(len(rows))]

# for x, row in enumerate(rows):
#     for y, letter in enumerate(row):
#         matrix[x][y] = letter
# # print(len(matrix))
# # print(len(row))
# # print(matrix)
# message = ""
# for x in range(len(matrix)):
#     for y in range(len(row)):
#         if matrix[x][y].isalpha():
#             message += matrix[x][y]
#         else:
#             if message and message[-1] != " ":
#                 message += " "
# print(message)
# # return message  

# # # print(message())





# def decrypt_matrix(matrix_str):
    # Split the matrix string into rows


string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""
rows = string.strip().split('\n')
num_rows = len(rows) #8
num_cols = len(rows[0]) #3
matrix = [[' ' for _ in range(num_cols)] for _ in range(num_rows)]
for x, row in enumerate(rows):
    for y, letter in enumerate(row):
        matrix[x][y] = letter
message = ""
for y in range(num_cols):
    word = ""
    for x in range(num_rows):
        if matrix[x][y].isalpha():
            word += matrix[x][y]
        else:
            if word != "":
                message += word + " "
                word = ""
    if word != "":  
        message += word + " "
print(message)

