const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCryptoes() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCryptoInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCryptoTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}
