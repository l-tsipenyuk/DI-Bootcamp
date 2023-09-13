import math
import turtle as t

class Circle:
    circles_list = []

    def __init__(self, radius):
        self.radius = radius
        self.__class__.circles_list.append(self)
    def calculate_area(self):
        return round(math.pi * self.radius**2,2)
    def __str__(self):
        return f"Your circle's radius is {self.radius}"
    def __add__(self, other_circle):
        return self.radius + other_circle.radius
    def __gt__(self, other_circle):
        if self.radius > other_circle.radius:
            return f"The circle with the radius{self.radius} is larger than the circle with the radius {other_circle.radius}"
        else:
            return f"The circle with the radius {other_circle.radius} is larger than the circle with the radius {self.radius}"
    def __eq__(self, other_circle):
        if self.radius == other_circle.radius:
            return f"Two circles have the same radius."
        else:
            return f"These circles have different radius."

    @classmethod
    def sort_sircles(cls):
        cls.circles_list.sort(key = cls.get_radius)
    
    @staticmethod
    def get_radius(circle):
        return circle.radius


a = Circle(5)
d = Circle(15)
b = Circle(10)
c = Circle(25)
# print(a.calculate_area())
# print(a)
# print(a + b)
# print(a > b)
# print(a == c)

Circle.sort_sircles()
for circle in Circle.circles_list:
    print(circle)
    t.circle(circle.radius)


