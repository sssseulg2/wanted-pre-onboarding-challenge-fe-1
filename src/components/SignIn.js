import styled from "styled-components"

const Container = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
font-size: 2.3rem;
color: black;
margin-bottom: 15vh;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledInput = styled.input`
width: 20vw;
height: 2.3rem;
margin-top: 2vh;
padding-left: 1rem;
border: none;
border-radius: 5px;
font-size: 1rem;
font-family: 'twayair';
&:focus {
    outline: none;
}
`
const StyledSubmit = styled(StyledInput)`
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
function SignIn() {
    return(
        <Container>
            <Title>로그인</Title>
            <StyledForm>
                <StyledInput placeholder="id"></StyledInput>
                <StyledInput placeholder="password"></StyledInput>
                <StyledSubmit type="submit" value="로그인"></StyledSubmit>
            </StyledForm>
        </Container>
        
    )
}
export default SignIn