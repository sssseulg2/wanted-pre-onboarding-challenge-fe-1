import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Todos from "../components/Todos.js";
import Todo from "../components/Todo.js";
import styled from "styled-components";
import CreateTodo from "../components/CreateTodo.js";

function TodoList() {
    const {id} = useParams();
    const navigate = useNavigate();
    function RightComponent() {
        switch(id) {
            case "0": 
                return <TodoDefault />;
            case "create":
                return <CreateTodo />;
            default:
                return <Todo id={id} />;
        }
    }
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/");
    }, [navigate])
    
    return(
        <Container>
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
export default TodoList