import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <h1 className="logintittle">Signin</h1>
      <form action="" className="loginform">
        <input type="text" placeholder="Enter Email" />
        <input type="passwod" name="password" placeholder="password " />
        <button>Login </button>
      </form>
    </div>
  )
}

export default Login