import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home.js';
import Auth from './pages/Auth.js';
import TodoList from './pages/TodoList.js';
import CreateTodo from './components/CreateTodo.js';

import GlobalStyle from './styles/GlobalStyle.js';
import GlobalFonts from './styles/font.js';

import './App.css';


function App() {
  return (
      <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Container>
        <Card>
        <Routes>
          <Route path='/' element={<Home id={0}/> } />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/todolist/:id' element={<TodoList/>} />
        </Routes>
        </Card>
      </Container>
      </BrowserRouter>
  );
}


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #EAE3D2;

`
const Card = styled.div`
width: 70vw;
height: 80vh;
/* background-color: #AFCBFF; */
background-color: #F9F5EB;
border-radius: 2rem;
box-shadow: 0.8rem 0.8rem 0.5rem grey;
font-family: 'NEXON Lv2 Gothic';
`

export default App;
