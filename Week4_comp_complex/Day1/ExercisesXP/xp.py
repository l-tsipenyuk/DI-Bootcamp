# Exercise 1: Identifying Time Complexity
# Instructions
# Identifying the Time Complexity for each of the below programs

# Snippet 1

# for i in range(10):
#     print(i)

# Snippet 2

# for i in range(n):
#     for j in range(n):
#         print(i, j)

# Snippet 3

# i = 1
# while i < n:
#     i *= 2
#     print(i)

#Snippet 1. O(1) - constant amount of iterations
#Snippet 2. O(N^2)
#Snippet 3. O(LogN)  



# Exercise 3: Understanding Binary Search
# Your task is to implement this algorithm in Python and understand its performance characteristics.

# numbers = [1, 3, 5, 7, 9, 11]

# def binary_search(numbers: list, value: int):
#     if is_sorted() == False:
#         pass
#     else:
#         n = len(numbers)
#         low = 0
#         high = n-1
#         while low <= high:
#             mid = (low + high)//2
#             if value < numbers[mid]:
#                 high = mid - 1
#             elif value > numbers[mid]:
#                 low = mid + 1
#             else:
#                 return mid
#     raise ValueError("Value is not in the list.")

# def is_sorted():
#     test_numbers = numbers[:]
#     sorted(test_numbers)
#     if (test_numbers == numbers):
#         return True
 
# print(binary_search(numbers, 5)) 

# Exercise 2: Understanding Insertion Sort

# numbers = [5, 2, 9, 1, 5, 6]

# def insertion_sort(numbers: list):
#    for i in range(1, len(numbers)):
#     value = numbers[i]
#     j = i -1
#     while numbers[j] > value and j >= 0:
#         numbers[j + 1] = numbers[j]
#         j -= 1
#     numbers[j + 1] = value



# insertion_sort(numbers) 
# print(numbers) 