const quotes = [
    {
        id: 0,
        quote: "How you doin'?!",
        author: "Joey",
    },
    {
        id: 1,
        quote: "If he doesn't like you this is all a moo point. ... Yeah, it's like a cow's opinion. It just doesn't matter.It's moo.",
        author: "Joey",
    },
    {
        id: 2,
        quote: "Pivot! Pivot! Pivot! Pivot.Pivot.Pivot.",
        author: "Ross",
    },
    {
        id: 3,
        quote: "Oh.My.God.",
        author: "Janice",
    },
    {
        id: 4,
        quote: "I don't even have a 'pla'.",
        author: "Phoebe",
    },
    {
        id: 5,
        quote: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
        author: "Chandler",
    },
    {
        id: 6,
        quote: "I wish I could, but I don’t want to.",
        author: "Phoebe",
    }, {
        id: 7,
        quote: "OK, just to be clear, comedy with the plates will not be well-received.",
        author: "Monica",
    }, {
        id: 8,
        quote: "Everyone I know is either getting married or getting pregnant or getting promoted, and I'm getting coffee! And it's not even for me!",
        author: "Rachel",
    },
    {
        id: 9,
        quote: "No bunny at all. ALWAYS NO BUNNY AT ALL!",
        author: "Chandler",
    }
];

const element = document.getElementById("submitButton");
element.addEventListener("click", SelectQuote);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function SelectQuote() {
    if (quotes.length === 0) {
        return;
    }

    if (!quotes.shuffled) {
        shuffleArray(quotes);
        quotes.shuffled = true;
    }

    const quote = quotes.pop();
    quoteRand = quote.quote;
    authorRand = quote.author;

    document.querySelector(".quote").textContent = quoteRand;
    document.querySelector(".author").textContent = authorRand;
};

const form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newAuthor = form.querySelector('input[name="author"]').value;
    const newQuote = form.querySelector('textarea[name="quote"]').value;
    const newObj = {
        id: quotes.length + 1,
        quote: newQuote,
        author: newAuthor,
   };
   quotes.push(newObj);
   console.log(quotes);
});