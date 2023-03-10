import cl from './Converter.module.scss';
import { CgArrowsExchangeAltV as IcoReplace } from 'react-icons/cg';
import { useState } from 'react';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import convert from './modules/convert';

export default function Converter({ rate }) {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('uah');

  // 'from' and 'to' parameters need when replacing currency
  // beacuse setCurrency unable to update data in time
  function changeFromAmount(amount, from = fromCurrency, to = toCurrency) {
    if (isNaN(Number(amount))) return;
    setFromAmount(amount);
    setToAmount(convert(rate[from][to], amount));
  }
  function changeToAmount(amount) {
    if (isNaN(Number(amount))) return;
    setToAmount(amount);
    setFromAmount(convert(rate[toCurrency][fromCurrency], amount));
  }
  function changeFromCurrency(value) {
    setFromCurrency(value);
    setToAmount(convert(rate[value][toCurrency], fromAmount));
  }
  function changeToCurrency(value) {
    setToCurrency(value);
    setToAmount(convert(rate[fromCurrency][value], fromAmount));
  }
  function replaceCurrency() {
    const oldToCurrency = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(oldToCurrency);
    changeFromAmount(fromAmount, oldToCurrency, fromCurrency);
  }

  return (
    <>
      <div className={cl.converter}>
        <span className={cl.form}>
          <label>
            <CurrencyIcon currency={fromCurrency} />
          </label>
          <input
            placeholder="0"
            type="text"
            value={fromAmount}
            onChange={(e) => changeFromAmount(e.target.value)}
          />
          <select onChange={(e) => changeFromCurrency(e.target.value)} value={fromCurrency}>
            <option value="usd">USD - US Dollar</option>
            <option value="eur">EUR - Euro</option>
            <option value="uah">UAH - Ukrainian Hryvnia</option>
          </select>
        </span>

        <span className={cl.form}>
          <label>
            <CurrencyIcon currency={toCurrency} />
          </label>
          <input
            placeholder="0"
            type="text"
            value={toAmount}
            onChange={(e) => changeToAmount(e.target.value)}
          />
          <select onChange={(e) => changeToCurrency(e.target.value)} value={toCurrency}>
            <option value="usd">USD - US Dollar</option>
            <option value="eur">EUR - Euro</option>
            <option value="uah">UAH - Ukrainian Hryvnia</option>
          </select>
        </span>
      </div>
      <button className={cl.icoReplace} onClick={replaceCurrency}>
        <IcoReplace size={30} />
      </button>
    </>
  );
}
