def balanced_checker():
    expr_list = list(expr)

    open_brack = "([{"
    close_brack = ")]}"

    stack = []
    for i in expr_list:
        if i in open_brack:
            stack.append(i)
        elif i in close_brack:
            if not stack:
                return False
            out = stack.pop()
            if open_brack.index(out) != close_brack.index(i):
                return False
    if len(stack) == 0:
        return True
    return False

# expr = "(()"
# expr = "(1 + 2) * {[(3 / 4) - 5]}"
# expr = "[1 + 2) * (3 - 4)]"
# expr = "((1 + 2)"
# expr = "1+3("
print(balanced_checker())


#option 2

# def balanced_checker_option2():
#     expr_list = list(expr)

#     round0 = "("
#     round1 = ")"
#     square0 = "["
#     square1 = "]"
#     curly0 = "{"
#     curly1 = "}"

#     for i in range(1, len(expr_list)):
#         while round0 or round1 in exprlist:
#             a = expr_list.index(round0)
#             b = expr_list.index(round1)
#             if a < b and expr.count(round0) == expr.count(round1):
#                 return True
#             else:
#                 return False
#         while square0 or square1 in exprlist:
#             a = expr_list.index(square0)
#             b = expr_list.index(square1)
#             if a < b and expr.count(square0) == expr.count(square1):
#                 return True
#             else:
#                 return False
#         while curly0 or curly1 in exprlist:
#             a = expr_list.index(curly0)
#             b = expr_list.index(curly1)
#             if a < b and expr.count(curly0) == expr.count(curly1):
#                 return True
#             else:
#                 return False


# expr = "(()"
# expr = "))(("
# expr = "(1 + 2) * {[(3 / 4) - 5]}"
# expr = "[1 + 2) * (3 - 4)]"
# expr = "((1 + 2)"

# print(balanced_checker_option2())