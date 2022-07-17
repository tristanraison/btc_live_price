const axios = require('axios').default;

console.log("--------------------------\n----- LIVE BTC PRICE -----\n--------------------------");


async function main(){



try {
    let currency = "USD";
    if (process.argv[3]){
        currency = process.argv[3].toUpperCase();
    }

    const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    if (!response.data.bpi[currency])
    {
        throw new Error("Unrecognized currency");
    }
    const price = response.data.bpi.USD.rate
    //const devise = response.data.bpi.USD.code
    console.log(`1 BTC = ${price} ${currency}`);
    } catch (error) {
        console.log(error.toString());
    }
}

main();