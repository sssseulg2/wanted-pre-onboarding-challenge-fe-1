import * as s from "../styles/AuthStyle.js"
import * as c from "../styles/common.js"



function SignIn() {
    return(
        <c.Container>
            <c.Title>로그인</c.Title>
            <s.StyledForm>
                <s.StyledInput placeholder="email"></s.StyledInput>
                <s.StyledInput placeholder="password"></s.StyledInput>
                <s.StyledSubmit type="submit" value="로그인"></s.StyledSubmit>
            </s.StyledForm>
            <s.StyledLink to='/auth' state={{tab:1}}> 회원가입 > </s.StyledLink>
        </c.Container>
        
    )
}
export default SignIn