import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import authService from '../../services/auth'

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("")

  const register = (e) => {
    e.preventDefault()
    const newUser = {
        email,
        password,
        login
    }
    authService
        .register(newUser)
        .then(res => console.log(res.data))
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={register}>
        <h1>Регистрация</h1>
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
        <TextField
          label="Login"
          variant="outlined"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
