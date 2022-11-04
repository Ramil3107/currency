
export const CurrencyInput = ({ rates, amount, currency, onChangeAmount, onChangeCurrency }) => {
    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => onChangeAmount(e.target.value)}
                disabled={!rates}
            />
            <select
                disabled={!rates}
                value={currency}
                onChange={(e) => onChangeCurrency(e.target.value)}
            >
                {Object.keys(rates)?.map(symbol => <option key={symbol} value={symbol}>{symbol}</option>)}
            </select>
        </div>
    )
}
