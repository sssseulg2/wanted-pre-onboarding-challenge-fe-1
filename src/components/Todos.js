import axios from "axios"
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";


function Todos() {
    const token = localStorage.getItem("token")
    let [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const getTodos = async() => {
            setError("");
            setLoading(true);
            try {
                const result = await axios.get("http://localhost:8080/todos", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTodos([...result.data.data]);
                setLoading(false);

            } catch(error) {
                console.log(error.response);
                setError(error);
            }
        }
        getTodos();
    }, [])
    return(
        <TodosContainer>
            { loading && <Loader><FadeLoader color="#1C3879" width={3} height={10} margin={2} /></Loader>}
            <div>{error && '투두 리스트를 받아들일 수 없습니다.'}</div>
            <div>
                {
                    todos && todos.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>

        </TodosContainer>
    )
}
const TodosContainer = styled.div`
width: 50%;
`
const Loader = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export default Todos