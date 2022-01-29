const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCryptoes() {
  return await fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export async function fetchCryptoInfo(coinId: string) {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export async function fetchCryptoTickers(coinId: string) {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCryptoHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 4;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
  ).then((res) => res.json());
}
