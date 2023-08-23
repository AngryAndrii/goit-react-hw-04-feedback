import styled from 'styled-components';

export const PercentageP = styled.p`
  color: ${changePercColor};
  background-color: #bcc5d4;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 20px;
  text-align: center;
  padding: 10px;
`;

function changePercColor({ $posperc }) {
  if ($posperc >= 70) {
    return 'green';
  } else if ($posperc >= 40) {
    return 'yellow';
  }
  return 'red';
}
