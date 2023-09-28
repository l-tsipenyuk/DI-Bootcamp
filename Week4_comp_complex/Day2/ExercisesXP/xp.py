# Exercise 1: Task Scheduler
# Instructions
# Write a Python program that simulates a task scheduler using a queue. The program should:

# Add a task to the queue with a description and priority level.
# Execute the next task based on its priority (First-In-First-Out if priority levels are the same).
# Show the current task queue.
# Use Python’s collections.deque for the queue implementation.

from queue import PriorityQueue

queue = PriorityQueue()

class Tasks:
    def __init__(self, name):
        self.name = name

    # def add_task(self, task_name, priority: int):
    #     task = 

task1 = Tasks("Do homework")
task2 = Tasks("Clean room")
task3 = Tasks("Go for a walk")

object_to_name = {task1: task1.name, task2: task2.name, task3: task3.name}

queue.put((3, task3))
queue.put((2, task2))
queue.put((1, task1))

priority, item = queue.get()
# priority, item = queue.get()
# priority, item = queue.get()

print("Priority:", priority)
print("Item Name:", object_to_name[item])