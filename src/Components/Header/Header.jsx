import cl from './Header.module.scss';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

export default function Header({ rate }) {
  return (
    <header>
      <div className={cl.title}>
        <div className={cl.logo}>
          <img src="images/logo.png" alt="logo" />
        </div>
        <span>Currency converter</span>
      </div>
      <div className={cl.rateContainer}>
        <span className={cl.rate}>
          <CurrencyIcon currency="usd" /> {rate?.usd.uah.toFixed(2) || 0}
        </span>
        <span className={cl.rate}>
          <CurrencyIcon currency="eur" /> {rate?.eur.uah.toFixed(2) || 0}
        </span>
      </div>
    </header>
  );
}
