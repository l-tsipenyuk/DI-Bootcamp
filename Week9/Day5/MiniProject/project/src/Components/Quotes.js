import React from "react";
import quotes from "../Data/Data";

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesShuffled: [],
            quoteIndex: 0,
        };
    }

    shuffleQuotes() {
        const quotesShuffled = [...quotes];
        for (let i = quotesShuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quotesShuffled[i], quotesShuffled[j]] = [
                quotesShuffled[j],
                quotesShuffled[i],
            ];
        }
        this.setState({
            quotesShuffled,
            quoteIndex: 0,
        });
    }

    getRandomQuote() {
        const { quoteIndex, quotesShuffled } = this.state;
        this.setState((prevState) => ({
            quoteIndex: prevState.quoteIndex + 1,
        }));
    }

    componentDidMount = () => {
        this.shuffleQuotes();
    };

    render() {
        const { quotesShuffled, quoteIndex } = this.state;
        const newQuote = quotesShuffled[quoteIndex];

        if (!newQuote) {
            return
        }

        return (
            <>
                <div class="container">
                    <h2>"{newQuote.quote}"</h2>
                    <p><i>-{newQuote.author}-</i></p>
                        <button onClick={() => this.getRandomQuote()}>New quote</button>
                    </div>
            </>
        );
    }
}

export default Quotes;
