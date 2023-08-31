import styled from 'styled-components';

export const BtnGood = styled.button`
  background-color: green;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 15px;
  &:hover {
    background-color: #006500;
  }
`;
export const BtnNeutral = styled.button`
  background-color: orange;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 15px;
  &:hover {
    background-color: #e7c207;
  }
`;
export const BtnBad = styled.button`
  background-color: red;
  border-radius: 10px;
  border: 1px solid black;
  &:hover {
    background-color: #820505;
  }
`;


export const StatisticList = styled.ul`
  width: 512px;
  background-color: #c3c3c3;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  padding:0;
`;