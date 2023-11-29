buttonEL = document.getElementById("button");
resultEL = document.getElementById("result");

buttonEL.addEventListener("click", searchgif);

function searchgif() {
    var url = "https://b682nc9ec1.execute-api.us-east-1.amazonaws.com/dev/giphy/search?search=";
    var searched = document.getElementById("search").value;
    var api = url + searched;
    var firstres = api.replace(/[|]|"/g, "");
    var res = firstres.split(",");

    fetch(res, { method: 'GET', headers: { Accept: 'application/json' } })
        .then(function (response) {
            response.json()
                .then(function (text) {
                    for (let i = 0; i <= text.length - 1; i++) {
                        var img = document.createElement("img");
                        img.setAttribute("src", text[i]);
                        resultEL.appendChild(img);
                    }
                });
        });
}