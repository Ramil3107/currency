import { useState } from 'react';
import './App.css';
import { CurrencyInput } from './CurrencyInput';

function App() {


  const [symbols, setSymbols] = useState(["USD", "EUR", "UAH"])
  const [firstInputAmount, setFirstInputAmount] = useState(0)
  const [firstInputCurrency, setFirstInputCurrency] = useState("USD")
  const [secondInputAmount, setSecondInputAmount] = useState(0)
  const [secondInputCurrency, setSecondInputCurrency] = useState("UAH")


  return (
    <div className="App">
      <CurrencyInput
        symbols={symbols}
        amount={firstInputAmount}
        currency={firstInputCurrency}
        onChangeAmount={setFirstInputAmount}
        onChangeCurrency={setFirstInputCurrency}
      />
      <CurrencyInput
        symbols={symbols}
        amount={secondInputAmount}
        currency={secondInputCurrency}
        onChangeAmount={setSecondInputAmount}
        onChangeCurrency={setSecondInputCurrency}
      />
    </div>
  );
}

export default App;
