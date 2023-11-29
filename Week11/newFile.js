const { getJson } = require("serpapi");

getJson({
    engine: "google_images",
    q: "Coffee",
    location: "Austin, TX, Texas, United States",
    api_key: "8a9064bb36bc9dad4e29f57e7dbc5bd3e4ca83e4fbcb6e8e8abbbf435d3bf5a4"
}, (json) => {
    console.log(json);
});