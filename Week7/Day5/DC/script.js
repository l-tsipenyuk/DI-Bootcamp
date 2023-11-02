let from = document.getElementById("from");
let to = document.getElementById("to");
let amount = document.getElementById("amount");
let fromValue, toValue; 

btn.addEventListener("click", function (e) {
    e.preventDefault();

    fromValue = from.value;
    toValue = to.value;
    let amountValue = amount.value;

    rateRequiredFrom = currencyRates[fromValue].rate;
    rateRequiredTo = currencyRates[toValue].rate;
    result = 1 / rateRequiredFrom * rateRequiredTo * amountValue;

    resultDOM = document.getElementById("result");
    resultDOM.textContent = result;
});

btn2.addEventListener("click", function (err) {
    err.preventDefault();

    let temp = fromValue;
    fromValue = toValue;
    toValue = temp;

    from.value = fromValue;
    to.value = toValue;
});

// fetching data
const myKey = "128a791ef4a893a0571b997e";
const urlRates = `https://v6.exchangerate-api.com/v6/${myKey}/latest/USD`;

const currencyRates = {};

fetch(urlRates)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("The character is not found.");
        }
    })
    .then((data) => {
        const ratesData = data.conversion_rates;

        const urlCodes = `https://v6.exchangerate-api.com/v6/${myKey}/codes`;

        fetch(urlCodes)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch currency codes.");
                }
            })
            .then((data2) => {
                const supportedCodes = data2.supported_codes;

                if (supportedCodes) {
                    supportedCodes.forEach((code) => {
                        const codeKey = code[0];
                        const codeName = code[1];

                        if (ratesData[codeKey]) {
                            currencyRates[codeKey] = {
                                name: codeName,
                                rate: ratesData[codeKey]
                            };
                        }
                    });

// creating drop down list
                    const selects = document.querySelectorAll(".currencies");
                    for (const select of selects) {
                        for (const currencyCode in currencyRates) {
                            if (currencyRates.hasOwnProperty(currencyCode)) {
                                const currency = currencyRates[currencyCode];
                                const option = document.createElement("option");
                                option.value = currencyCode;
                                option.textContent = `${currencyCode} - ${currency.name}`;
                                select.appendChild(option);
                            }
                        }
                    }
                } else {
                    console.log("No supported codes data found.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    })
    .catch((error) => {
        console.error(error);
    });
























