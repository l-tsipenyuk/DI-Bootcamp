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

# Part 1: Create The Node Class
# Your first task is to create a Node class. This class should contain:

# An __init__ method that initializes two attributes:
# value, which holds the data the node will store.
# next, which is a reference to the next node in the list. It should be initialized as None.


# This class serves as the building block for creating your linked list.

# Part 2: Create The LinkedList Class
# Your next step is to create a LinkedList class. This class should contain:

# An __init__ method that initializes a head attribute as None.
# An append method to add new nodes to the end of the list:
# Create a new node with the given value using the Node class.
# If the head is None, make this new node the head.
# Otherwise, traverse the list to find the last node and attach the new node there.
# This class will serve as a wrapper around the Node objects and will offer a way to manipulate the linked list.

# Part 3: Implement The Merge_sorted_linked_lists Function
# Finally, write a function named merge_sorted_linked_lists that does the following:

# Takes two sorted LinkedList objects as input arguments.
# Initializes a “dummy” node to help easily build the new sorted linked list.
# Uses two pointers to traverse both lists and a third pointer to construct the new list.
# Adds the node with the smaller value to the new list and advances the respective list pointer.
# If one list is exhausted, appends the remaining nodes from the other list to the new list.
# The function should return the head of the new sorted linked list.

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            current_node = self.head
            while current_node.next:
                current_node = current_node.next
            current_node.next = new_node
    
def merge_sorted_linked_lists(list_1, list_2):
    merged_list = LinkedList()
    current1 = list_1.head
    current2 = list_2.head

    while current1 is not None and current2 is not None:
        if current1.value < current2.value:
            merged_list.append(current1.value)
            current1 = current1.next
        else:
            merged_list.append(current2.value)
            current2 = current2.next

        while current1 is not None:
            merged_list.append(current1.value)
            current1 = current1.next
        while current2 is not None:
            merged_list.append(current2.value)
            current2 = current2.next

        return merged_list

list_1 = LinkedList()
list_1.append(3)
list_1.append(2)
list_1.append(1)

list_2 = LinkedList()
list_2.append(6)
list_2.append(5)
list_2.append(4)

merged = merge_sorted_linked_lists(list_1, list_2)

current = merged.head
while current:
    print(current.value, end = " ")
    current = current.next

