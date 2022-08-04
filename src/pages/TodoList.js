import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Todos from "../components/Todos.js";
import Todo from "../components/Todo.js";
import styled from "styled-components";

function TodoList() {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/");
    }, [navigate])

    return(
        <Container>
            {/* 목록 */}
            <Todos />
            {
                id !== "0" && <Todo id={id}/>
            }
        </Container>
    )
}

const Container = styled.div`
max-height: 70vh;
height: 70vh;
display: flex;
justify-content: space-between;
margin: 5vh 5vw;
`
export default TodoList