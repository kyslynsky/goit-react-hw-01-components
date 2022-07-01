import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  margin-top: 40px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #1976d2;
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: white;
  }

  &:nth-child(even) {
    background-color: #ebe8e8;
  }
`;

export const TableData = styled.td`
  padding: 2%;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.8vw;
  color: grey;

  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const TableHeading = styled.th`
  padding: 2%;
  font-weight: 500;
  font-size: 2vw;
`;
