import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;

  button {
    background-color: white;
    border: none;
    font-size: 16px;
    color: black;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    transition: all 500ms ease-out;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-size: 18px;
  }
`;
