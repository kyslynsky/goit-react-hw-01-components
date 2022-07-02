import styled from 'styled-components';
import { getStatsCount } from 'components/App';

let statsQuantity = getStatsCount();

export const Section = styled.section`
  width: 40vw;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const Title = styled.h2`
  padding: 8%;
  text-align: center;
  font-weight: 500;
  font-size: 2.5vw;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / ${statsQuantity});
  padding: 2%;
  background-color: ${props => props.backgroundColor};

  &:first-child {
    border-radius: 0 0 0 5px;
  }

  &:last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const StatLabel = styled.span`
  font-size: 1.7vw;
`;

export const StatPercentage = styled.span`
  font-weight: 500;
  font-size: 2vw;
  line-height: 1.8;
`;
