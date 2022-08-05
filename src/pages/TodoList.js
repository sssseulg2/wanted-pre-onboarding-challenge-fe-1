import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Todos from "../components/Todos.js";
import Todo from "../components/Todo.js";
import styled from "styled-components";
import CreateTodo from "../components/CreateTodo.js";
import UpdateTodo from "../components/UpdateTodo.js";

function TodoList() {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    function RightComponent() {
        switch(id) {
            case "0": 
                return <TodoDefault />;
            case "create":
                return <CreateTodo />;
            case "update":
                return <UpdateTodo id={location.state.id} />;
            default:
                return <Todo id={id} />;
        }
    }
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/");
    })
    
    return(
        <Container>
            <ButtonLogout onClick={() => {
                localStorage.removeItem("token");
                navigate("/")
                }}>로그아웃</ButtonLogout>
            {/* 목록 */}
            <Todos />
            <Line />
            <RightComponent />
        </Container>
    )
}

const Container = styled.div`
max-height: 70vh;
height: 70vh;
display: flex;
justify-content: space-between;
margin: 5vh 4vw;
`
const Line = styled.div`
border-left: 3px dotted #aaa;
`
const TodoDefault = styled.div`
width: 50%;
margin-left: 2vw;
`
const ButtonLogout = styled.button`
position: fixed;
top: 4vh;
right: 16vw;
width: 6vw;
height: 4vh;
`
export default TodoList