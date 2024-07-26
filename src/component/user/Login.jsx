import { Link } from "react-router-dom"
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, loginUser } from '../../redux/actions/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'


function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const alert = useAlert()
  const {isAuthenticated, error} = useSelector((state)=>state.auth)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = (n) => {
    n.preventDefault();
    console.log( email, password)

    dispatch(loginUser(email,password))
}

useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  if (isAuthenticated) {
    navigate("/");
  }
}, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
   <>
   {/* <!-- Login --> */}
    <section id="login" className="my-5">
        <div className="container">
            <div className="row">
                {/* <!-- Column-1 --> */}
                <div className="col-lg-6">
                    <img className="w-100" src="/image/pexels-photo-1055691.jpeg" alt="College Students Image-1"
                        height="100%"/>
                </div>
                {/* <!-- End Column-1 --> */}

                {/* <!-- Column-2 --> */}
                <div className="col-lg-6 bglogin p-4">
                    <form  onSubmit={submitHandler}>
                        {/* <!-- logo --> */}
                        <center>
                            <img className="mb-4 rounded-circle" src="/image/download.jpg" alt="logo" width="20%" height="20%"/> 
                        </center>

                        {/* <!-- Heading (Login) --> */}
                        <h1 className="mb-5 text-center">Login</h1>

                        {/* <!-- Email --> */}
                        <div className="row mb-3">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Email</div>
                            <div className="col-lg-10">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" placeholder="name@example.com" required></input>
                            </div>
                        </div>

                        {/* <!-- Password --> */}
                        <div className="row mb-5">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Password</div>
                            <div className="col-lg-10">
                                <input  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" required></input>
                            </div>
                        </div>

                        {/* <!-- Button (Login) --> */}
                        <center>
                            <button type="submit" className="btn btn-primary mb-5 btn-lg">Login</button>
                        </center>
                        
                        {/* <!-- Register Now --> */}
                        <center>
                            <p className="text-uppercase fw-light">Dont have an account? &nbsp;<Link  to="/register">Register Now</Link></p>

                        </center>
                    </form>
                </div>
                {/* <!-- End Column-2 --> */}
            </div>
        </div>f
    </section>
    {/* <!-- End Login --> */}
    
   
   </>
  )
}

export default Login
