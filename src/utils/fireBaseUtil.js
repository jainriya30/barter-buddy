import { auth, db } from "./fireBaseInit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { setDoc, doc, getDocs, collection } from "firebase/firestore";

export function createUser(
  name,
  email,
  password,
  phoneno,
  address,
  coordinates,
  setUser
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setDoc(doc(db, "users", user.uid), {
        name,
        email,
        phoneno,
        address,
        lat: coordinates.lat,
        long: coordinates.lng,
      })
        .then(() => {
          console.log("success");
          localStorage.setItem("user", user.uid);
          setUser({ uid: user.uid });
        })
        .catch((error) => {
          console.log("failed: " + error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // setCookie("email", email, { path: "/" });
      // console.log("Tin din di din")``;
      // window.location.href = "http://www.w3schools.com";
      localStorage.setItem("user", userCredential.user.uid);
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
}

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  let products = [];
  querySnapshot.docs.forEach((doc) => {
    products.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });

  return products;
}
