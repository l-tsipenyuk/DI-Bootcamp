class Pagination():
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.currentpage = 0
    def get_visible_items(self):
        if self.items is None:
            return []
        n = self.pageSize
        result = [self.items[i * n:(i + 1) * n] for i in range((len(self.items) + n - 1) // n)]
        return result
    def first_page(self):
        first = self.get_visible_items()
        self.currentpage = 0
        return first[0]
    def last_page(self):
        last = self.get_visible_items()
        self.currentpage = len(last)
        return last[self.currentpage-1]
    def go_to_page(self, pageNum):
        go = self.get_visible_items()
        self.currentpage = pageNum
        return go[self.currentpage]
    def next_page(self):
        d = self.get_visible_items()
        if self.currentpage < len(d)-1:
            self.currentpage += 1
        return d[self.currentpage]
    def prev_page(self):
        d = self.get_visible_items()
        if self.currentpage < len(d)-1:
            self.currentpage -= 1
        return d[self.currentpage]



alphabetList = list("abcdefghijklmnopqrstuvwxyz")
example = Pagination(alphabetList, 4)
# print(example.get_visible_items())
print(example.first_page())
print(example.next_page())
print(example.prev_page())
# print(example.last_page())
# print(example.go_to_page(2))
# print(example.next_page())



#possible improvement not to return the list in every method

    # def get_all_pages(self):
    #     if self.items is None:
    #         return []
    #     n = self.pageSize
    #     return [self.items[i * n:(i + 1) * n] for i in range((len(self.items) + n - 1) // n)]

    # def get_visible_items(self):
    #     pages = self.get_all_pages()
    #     return pages[self.currentpage] if pages else []