import React, { useState } from "react";
import { Link } from "react-router-dom"
import swal from "sweetalert";
const Home = () => {
    const [name, setName] = useState("")
    const nameRegex = /^.{6,}$/
    const CallMe = () => {
        if (!nameRegex.test(name)){
            swal("Name must be at least Six Characters")
        }
        else{
            localStorage.setItem("name",name)
        }
    }
    return (
        <div className="home_container">
            <center className="home_inner_container">
                <h1 className="quiz_heading">Quiz</h1>
                <input placeholder="Enter your Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                {name !== "" && nameRegex.test(name)?
                    <button className="start_btn"> <Link className="link" to="/quiz">Start Quiz</Link></button>
                    :
                    <button onClick={CallMe} className="start_btn">Start Quiz</button>
                }
            </center>
        </div>
    )
}
export default Home