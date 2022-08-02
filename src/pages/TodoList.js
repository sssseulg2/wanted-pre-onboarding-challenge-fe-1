import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Todos from "../components/Todos.js";
import Todo from "../components/Todo.js";
import * as c from "../styles/common.js";

function TodoList() {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/");
    }, [navigate])

    return(
        <c.Container>
            <c.Title>Todo</c.Title>
            {/* 목록 */}
            <Todos />
            {
                id !== 0 && <Todo id={id}/>
            }
        </c.Container>
    )
}
export default TodoList