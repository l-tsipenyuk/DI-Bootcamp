btn.addEventListener("click", function (e) {
    e.preventDefault();

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

                        console.log(currencyRates);

                        // CONTINUE FROM HERE
                        options = document.getElementById("option_currencies");





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
});























