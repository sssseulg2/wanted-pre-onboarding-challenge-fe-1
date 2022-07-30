import styled from "styled-components"

const Title = styled.div`
font-size: 3rem;
color: white;
`
const ButtonWrap = styled.div`
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
`
const StyledButton = styled.button`
width: 10vw;
height: 2.3rem;
margin-bottom: 3vh;
background-color: #EEE;
border: none;
border-radius: 1rem;
font-size: 1.5rem;
font-family: 'twayair';
color: #495C83;
transform: scale(1);
&:hover{
    transform: scale(1.1);
    transition: all 0.5s;
}
`
const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin-top: 10vh;
`
function Home() {
    return (
        <Container>
            <Title>TODO LIST</Title>
            <ButtonWrap>
                <StyledButton>로그인</StyledButton>
                <StyledButton>회원가입</StyledButton>
            </ButtonWrap>
        </Container>
    )
}
export default Home