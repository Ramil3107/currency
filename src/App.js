import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Loader } from './common/loader/Loader';
import { CurrencyInput } from './components/currencyInput/CurrencyInput';
import { CurrentRates } from './components/currentRates/CurrentRates';

function App() {

  const [loader, setLoader] = useState(false)
  const [rates, setRates] = useState("")
  const [firstAmount, setFirstAmount] = useState(0)
  const [firstCurrency, setFirstCurrency] = useState("USD")
  const [secondAmount, setSecondAmount] = useState(0)
  const [secondCurrency, setSecondCurrency] = useState("UAH")

  useEffect(() => {
    setLoader(false)
    try {
      setLoader(true)
      axios.get("https://api.apilayer.com/exchangerates_data/latest?base=USD", {
        headers: {
          "apikey": "SwQ7B3jlZvnQ2jmXG9rJwJoYBBxmsLN7"
        }
      })
        .then(response => response.data)
        .then(data => {
          setRates(data.rates)
          setLoader(false)
        })
    } catch {
      setLoader(false)
    }
  }, [])

  function handleFirstAmountChange(amount) {
    setFirstAmount(amount);
    setSecondAmount(amount * rates[secondCurrency] / rates[firstCurrency]);
  }

  function handleFirstCurrencyChange(currency) {
    setFirstCurrency(currency);
    setSecondAmount(firstAmount * rates[secondCurrency] / rates[currency]);
  }

  function handleSecondAmountChange(amount) {
    setSecondAmount(amount);
    setFirstAmount(amount * rates[firstCurrency] / rates[secondCurrency]);
  }

  function handleSecondCurrencyChange(currency) {
    setSecondCurrency(currency);
    setFirstAmount(secondAmount * rates[firstCurrency] / rates[currency]);
  }

  return (
    <div className="App">
      <CurrentRates rates={rates} />
      <CurrencyInput
        rates={rates}
        amount={firstAmount}
        currency={firstCurrency}
        onChangeAmount={handleFirstAmountChange}
        onChangeCurrency={handleFirstCurrencyChange}
      />
      <CurrencyInput
        rates={rates}
        amount={secondAmount}
        currency={secondCurrency}
        onChangeAmount={handleSecondAmountChange}
        onChangeCurrency={handleSecondCurrencyChange}
      />
      {loader && <div className='Loader'> <Loader /> </div>}
    </div>
  );
}

export default App;
