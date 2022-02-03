import styled from 'styled-components';
import TimeConverter from '../components/TimeConverter';
import Board from '../container/Board';
import ToDoList from '../container/ToDoList';

export type PortfolioProps = {};

function Portfolio({}: PortfolioProps) {
  return (
    <div>
      <h1>Your Portfolio is here</h1>
      <ToDoList />
      <TimeConverter />
      <Board />
    </div>
  );
}

export default Portfolio;
