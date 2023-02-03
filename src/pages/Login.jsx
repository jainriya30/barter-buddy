import React from "react";
import "./css/login.css";
import { useState } from "react";
import { createUser, loginUser } from "../utils/fireBaseUtil";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const { setUserData } = useContext(UserContext);

  const handleCreate = () => createUser(email, password);

  const [signClass, setSign] = useState(false);

  const handleSign = () => setSign(!signClass);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }

  //  async function loginUser(event){
  //   event.preventDefault();
  //   console.log("Email:"+email+" Password:"+password)

  //   signInWithEmailAndPassword(auth,email,password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // setCookie('email', email, { path: '/' });

  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  // const response = await fetch('http://192.168.34.35:4000/login', {
  // 		method: 'POST',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 		body: JSON.stringify({
  // 			email,
  // 			password,
  // 		}),
  // 	})

  // 	const data = await response.json()
  //   console.log(data)
  // 	if (data.user) {
  // 		localStorage.setItem('token', data.user)
  // 		alert('Login successful')
  // 		window.location.href = '/dashboard'
  // 	} else {
  // 		alert('Please check your username and password')
  // 	}
  //  }

  return (
    <div className={signClass ? "cont s--signup" : "cont"}>
      <div className="form sign-in">
        <form className="sign-in-form" onSubmit={loginUser} />
        <h2>Welcome</h2>
        <label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <input
          type="Submit"
          className="submit submit-signin"
          onClick={() => loginUser(email, password, setUserData)}
        />
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already has an account, just sign in.</h3>
            <h3></h3>
          </div>
          <div className="img__btn" onClick={handleSign}>
            <button className="m--up" onClick={handleSign}>
              Sign Up
            </button>
            <button className="m--in" onClick={handleSign}>
              Sign In
            </button>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create your Account</h2>
          <label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label>
            <input
              value={phoneno}
              onChange={(e) => setNumber(e.target.value)}
              type="tel"
              placeholder="Phone Number"
            />
          </label>
          <label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              required
            />
          </label>
          <label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <button type="button" className="submit" onClick={getLocation}>
            Get Location
          </button>

          <input
            type="Submit"
            className="submit submit-signin"
            onClick={() =>
              createUser(
                name,
                email,
                password,
                phoneno,
                address,
                {
                  lat,
                  lng,
                },
                setUserData
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
