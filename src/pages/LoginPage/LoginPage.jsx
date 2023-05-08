import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux"
import { loginSuccess } from "../../redux/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("")
  const dispatch = useDispatch()
  
  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
        email,
        password
    }
    axios
        .post('http://localhost:3001/login', user)
        .then(res => {
          setLogin(res.data.user.login)
          dispatch(loginSuccess(res.data.user))
        })
        .catch(err => console.log(err.data))
  }

  return (
    <div className="form-wrapper">
      <p style={{textAlign : 'center', fontSize : "22px"}}>{login}</p>
      <form onSubmit={handleLogin}>
        <h1>Логин</h1>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Логин
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
