import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../common/logoo.svg";
import { connect, useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../control/Actions";


export const NavBar = () => {
  const [cartList,setCartList]=useState(false)
  const getData = useSelector((state) => state.CartReducer.carts)
  console.log(getData)
  const dispatch=useDispatch()

  const removeitem = (id) => {
    dispatch(REMOVE(id));
  }
  ////total price
  const [price, setPrice] = useState(0);

  const totals = () => {
    let price = 0;
    getData.map((e) => {
      price = parseFloat(e.price) * e.qty + price;
    })
    setPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);

    window.addEventListener("scroll", () => {
        const header = this.document.querySelector(".header");
        header.classList.toggle("active",this.window.ScrollY > 100)
    })
  return (
    <>
      <header className="header">
        <div class="containerew">
          <div className="container">
            <div class="toggle"></div>
            <div class="left">
              <a href="/">
                <img src={logo} alt="logo" width={125} />
              </a>
            </div>
            <div className="center">
              <ul class="menu">
                <li className="active">
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>

            <div className="right">
              <div className="right_search">
                <input type="text" placeholder="Search Products..." />
                <i className="fa fa-search"></i>
              </div>
            </div>
            <div className="icons">
              <i class="fa-solid fa-circle-user"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
            <button className="cart" onClick={() => setCartList(!cartList)}>
              <i></i>
              My Cart ({getData.length})
            </button>
            <div className={cartList ? "showcart" : "hidecart"}>
              {getData.length ? (
                <section className="details">
                  <div className="details-title">
                    <h3>Photo</h3>
                    <p>Product name</p>
                  </div>
                  {getData.map((ite) => {
                    return (
                      <div className="cupper">
                        <Link to={`/cart/${ite.id}`} className="immg">
                          <img src={ite.cover} alt="" width={70} height={70} />
                        </Link>
                        <div className="meddd">
                          <p>{ite.title}</p>
                          <p>{`price: $${ite.price}`}</p>
                          <p>{`Quantity:${ite.qty}`}</p>
                        </div>
                        <div className="buthold">
                          <button onClick={() => removeitem(ite.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    <h2>{`Total : $${price}`}</h2>
                  </div>
                </section>
              ) : (
                <div className="details">
                  <div className="details-title">
                    <p>Your Cart is Empty</p>
                    <i className="fa fa-shop"></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    amount:state.amount,
  }
}
connect(mapStateToProps)(NavBar)