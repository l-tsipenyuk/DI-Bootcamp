class Pagination():
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
    def get_visible_items(self):
        if self.items is None:
            return []
        n = self.pageSize
        result = [self.items[i * n:(i + 1) * n] for i in range((len(self.items) + n - 1) // n)]
        return result
    def first_page(self):
        first = self.get_visible_items()
        return first[0]
    def last_page(self):
        last = self.get_visible_items()
        x = len(last)
        return last[x-1]
 


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
example = Pagination(alphabetList, 4)
# print(example.get_visible_items())
# print(example.first_page())
print(example.last_page())


