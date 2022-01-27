import { useParams } from 'react-router-dom';

export type CoinProps = {};

interface Params {
  coinId: string;
}
function Coin({}: CoinProps) {
  const { coinId } = useParams<Params>();

  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
