import styled from 'styled-components';
import ToDoList from '../container/ToDoList';

export type PortfolioProps = {};

function Portfolio({}: PortfolioProps) {
  return (
    <div>
      <h1>Your Portfolio is here</h1>
      <ToDoList />
    </div>
  );
}

export default Portfolio;
