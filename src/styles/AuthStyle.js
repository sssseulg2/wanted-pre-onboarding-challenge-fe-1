import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
margin-top: 5vh;
text-decoration: none;
color: black;
`
export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
export const StyledInput = styled.input`
width: 20vw;
height: 2.3rem;
margin-top: 2vh;
padding-left: 1rem;
border: none;
border-radius: 5px;
font-size: 0.9rem;
font-family: 'NEXON Lv2 Gothic';
&:focus {
    outline: none;
}
`
export const StyledSubmit = styled(StyledInput)`
width: 12vw !important;
margin-top: 4vh !important;
padding: 0 !important;
background-color: #607EAA;
color: #eee;
&:hover{
    background-color: #1C3879;
    transition: all 0.5s;
}
`
export const StyledDisabledSubmit = styled(StyledInput)`
width: 12vw !important;
margin-top: 4vh !important;
padding: 0 !important;
text-align: center;
background-color: #AAA;
color: #eee;
`