// import { FirebaseError } from 'firebase/app'
// import * as firebase from 'firebase';
import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useNavigate } from "react-router-dom"
import {
    auth,
    signInWithGoogle,
    signIn,
    db,
} from "../../firebase/firebase"
import "./Signup.css"

const Signup = () => {
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user,loading] = useAuthState(auth);
    const history = useNavigate();
    // const register = async (e) => {
    //     e.preventDefault();

    //     if(!name) alert("Please enter name")
    //     signIn(name, email, password);

        // else if(role === "Entrepreneur"){
        //    return(
        //     await addDoc(collection(db, "users")), {
        //         role: role,
        //         name: name,
        //         email: email,
        //         password: password
        //     }
        //    ) 
        // }
    // }
     // return(
                    //     await addDoc(collection(db, "investors")), {
                    //         role: investor,
                    //         name: name,
                    //         email: email,
                    //         password: password
                    //     }
                    // )
     
    useEffect(() => {
        if(loading) return;
        if(user && role === "entrepreneur") {history("/dashboard")} else if (user && role === "investor") {history("/investor-dash")};
    }, [user,history, role, loading]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(name, email, password)
            .then((user) => {
                if (role === "investor") {
                   addDoc(collection(db, "investors")).add({
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        password: user.password
                    }) 
                    .then(() => { console.log("user has been registered as:", role);})
                    .catch((error) => {console.error(error)});
                } else if(role === "entrepreneur") {
                    addDoc(collection(db, "users")).add({
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        password: user.password
                    })
                    .then(() => { console.log("user has been registered as:", role);})
                    .catch((error) => {console.error(error)});
                }
                user.updateProfile({role: role})
                
               
            })
            .catch((error) => {console.error(error)})
    }

  return (
    <div className='layout'>
        <div className = "innerLayout">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className='dropdown'>
                        <label> Select account type </label>
                        <select value={role} onChange= {(e) => setRole(e.target.value)}>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="investor">Investor</option>
                        </select>   
                    </div>
                    <input
                        type="text"
                        className='reg-textbox'
                        placeholder='Full name'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        className='reg-textbox'
                        placeholder='Email address'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className='reg-textbox'
                        placeholder='Password'
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />

                    <button className='register-btn' type='submit'> Register </button>
                    <button className='register-google' onClick={signInWithGoogle}> Register with Google </button>

                    <div>
                        Already have an account? <Link to = "/log-in"> Login </Link>
                    </div>
                </form>
            </div>
         </div>
    </div>
  )
}

export default Signup