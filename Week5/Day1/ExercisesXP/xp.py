import numpy as np

# Exercise 1:
# 1. Import the numpy package under the name np.
# 2. Create a vector* of zeros with size 10 using np.zeros().

# a = np.zeros(10)
# print(a)

# 3. Compute the memory size* of any array. Note: You can do this by multiplying the length of the array by the size of one array element, which you can find using the .itemsize attribute.
# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# arr_float = arr.astype('float64')
# print(arr_float.itemsize * len(arr_float))

# 4.Retrieve the documentation of the numpy add function from the command line.
# help(np.add)

# 5.Create a vector with values ranging from 10 to 49 using np.arange().
# a = np.arange(10,50)
# print(a)

# 6. Reverse a vector so the first element becomes last (Hint: Use slicing).
# a = np.arange(1,11)
# a_rev = a[::-1]
# print(a_rev)

# 7. Create a 3x3 matrix* with values ranging from 0 to 8 using np.reshape().
# arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8])
# matrix = np.reshape(arr,(3,3))
# print(matrix)

# 8. Find indices of non-zero elements from [1,2,0,0,4,0] using np.nonzero().
# arr = np.array([1,2,0,0,4,0])
# res = np.nonzero(arr)
# print(res)

# 9. Create a 3x3 identity matrix* using np.eye().
# matrix = np.eye(3)
# print(matrix)

# 10. Create a 5x5 matrix with row values ranging from 0 to 4. The output should be a matrix where each row is [0, 1, 2, 3, 4].
# arr = np.arange(5)
# matrix = np.tile(arr, (5,1))
# print(matrix)

# 11. Create a vector of size 10 with values ranging from 0 to 1, both excluded. You can use np.linspace.
# vec = np.linspace(0, 1, 12)[1:-1]
# print(vec)

# 12.Create a random vector of size 10 and sort it.
# def rand():
#     rand = np.random.rand(10)
#     length = len(rand)
#     rand_sort = sorted(rand)
#     return f"An array of {length} random numbers between 0 and 1, sorted in ascending order: {rand_sort}"

# print(rand())

# 13. Print the minimum and maximum representable value for each numpy scalar type* (int8, int32, int64, float32, float64). Use np.iinfo and np.finfo.    
# int8_min = np.iinfo('int8').min
# int8_max = np.iinfo('int8').max
# int32_min = np.iinfo('int32').min
# int32_max = np.iinfo('int32').max
# int64_min = np.iinfo('int64').min
# int64_max = np.iinfo('int64').max
# float32_min = np.finfo('float32').min
# float32_max = np.finfo('float32').max
# float64_min = np.finfo('float64').min
# float64_max = np.finfo('float64').max
# print(f"This command prints the minimum and maximum representable values for the specified data types, i.e. minimum for int8 is {int8_min}.")

