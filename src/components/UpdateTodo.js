import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"

import {Cancel} from "@styled-icons/material-sharp/Cancel";

function UpdateTodo({id}) {
    console.log(id);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/todos/${id}`, {
                title: title,
                content: content
                },
                { headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log(res)
            console.log(res.data.data)
            navigate(`/todolist/${id}`);
          } catch (error) {
            alert(error.response);
          }
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    useEffect(() => {
        const getTodos = async() => {
            try { 
                const result = await axios.get(`http://localhost:8080/todos/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTitle([...result.data.data.title].join(""));
                setContent([...result.data.data.content].join(""));

            } catch(error) {
                alert("메모를 불러올 수 없습니다.")
            }
        }
        getTodos();
    }, [])
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputTitle placeholder="제목" value={title} onChange={(e)=>{handleChangeTitle(e)}}/>
                <StyledInputContent placeholder="내용" value={content} onChange={(e) => {handleChangeContent(e)}}/>
                <StyledButton type="submit">수정</StyledButton>
            </StyledForm>
            <StyledCancelButton onClick={() => {navigate(`/todolist/${id}`)}}/>
        </>
    )
}

const StyledForm = styled.form`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
padding-left: 2vw;
`
const StyledInputTitle = styled.input`
width: 100%;
border: none;
background: none;
margin-bottom: 2vh;
font-size: 2rem;
font-weight: bold;
font-family: 'NEXON Lv2 Gothic';

&:focus {
    outline: none;
}
`
const StyledInputContent = styled.textarea`
resize: none;
width: 100%;
height: 55vh;
border: none;
background: none;
font-size: 1rem;
font-family: 'NEXON Lv2 Gothic';

&:focus {
    outline: none;
}
`
const StyledCancelButton = styled(Cancel)`
position: absolute;
right: 19vw;
width: 2.2rem;
color: #FF8B8B;
`
const StyledButton = styled.button`
width: 5vw;
height: 3vh;
`
export default UpdateTodo