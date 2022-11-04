import { useState } from "react"
import styles from "./CurrentRates.module.css"

export const CurrentRates = ({ rates }) => {

    const USD = (rates["UAH"] / rates["USD"]).toString().substring(0, 5)
    const EUR = (rates["UAH"] / rates["EUR"]).toString().substring(0, 5)

    return (
        <div className={styles.wrapper}>
            {`(based on UAH) 🇺🇸 ${USD} 🇪🇺 ${EUR}`}
        </div>
    )
}
