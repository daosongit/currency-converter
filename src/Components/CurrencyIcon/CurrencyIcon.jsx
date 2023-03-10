import { FaDollarSign as IcoUSD, FaHryvnia as IcoUAH, FaEuroSign as IcoEUR } from 'react-icons/fa';

export default function CurrencyIcon({ currency }) {
  switch (currency) {
    case 'usd':
      return <IcoUSD />;
    case 'uah':
      return <IcoUAH />;
    case 'eur':
      return <IcoEUR />;
    default:
      return <></>;
  }
}
