import styled from 'styled-components';

export type CoinsProps = {};

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins({}: CoinsProps) {
  return <Title>Coins</Title>;
}

export default Coins;
