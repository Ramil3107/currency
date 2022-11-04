
export const CurrencyInput = ({ symbols, amount, currency, onChangeAmount, onChangeCurrency }) => {
    return (
        <div>
            <input type="number" value={amount} onChange={(e) => onChangeAmount(e.target.value)} />
            <select value={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
                {symbols?.map(symbol => <option key={symbol} value={symbol}>{symbol}</option>)}
            </select>
        </div>
    )
}
