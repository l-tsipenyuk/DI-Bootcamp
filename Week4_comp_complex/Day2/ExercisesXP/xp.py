# Exercise 1: Task Scheduler
# Instructions
# Write a Python program that simulates a task scheduler using a queue. The program should:

# Add a task to the queue with a description and priority level.
# Execute the next task based on its priority (First-In-First-Out if priority levels are the same).
# Show the current task queue.
# Use Python’s collections.deque for the queue implementation.

# import queue
# from queue import PriorityQueue

# class Tasks:
#     def __init__(self):
#         self.task_queue = queue.PriorityQueue()

#     def add_task(self, task_name, task_priority):
#         self.task_queue.put((task_priority, task_name))

#     def next_task(self):
#         while not self.task_queue.empty():
#             priority, task_name = self.task_queue.get()
#             print("Priority:", priority)
#             print("Item Name:", task_name)
#             break
#         else:
#             print("There are no tasks left")

# tasks = Tasks()
# tasks.add_task("Do homework",1)
# tasks.add_task("Clean room",2)
# tasks.add_task("Go for a walk",3)
# tasks.next_task()
# tasks.next_task()
# tasks.next_task()
# tasks.next_task()


# Exercise 2: Palindrome Checker
# Create a Python function to check if a given word or phrase is a palindrome using a queue. Ignore spaces and case sensitivity.

# def palindrome_checker():
#     user_input = str(input("Type the word:\n")).lower()
#     input_list_original = list(user_input)
#     input_list = list(user_input)
#     input_list.reverse()
#     if input_list == input_list_original:
#         return True
#     else:
#         return False

# print(palindrome_checker())

# Exercise 3: Merge Two Sorted Linked Lists

    