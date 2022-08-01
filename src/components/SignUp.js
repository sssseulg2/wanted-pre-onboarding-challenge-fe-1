import * as s from "../styles/AuthStyle.js"
import * as c from "../styles/common.js"


function SignUp() {
    return(
        <c.Container>
            <c.Title>회원가입</c.Title>
            <s.StyledForm>
                <s.StyledInput placeholder="email"></s.StyledInput>
                <s.StyledInput placeholder="password"></s.StyledInput>
                <s.StyledSubmit type="submit" value="회원가입"></s.StyledSubmit>
            </s.StyledForm>
            <s.StyledLink to='/auth' state={{tab:0}}> 로그인 > </s.StyledLink>

        </c.Container>        
    )
}
export default SignUp