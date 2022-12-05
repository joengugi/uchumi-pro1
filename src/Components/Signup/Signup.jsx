// import { FirebaseError } from 'firebase/app'
// import * as firebase from 'firebase';
import { Button, Input, Modal } from '@mui/material'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useNavigate } from "react-router-dom"
import {
    auth,
    signInWithGoogle,
    signIn,
    db,
    storage
} from "../../firebase/firebase"
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import "./Signup.css"
import { CameraIcon } from '@heroicons/react/outline';
import { CameraswitchOutlined } from '@mui/icons-material'


const Signup = () => {
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user,loading] = useAuthState(auth);
    const [openInvestor, setOpenInvestor] = useState(false);
    const [openEntrepreneur, setOpenEntrepreneur] = useState(false);
    const history = useNavigate();

    const filePickerRef= useRef(null);
  const [ selectedFile, setSelectedFile]= useState(null);
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
    
    const signup_inv=async(event)=>{
        event.preventDefault();
    
        try {
          const res = await createUserWithEmailAndPassword(auth , email, password)
          await updateProfile(auth.currentUser, {displayName:name});
          const user = res.user;
          const docRef=await addDoc(collection(db, "investors"), {
            uid: user.uid,
           username: name,
            authProvider: "local",
           email,
    
    
            
          })
          const imageRef = ref(storage,`users/${docRef.id}/image`);
          await uploadString(imageRef,selectedFile,"data_url").then(
            async snapshot =>{
              const photoURL= await getDownloadURL(imageRef);
                await updateDoc(doc(db,'users',docRef.id),{
    
    
            //   await updateDoc(doc,'posts',docRef.id),{
        profilepic:photoURL
              })
            }
          )
    
    
    
    
          
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
          setOpenEntrepreneur(false);
          setName("");
          setPassword("");
          setEmail("");
          setSelectedFile(null);
      };

      const signup_ent=async(event)=>{
        event.preventDefault();
    
        try {
          const res = await createUserWithEmailAndPassword(auth , email, password)
          await updateProfile(auth.currentUser, {displayName:name});
          const user = res.user;
          const docRef=await addDoc(collection(db, "entrepreneur"), {
            uid: user.uid,
           username: name,
            authProvider: "local",
           email,
    
    
            
          })
          const imageRef = ref(storage,`users/${docRef.id}/image`);
          await uploadString(imageRef,selectedFile,"data_url").then(
            async snapshot =>{
              const photoURL= await getDownloadURL(imageRef);
                await updateDoc(doc(db,'users',docRef.id),{
    
    
            //   await updateDoc(doc,'posts',docRef.id),{
        profilepic:photoURL
              })
            }
          )
    
    
    
    
          
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
          setOpenEntrepreneur(false);
          setName("");
          setPassword("");
          setEmail("");
          setSelectedFile(null);
      };

      const addImageToPost = (e)=> {
        const reader= new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload=(readerEvent) =>{
            setSelectedFile(readerEvent.target.result);
        };
    
    };
  return (
    <div className='layout'>
        <div className = "innerLayout">
            <div className="form">

                <Button className='signup-btn' onClick={()=> setOpenInvestor(true)}>Investor</Button>
                <Button className='signup-btn' onClick={()=> setOpenEntrepreneur(true)}>Entrepreneur</Button>

            <Modal
     className='signup-modal'
  open={openInvestor}
  onClose={()=> setOpenInvestor(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
   <form  className='signup-form'>
 <center> 
    <p>Sign In</p>
   </center>

   <div>
      {selectedFile? (
                        <img src={selectedFile}
                        className="prof_image "
                        onClick={() => setSelectedFile(null)}
                        alt=""/>

                    ):(
                    <div
                    onClick={()=> filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full
                    bg-red-100 cursor-pointer">
                        <CameraswitchOutlined
                        placeholder="profile pic"
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"/>

                    </div>
                    )}
      </div>
      <div>
                                <input
                                ref={filePickerRef}
                                type="file"
                                hidden
                                onChange={addImageToPost}
                                className="modal_trigger"
                                />
                            </div>

   
   <Input
                        type="text"
                        className='reg-textbox'
                        placeholder='Full name'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />

                    <Input
                        type="email"
                        className='reg-textbox'
                        placeholder='Email address'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        className='reg-textbox'
                        placeholder='Password'
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
   <Button className='signup-btn' type="submit" onClick={signup_inv}>signin</Button>
   <Button className='google' type="submit" onClick={signInWithGoogle}>Google</Button>
</form>

  
  </Modal>

    <Modal
        className='signup-modal'
        open={openEntrepreneur}
        onClose={()=> setOpenEntrepreneur(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <form  className='signup-form'>
            <center>
                <p>Sign In</p>
            </center>
            <div>
      {selectedFile? (
                        <img src={selectedFile}
                        className="prof_image"
                        onClick={() => setSelectedFile(null)}
                        alt=""/>

                    ):(
                    <div
                    onClick={()=> filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full
                    bg-red-100 cursor-pointer">
                        <CameraswitchOutlined
                        placeholder="profile pic"
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"/>

                    </div>
                    )}
      </div>
      <div>
                                <input
                                ref={filePickerRef}
                                type="file"
                                hidden
                                onChange={addImageToPost}
                                className="modal_trigger"
                                />
                            </div>

            <Input
                        type="text"
                        className='reg-textbox'
                        placeholder='Full name'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />

                    <Input
                        type="email"
                        className='reg-textbox'
                        placeholder='Email address'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        className='reg-textbox'
                        placeholder='Password'
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
            <Button className='signup-btn' type="submit" onClick={signup_ent}>signin</Button>
            <Button className='google' type="submit" onClick={signInWithGoogle}>Google</Button>
        </form>
    </Modal>


{/* 
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
                </form>*/}
            </div> 
         </div>
    </div>
  )
}

export default Signup