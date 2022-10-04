import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../control/Actions";
import { products } from "../../data/data";


export const Meduim = () => {
    const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState("");
const dispatch=useDispatch()

  const AddToCart = (e) => {
    dispatch(ADD(e));
  }
    const onOpenImg = (src)=>{
      setImage(src);
      setOpenImage(true);
      console.log(openImage);
    }
    const displayItems = products.map((item) => {
        return (
          <div key={item.id}>
              <div className="box">
                <div>
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className="contant">
                  <button onClick={()=>AddToCart(item)}>
                      <i class="fa fa-shop"></i>
                  </button>
                  <button >
                      <i class="fa fa-heart"></i>
                  </button>
                <button onClick={() =>onOpenImg(item.cover)}
                >
                      <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
                <div className="kold">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <h4>{`price: $${item.price}`}</h4>
                </div>
            </div>
        );
    })
    return (<section className="product">
        <div className="containe">
            <div className="heading">
            <h2>Ternding Products</h2>
                <p>Check the hottest designs of the week. These rising stars are worth your attention.</p>
            </div>
            <div className="med ">
                {displayItems}
            </div>
      </div>
      <div className={onOpenImg?"modelopen":"modleclose"}>
        <div className="onClick">
          <button className="buttoon" onClick={() => setOpenImage(false)}>
            <i className="fa fa-close"></i>
          </button>
          <img src={image} alt="" />
    </div>
      </div>
    </section>);
}; 
