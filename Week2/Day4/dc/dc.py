def message():
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
    for row in rows:
        row_size = (len(row))
    matrix = [[' ' for _ in range(row_size)] for _ in range(len(rows))]
    for x, row in enumerate(rows):
        for y, letter in enumerate(row):
            matrix[x][y] = letter
    message = ""
    for x in range(row_size):
        for y in range(len(rows)):
            if matrix[y][x].isalpha():
                message += matrix[y][x]
            else:
                if message and message[-1] != " ":
                    message += " "
    return message  

print(message())


