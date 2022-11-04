import styles from "./CurrencyInput.module.css"

export const CurrencyInput = ({ rates, amount, currency, onChangeAmount, onChangeCurrency }) => {
    return (
        <div className={styles.currencyInput}>
            <input
                className={styles.amount}
                type="number"
                value={amount}
                onChange={(e) => onChangeAmount(e.target.value >= 0 ? e.target.value : "")}
                disabled={!rates}
            />
            <select
                className={styles.currency}
                disabled={!rates}
                value={currency}
                onChange={(e) => onChangeCurrency(e.target.value)}
            >
                {Object.keys(rates)?.map(symbol => <option key={symbol} value={symbol}>{symbol}</option>)}
            </select>
        </div>
    )
}
