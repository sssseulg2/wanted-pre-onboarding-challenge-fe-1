import { useState } from "react"
import { useLocation } from "react-router-dom"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

function Auth() {
    const location = useLocation();
    let tab = location.state === null ? 0 : location.state.tab;
    console.log(location, tab)

    return(
        <>
        {tab === 0 ? <SignIn /> : <SignUp />}
        </>
        
    )
}
export default Auth