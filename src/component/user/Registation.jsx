

function Registation() {
  return (
    <>
     <section id="login" className="my-5">
        <div className="container">
            <div className="row">
                {/* <!-- Column-1 --> */}
                <div className="col-lg-6">
                    <img className="w-100" src="/image/model.webp" alt="College Students Image-2"
                        height="100%"/>
                </div>
                {/* <!-- End Column-1 --> */}

                {/* <!-- Column-2 --> */}
                <div className="col-lg-6 bglogin p-4">
                    <form>
                        {/* <!-- logo --> */}
                        <center>
                            <img className="mb-4 rounded-circle" src="/image/fashion-logo-design.jpg" alt="Sign Up Image" width="20%" height="20%"/>
                        </center>

                        {/* <!-- Heading (Register Here) --> */}
                        <h1 className="mb-5 text-center">Register Here</h1>

                        {/* <!-- User Name --> */}
                        <div className="row mb-4">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">User Name</div>
                            <div className="col-lg-10">
                                <input className="form-control text-capitalize" type="text" placeholder="Enter your name" required/>
                            </div>
                        </div>

                        {/* <!-- Email --> */}
                        <div className="row mb-3">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Email</div>
                            <div className="col-lg-10">
                                <input className="form-control" type="email" placeholder="name@example.com" required/>
                            </div>
                        </div>

                        {/* <!-- Password --> */}
                        <div className="row mb-4">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Password</div>
                            <div className="col-lg-10">
                                <input className="form-control" type="password" required/>
                            </div>
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div className="row mb-4">
                            <div className="col-lg-3 text-center bg-secondary rounded text-light fw-light my-auto p-2">Confirm Password</div>
                            <div className="col-lg-9">
                                <input className="form-control" type="password" required/>
                            </div>
                        </div>

                        {/* <!-- Choose File --> */}
                        <div className="row mb-5">
                            <div className="col-lg-9 my-auto text-uppercase fw-light text-end">No file chosen</div>
                            <div className="col-lg-3 my-auto text-uppercase fw-light text-end">
                                <button className="btn btn-secondary fw-light">Choose File</button>
                            </div>
                        </div>

                        {/* <!-- Button (Login) --> */}
                        <center>
                            <button className="btn btn-primary mb-5 btn-lg">Register</button>
                        </center>
                        
                    </form>
                </div>
                {/* <!-- End Column-2 --> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Registation