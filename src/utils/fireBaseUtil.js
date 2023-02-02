import auth from './fireBaseInit'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";


export function createUser(email,password){

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // setCookie("email", email, { path: "/" });
        console.log("Tin din di din")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}



export function loginUser(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setCookie("email", email, { path: "/" });
        console.log("Tin din di din")
        // window.location.href = "http://www.w3schools.com";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}