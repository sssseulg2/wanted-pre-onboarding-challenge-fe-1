import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

function CreateTodo() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(title, content)
        try {
            const res = await axios.post("http://localhost:8080/todos", {
                title,
                content
                },
                { headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log(res)
            console.log(res.data.data)
            navigate('/todolist/0');
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
    return (
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputTitle placeholder="제목" value={title} onChange={(e)=>{handleChangeTitle(e)}}/>
                <StyledInputContent placeholder="내용" value={content} onChange={(e) => {handleChangeContent(e)}}/>
                <StyledSubmit type="submit">추가</StyledSubmit>
            </StyledForm>
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
font-size: 1.5rem;
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
const StyledSubmit = styled.button`
width: 5vw;
height: 3vh;
`
export default CreateTodo