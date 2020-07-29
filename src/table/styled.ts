import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;

  width: 100%;
  
  thead {
    background-color: black;
    color: white;
    
    th {
      border-right-color: white;
      border-left-color: white;
    }
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
