import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components"
import {Delete} from '@styled-icons/material/Delete';
import {Edit} from '@styled-icons/material/Edit';
import { useNavigate } from "react-router-dom";

function Todo({id}) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [todo, setTodo] = useState({});
    const [error, setError] = useState("");
    const deleteTodo = async() => {
        try {
            await axios.delete(`http://localhost:8080/todos/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            navigate("/todolist/0");
          } catch (error) {
            alert(error.response);
          }
    }
    const editTodo = () => {
        navigate(`/todolist/update`, {state: {id: id}});
    }
    useEffect(() => {
        const getTodos = async() => {
            setError("");
            try { 
                const result = await axios.get(`http://localhost:8080/todos/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTodo({...result.data.data});

            } catch(error) {
                console.log(error.response);
                setError(error);
            }
        }
        getTodos();
    }, [])
    return(
        <TodoContainer>
            {error && <div> 메모를 불러올 수 없습니다. </div>}
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoContent>{todo.content}</TodoContent>
            <TodoButtonWrap>
                <EditIcon onClick={() => {editTodo();}}/>
                <DeleteIcon onClick={() => {deleteTodo();}}/>
            </TodoButtonWrap>
        </TodoContainer>

    )

}
const TodoContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 2vw;
`
const TodoTitle = styled.div`
margin-bottom: 2vh;
font-size: 2rem;
font-weight: bold;
`
const TodoContent = styled.div`
height: 100%;
`
const TodoButtonWrap = styled.div`
text-align: end;
`
const DeleteIcon = styled(Delete)`
width: 2.2rem;
margin-left: 3vh;
color: #1C3879;
`
const EditIcon = styled(Edit)`
width: 2.2rem;
color: #1C3879;

`
export default Todo