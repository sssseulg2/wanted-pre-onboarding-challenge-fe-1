import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";

import {AddCircle} from "@styled-icons/material/AddCircle";


function Todos() {
    const token = localStorage.getItem("token")
    let [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    function openTodo(id){
        navigate(`/todolist/${id}`);
    }
    function createTodo() {
        navigate('/todolist/create');
    }

    useEffect(() => {
        const getTodos = async() => {
            setError("");
            // setLoading(true);
            try {
                const result = await axios.get("http://localhost:8080/todos", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                // console.log(result.data.data)
                setTodos([...result.data.data]);
                // setLoading(false);

            } catch(error) {
                console.log(error.response);
                setError(error);
            }
        }
        getTodos();
    })
    return(
        <TodosContainer>
            {/* { loading && <Loader><FadeLoader color="#1C3879" width={3} height={10} margin={2} /></Loader>} */}
            {error && <div>'투두 리스트를 받아들일 수 없습니다.'</div>}
            <TodosWrap>
                {
                    todos && todos.map(item => (
                        <div key={item.id} onClick={() => {openTodo(item.id);}}>
                            <TodoTitle>{item.title}</TodoTitle> 
                            <TodoUpdated>{item.updatedAt.substr(0,4)}년 {item.updatedAt.substr(5,2)}월 {item.updatedAt.substr(5,2)}일 </TodoUpdated>
                            <Line />
                        </div>
                        
                    ))
                }
                </TodosWrap>
        <AddIcon onClick={() => {createTodo();}}/>
        </TodosContainer>
    )
}
const TodosContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 2vw;
`
const TodosWrap = styled.div`
height: 100%;
overflow-y: scroll;
`
const Loader = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
const TodoTitle = styled.div`
font-size: 1.3rem;
`
const TodoUpdated = styled.div`
font-size: 1rem;
color: #aaa;
text-align: end;
`
const Line = styled.div`
border: 0.5px solid #aaaaaa;
margin: 0.5rem 0;
`
const AddIcon = styled(AddCircle)`
width: 2.2rem;
color: #1C3879;

`
export default Todos