

function Cart() {
  return (
   <>
    <div>
        {/* BreadCrumb sart */}
        <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-12">
                <nav className="breadcrumb bg-white p-3 mb-3">
                    <a href="#" className="breadcrumb-item nav-link aa">Home</a>
                    <a href="#" className="breadcrumb-item nav-link aa">Shop</a> 
                    <span className="breadcrumb-item active">Shopping Cart</span>
                </nav>
            </div>
        </div>
    </div>
    {/* shopping cart  start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8 mb-5 table-responsive">
                <table className="table table-borderless text-center mb-0 table-hover">
                    <thead className="table-dark align-middle">
                        <tr className="bg-dark">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <tr >
                            <td className="align-middle">
                                <img style={{width: '50px'}} src="image/product-1.jpg" alt=""/>
                                Product Name
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text"
                                        className="form-control form-control-sm bg-light border-0 text-center"
                                        value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <td className="align-middle">
                                <img style={{width: '50px'}} src="image/product-2.jpg" alt=""/>
                                Product Name
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text"
                                        className="form-control form-control-sm bg-light border-0 text-center"
                                        value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <td className="align-middle">
                                <img style={{width: '50px'}} src="image/product-3.jpg" alt=""/>
                                Product Name
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text"
                                        className="form-control form-control-sm bg-light border-0 text-center"
                                        value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <td className="align-middle">
                                <img style={{width: '50px'}} src="image/product-4.jpg" alt=""/>
                                Product Name
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text"
                                        className="form-control form-control-sm bg-light border-0 text-center"
                                        value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <td className="align-middle">
                                <img style={{width: '50px'}} src="image/product-5.jpg" alt=""/>
                                Product Name
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text"
                                        className="form-control form-control-sm bg-light border-0 text-center"
                                        value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-warning btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">$150</td>
                            <td className="align-middle">
                                <button className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <form action="" className="mb-3">
                    <div className="input-group">
                        <input type="text" placeholder="Coupon Code" className="form-control rounded-0 py-2"/>
                        <span className="input-group-append">
                            <button type="button" className="btn btn-warning rounded-0 py-2">Apply Coupon</button>
                        </span>
                    </div>
                </form>
                <h5 className="text-uppercase text-secondary">Cart summary
                    <span><hr/></span>
                </h5>
                <div className="bg-white p-5 mb-3">
                    <div className="border-bottom">
                        <div className="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>$150</h6>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <h6>Shipping</h6>
                            <h6>$10</h6>
                        </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mt-3 mb-4">
                        <h5>Total</h5>
                        <h5>$160</h5>
                      </div>
                     <div className="text-center">
                        <button className="btn w-100 my-3 py-3 rounded-0 font-weight-bold btn-warning"> Proceed To Cheakout</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
   </>
  )
}

export default Cart