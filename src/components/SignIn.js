import { useState } from "react";
import * as s from "../styles/AuthStyle.js"
import * as c from "../styles/common.js"



function SignIn() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    function isVaildEmail(e) {
        return /\S+@\S+\.\S+/.test(e);
    }
    function isValidPassword(pw) {
        return pw.length >= 8
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
        !isVaildEmail(e.target.value) ? setEmailError("email을 정확하게 입력해주세요.") : setEmailError(null)

    }
    const handleChange2 = (e) => {
        setPassword(e.target.value);
        !isValidPassword(e.target.value) ? setPasswordError("8자이상 입력해주세요.") : setPasswordError(null)
    }
    return(
        <c.Container>
            <c.Title>로그인</c.Title>
            <s.StyledForm>
                <s.StyledInput placeholder="email" onChange={handleChange} value={email}></s.StyledInput>
                {emailError && <div style={{color: '#ff160c', fontSize: "0.7rem"}}>{emailError}</div>}
                <s.StyledInput type="password" placeholder="password" onChange={handleChange2} value={password}></s.StyledInput>
                {passwordError && <div style={{color: '#ff160c', fontSize: "0.7rem"}}>{passwordError}</div>}
                {
                    (function() {
                        if(email && !emailError && password && !passwordError) {
                            return <s.StyledSubmit type="submit" value="로그인"></s.StyledSubmit>
                        }
                        else {
                            return <s.StyledDisabledSubmit value="로그인" disabled='disabled' ></s.StyledDisabledSubmit>
                        }
                    })()
                }
            </s.StyledForm>
            <s.StyledLink to='/auth' state={{tab:0}}> 회원가입 &gt; </s.StyledLink>

        </c.Container>  
        
    )
}
export default SignIn