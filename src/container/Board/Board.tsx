import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';
import ToDoBoard from '../../components/ToDoBoard';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export interface IToDoState {
  [key: string]: string[];
}

export const toDoAtomState = atom<IToDoState>({
  key: 'toDoAtom',
  default: {
    to_do: ['a', 'b'],
    doing: ['c', 'd', 'e'],
    done: ['f'],
  },
});

function Board() {
  const [toDos, setToDos] = useRecoilState(toDoAtomState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination?.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <ToDoBoard key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default Board;
