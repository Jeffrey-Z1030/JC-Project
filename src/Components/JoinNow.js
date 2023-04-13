import { useState } from "react"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import './join.css'


function JoinNow(){
    return (
			<div className='joincontainer'>
				<h1>Sign Up</h1>
				<form>
					<TextField id="filled-basic" label="First Name"></TextField>
					<TextField id="filled-basic" label="Last Name" sx={{marginTop:'1em'}}></TextField>
					<TextField id="filled-basic" label="Email" sx={{marginTop:'1em'}}></TextField>
					<TextField id="filled-basic" label="Password" sx={{marginTop:'1em'}}></TextField>
					<TextField id="filled-basic" label="Confirm Password" sx={{marginTop:'1em'}}></TextField>
					<Button variant="contained" sx={{marginTop:'1em'}}>Sign Up!</Button>
				</form>
			</div>
		);
}

export default JoinNow
