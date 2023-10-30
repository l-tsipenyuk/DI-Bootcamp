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
    },
];

function SelectQuote() {
    let idQuote = Math.floor(Math.floor(Math.random()*10));
    quoteRand = quotes[id=idQuote].quote;
    authorRand = quotes[id = idQuote].author;
    document.querySelector(".quote").textContent = quoteRand;
    document.querySelector(".author").textContent = authorRand;
}

const element = document.getElementById("submitButton");
element.addEventListener("click", SelectQuote);

