import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore";
import './Addpost.css'
import {auth} from '../../../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth"
import { db, upload } from '../../../firebase/firebase';
import { useAuth, } from '../../Contexts/AuthContext';
// import { value } from "../../Contexts/AuthContext"

const AddPost = () => {

  const [Bname, setBname] = useState("")
  const [Bcategory, setBCategory] = useState("")
  const [city, setCity] = useState("")
  const [image, setImage] = useState(null)
  const [goal, setGoal] = useState("")
  const [profit, setProfit] = useState("")
  const [sales, setSales] = useState("")
  const [cashFlow, setCashFlow] = useState("")
  const [aqCost, setAqCost] = useState("")
  const [background, setBackground] = useState("")
  const [photoURL, setPhotoURL] = useState("")

  const currentUser = useAuth();
  const [loading, setLoading] = useState(false)
  

  // const [userData, setUserData] = useState({
  //   Bname: {value.Bname},
  //   Bcategory: {value.Bcategoty},
  //   city: "",
  //   image: "",
  //   goal: "",
  //   profit: "",
  //   sales: "",
  //   cash_flow: "",
  //   aq_cost: "",
  //   background: ""

  // const [currentUser, setCurrentUser] = useState()
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (currentUser?.photoURL){
      setPhotoURL(currentUser.photoURL)
    }
  }, [currentUser, photoURL])

  useEffect(() => {
      const unsubscribe = onAuthStateChanged( auth, (user => {
          // console.log(user.email);
          // setCurrentUser(user)
          setLoading(false)
        
          
      }))
      return unsubscribe()
  }, [])
  
  // console.log(currentUser.email)


  const submit = async (e) => {
    // get agents
    e.preventDefault();

     await addDoc(collection(db, "posts"), {
      // user: currentUser.email,
      Bname: Bname,
      Bcategory: Bcategory,
      city: city,
      // image: image,
      goal: goal,
      profit: profit,
      sales: sales,
      cashFlow: cashFlow,
      aqCost: aqCost,
      background: background
    });
  }

  const imageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }

  }

  const handleUpload = () => {
    upload(image, currentUser, setLoading)
  }

  // console.log(currentUser.email);

  return (
    <div className='post'>
      <h2> Start Your Campaign </h2>
      <div className='container'>
        <div className='cards'>
          <div className='card-1'>
            <h3><strong> 1.</strong> Get Started </h3>
            <p> Start by providing basic information about your business.</p>

            <h3><strong> 2.</strong> Business stats </h3>
            <p> Fill in more details about your business to prove its value.</p>

            <h3><strong> 3.</strong> Background </h3>
            <p> Leave a personal description about your business. </p>

          </div>
          
          <div className='card-2'>
            <form className='form'>
              <label> Business Name</label>
              <input 
                type="text"
                placeholder = " Enter the business name here"
                value={Bname}
                onChange= {(e) => setBname(e.target.value)}
                />

              <label> Business category</label>
              <select name='Category'
                value={Bcategory}
                onChange= {(e) => setBCategory(e.target.value)}
                 >
                <option value='Technology'> Tech </option>
                <option value='Sales'> Sales</option>
                <option value='Agriculture'> Agriculture</option>
                <option value='Manufacturing'> Manufacturing</option>
              </select>

              <label> City </label>
              <input type="text" placeholder = "City located" value={city} onChange= {(e) => setCity(e.target.value)}/>

              <label> Photo </label>
              <div className='upload'>
                <input type="file" placeholder = "upload a photo" onChange= {imageChange}/>
                <button disabled = {loading || !image} onClick={handleUpload}>upload</button>
                <img src={photoURL} alt=''/>
              </div>

              <h3> deeper business statistics </h3>

              <label> Funds Required </label>
              <input type="number" placeholder = "amount you are looking to raise" value={goal} onChange= {(e) => setGoal(e.target.value)}/>

              <label> Net Monthly Profit </label>
              <input type="number" placeholder = "Monthly Profit" value={profit}  onChange= {(e) => setProfit(e.target.value)}/>

              <label> Monthly Sales </label>
              <input type="number" placeholder = "Monthly sales" value={sales}  onChange= {(e) => setSales(e.target.value)}/>

              <label> Cash Flow </label>
              <input type="number" placeholder = "Cash flow" value={cashFlow}  onChange= {(e) => setCashFlow(e.target.value)}/>

              <label> Acquisition Cost </label>
              <input type="number" placeholder = "acquisition cost" value={aqCost} onChange= {(e) => setAqCost(e.target.value)}/>

              <h3> Background </h3>
              <label> Business Background </label>
              <textarea type="text" placeholder = "provide a brief background about your business" value= {background} onChange= {(e) => setBackground(e.target.value)}/> 

              <button onClick={submit}> Submit </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost