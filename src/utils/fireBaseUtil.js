import { auth, db, storage } from "./fireBaseInit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  setDoc,
  doc,
  getDocs,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

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
        coins: 100,
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

export function loginUser(email, password, setData) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // setCookie("email", email, { path: "/" });
      // console.log("Tin din di din")``;
      // window.location.href = "http://www.w3schools.com";
      localStorage.setItem("user", userCredential.user.uid);
      setData(userCredential.user.uid);
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
}
export async function getProducts(user, category) {
  const productsRef = collection(db, "products");
  console.log(category);
  const q = query(
    productsRef,
    category === "all" ? null : where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);
  let products = [];
  querySnapshot.docs.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
}

export async function uploadImage(images) {
  let imageUrls = [];

  await images.map((file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          imageUrls.push(url);
        });
      }
    );
  });

  return imageUrls;
}

export async function addProduct(data) {
  const newImages = await uploadImage(data.images);

  data.images = newImages;
  console.log(data);

  const docRef = await addDoc(collection(db, "products"), data);

  console.log("Document written with ID: ", docRef.id);

  // Reduce coins

  const userRef = doc(db, "users", data.userId);
  const docSnap = await getDoc(userRef);

  let coins = docSnap.get("coins");

  console.log(coins);
  await updateDoc(doc(db, "users", data.userId), {
    coins: coins - 30,
  });
}
