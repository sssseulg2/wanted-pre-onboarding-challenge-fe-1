import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

function Auth() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.getItem("token") && navigate("/todolist/0");
    }, [navigate])
    const location = useLocation();
    let tab = location.state === null ? 0 : location.state.tab;

    return(
        <>
        {tab === 0 ? <SignIn /> : <SignUp />}
        </>
    )
}
export default Auth