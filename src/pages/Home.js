import { Link } from "react-router-dom"
import styled from "styled-components"
import * as c from "../styles/common.js"


const ButtonWrap = styled.div`
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15vh;
`
const StyledButton = styled.button`
width: 10vw;
height: 2.3rem;
margin-bottom: 3vh;
`

function Home() {
    return (
        <c.Container>
            <c.Title>TODO LIST</c.Title>
            <ButtonWrap>
                <Link to='/auth' state={{tab:0}}><StyledButton>로그인</StyledButton></Link>
                <Link to='/auth' state={{tab:1}}><StyledButton>회원가입</StyledButton></Link>
            </ButtonWrap>
        </c.Container>
    )
}
export default Home