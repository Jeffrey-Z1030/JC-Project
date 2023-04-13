import { Button } from "@mui/material"
import './LandingPage.css'
import { useState } from "react"


function LandingPage(){

    const [password,setPassword] = useState('')

    const setTargetValue = (cb) => {
		return (event) => {
			cb(event.target.value);
		};
	};

    

    

    return(
<div className='container'>
    <div className='intro-container'>
        <h1 className='intro'>Welcome to your</h1>
        <h1 className='intro'>professional community</h1>
    </div>
    <form className="landingForm">
        <input placeholder="Email or phone number"/>
        <input onChange={setTargetValue(setPassword)} value={password} type='password' placeholder="Password"/>
        <a className='forgotPw' href="nothing now">Forgot password?</a>
        <Button className="landingButton" variant="contained">Sign In</Button>
    </form>
</div>
    )
}
export default LandingPage