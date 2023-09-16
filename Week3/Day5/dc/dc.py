# Part 1 : Quizz :
# Answer the following questions

# 1. What is a class?
# 2 What is an instance?
# 3. What is encapsulation?
# 4. What is abstraction?
# 5. What is inheritance?
# 6. What is multiple inheritance?
# 7. What is polymorphism?
# 8. What is method resolution order or MRO?

#1. Class is a user-defined data structure. 
#2. Instance or object of a class is an item which belongs to the class and has its feature.
#3. Encapsultaion is an access rectriction for methods and variables, so that some of component are available only inside the class.
#4. Abstracion allows to hide unnecessary information from users. I.e. here when the user calls .is_valid_word(), he doesn't have to keep in mind how this method works.
    # anagram_checker = AnagramChecker()
    # anagram_checker.is_valid_word()
#5. Inheritanse is an ability to create a child class which inherits all the methods from the parent class. 
#6. Multiple inheritance means that the a child class could be derived from more than one parent class.
#7. Polymorphism is an ability for different classes to use the same names for their functions.
#8. MRO indicates the order in which the method is searched in the classes. 

# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.  

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} ; the suit is {self.suit}"

class Deck:
    def __init__(self):
        self.cards_deck = [] 
        self.form_a_deck()
    
    def form_a_deck(self):
        cards_suit = ["Hearts", "Diamonds", "Clubs", "Spades"]
        cards_value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        for suit in cards_suit:
            for value in cards_value:
                self.cards_deck.append(Card(suit, value))
        return self.cards_deck

    def shuffle(self):
        random.shuffle(self.cards_deck)
    
    def deal(self):
        if len(self.cards_deck) > 0:
            return self.cards_deck.pop()
        else:
            return None

a = Deck()
a.shuffle()
card = a.deal()
if card:
    print(f"The card with value {card.value} and suit {card.suit} is dealt. Now there are {len(a.cards_deck)} cards left in a deck.")
else:
    print("There are no cards in the deck.")

# for card in a.cards_deck:
#     print(card)



