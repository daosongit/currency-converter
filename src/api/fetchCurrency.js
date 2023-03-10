export default async function fetchCurrency() {
  const config = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'apikey': 'm91tvtX6ONHDHZQ9angvFJHIwoo5oeZG',
    },
  };

  const usd = await fetch(
    'https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,EUR&base=USD',
    config,
  )
    .then((r) => r.json())
    .then((r) => ({ uah: r.rates.UAH, eur: r.rates.EUR, usd: 1 }));

  const eur = await fetch(
    'https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,USD&base=EUR',
    config,
  )
    .then((r) => r.json())
    .then((r) => ({ uah: r.rates.UAH, usd: r.rates.USD, eur: 1 }));

  const uah = await fetch(
    'https://api.apilayer.com/exchangerates_data/latest?symbols=EUR,USD&base=UAH',
    config,
  )
    .then((r) => r.json())
    .then((r) => ({ eur: r.rates.EUR, usd: r.rates.USD, uah: 1 }));

  return { usd, eur, uah };
}
