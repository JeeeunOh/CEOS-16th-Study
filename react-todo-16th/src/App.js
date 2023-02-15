import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import deleteImg from './img/delete.png';
import plusImg from './img/plus.png';
import firework from './img/firework.gif';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    background: #000000;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  width: 30rem;
  height: 52rem;
  border-radius: 20px;
  background: #000000;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  width: 25rem;
  height: 17rem;
  border-radius: 20px;
  background: #000000;
  border: 1px solid white;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background : transparent;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  line-height: 2rem;
`;

const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
`;

const TodoForm = styled.div`
  flex-direction: row;
  margin-bottom: 1rem;
`;

const TodoInput = styled.input`
  width: 15rem;
  height: 1.5rem;
  border-radius: 20px;
`;

const EnterButton = styled.img`
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
  margin-bottom: -0.8rem;
  cursor: pointer;
`;

const DeleteButton = styled.img`
  line-height: 0rem;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`;

const TodoText = styled.button`
  line-height: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

const Celebrate = styled.img`
  display: block;
  position: absolute;
  height: 30rem;
  width: 30rem;
`;

function App() {
  // input으로 받을 값
  const [text, setText] = useState('');
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  // 불꽃효과를 위해 유저가 투두리스트를 완료하면 true로 바꿔줌
  const [finish, setFinish] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onReset();
    }
  };

  const onReset = () => {
    if (!text.trim()) {
      alert('한 글자 이상 입력해주세요');
    } else {
      const todo = {
        id: Date.now(),
        text: text,
      };
      setDoingList(doingList.concat(todo));
      setText('');
    }
  };

  // listname에서 다른 리스트로 요소 이동
  const moveList = (listname, id, text) => {
    if (listname === doingList) {
      setFinish(true);
      setTimeout(() => {
        setFinish(false);
      }, 1000);
      plusList(doneList, id, text);
      removeList(doingList, id);
    } else if (listname === doneList) {
      plusList(doingList, id, text);
      removeList(doneList, id);
    }
  };

  // listname에 inputId를 id로 가지는 텍스트 추가
  const plusList = (listname, inputId, inputText) => {
    const todo = {
      id: inputId,
      text: inputText,
    };

    console.log(todo);

    if (listname === doingList) {
      setDoingList(doingList.concat(todo));
    } else if (listname === doneList) {
      setDoneList(doneList.concat(todo));
      console.log(doneList);
    }
  };

  // listname에서 해당 id 가지고 있는 리스트 찾아서 삭제
  const removeList = (listname, id) => {
    if (listname === doingList) {
      setDoingList(doingList.filter((list) => list.id !== id));
    } else if (listname === doneList) {
      const newDoneList = doneList.filter((list) => list.id !== id);
      setDoneList(newDoneList);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* finish가 true일 때만 불꽃놀이 효과 추가 */}
        {finish ? <Celebrate src={firework} /> : <></>}

        <Title> To-Do</Title>
        <TodoForm>
          <TodoInput onKeyPress={onKeyPress} onChange={onChange} value={text} />
          <EnterButton onClick={onReset} onChange={onChange} src={plusImg} />
        </TodoForm>

        <Title> Doing ( {doingList.length} )</Title>

        <SubContainer>
          {doingList.map((list) => (
            <RowContainer>
              {/* 텍스트 클릭하면 요소간 이동 가능 */}
              <TodoText onClick={() => moveList(doingList, list.id, list.text)}>
                {list.text}
              </TodoText>
              {/* 삭제 아이콘 클릭하면 요소 삭제 가능*/}
              <DeleteButton
                onClick={() => {
                  removeList(doingList, list.id);
                }}
                src={deleteImg}
              />
            </RowContainer>
          ))}
        </SubContainer>

        <Title> Done ( {doneList.length} )</Title>

        <SubContainer>
          {doneList.map((list) => (
            <RowContainer>
              <TodoText onClick={() => moveList(doneList, list.id, list.text)}>
                {list.text}
              </TodoText>
              <DeleteButton
                onClick={() => {
                  removeList(doneList, list.id);
                }}
                src={deleteImg}
              />
            </RowContainer>
          ))}
        </SubContainer>
      </Container>
    </>
  );
}

export default App;
