// Envio y Recibo de peticiones //

const axios = require('axios')

const fetchData = async () => {
    try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/dogecoin')
    const { market_data, tickers } = response.data
    const currentPrice = market_data.current_price.usd
    const lastPrice = tickers[0].converted_last.usd
    console.log(lastPrice)
    } catch (error) {
    console.log(error)
    }
}

fetchData()