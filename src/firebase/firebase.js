import {initializeApp } from "firebase/app"
import firebase from 'firebase/compat/app'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth"
import { 
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,

} from "firebase/firestore"
import { getStorage, uploadBytes, ref } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBHvoj8dEbLU4n8betfNyxhHnp87bJdaQk",
    authDomain: "businesshub-dev.firebaseapp.com",
    databaseURL: "https://businesshub-dev-default-rtdb.firebaseio.com",
    projectId: "businesshub-dev",
    storageBucket: "businesshub-dev.appspot.com",
    messagingSenderId: "510731116024",
    appId: "1:510731116024:web:ca70bcf942527d67200a0d"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProv = new GoogleAuthProvider();
const storage = getStorage();

const signInWithGoogle = async () =>{
    try {
        const res = await signInWithPopup(auth, googleProv);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.id));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch(err) {
        console.error(err);
        alert(err.message)
    }
}

const signIn = async (name,email, password ) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // await addDoc(collection(db, "users"), {
        //     uid: user.uid,
        //     name,
        //     authProvider: "email",
        //     email,
        // })
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const resetPassword = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        alert("Link sent to your email. Check inbox for further instructions.")
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


export async function upload(file, currentUser,setLoading){
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true)
    const snap = await uploadBytes(fileRef, file);

    setLoading(false);
    alert("photo uploaded!")
}

export {
    auth,
    db,
    signIn,
    signInWithGoogle,
    login,
    resetPassword,
    logout,
}

export default firebase;