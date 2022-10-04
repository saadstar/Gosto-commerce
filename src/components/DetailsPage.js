import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ADD, REMOVE_ITEM } from "../control/Actions";
import {REMOVE} from "../control/Actions"
export const DetailsPage = () => {
    const [data, setData] = useState([])
    const getData = useSelector((state) => state.CartReducer.carts);
    const { id } = useParams;
    const dispatch = useDispatch();
    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id = id
        });
        setData(compareData)
    }
    useEffect(() => {
        compare()
    }, [id]);
const history =useHistory()
    const increment = (e) => {
        dispatch(ADD(e))
    }
    const decrement = (e) => {
        dispatch(REMOVE(e))
    }
    const remove = (e) => {
        dispatch(REMOVE_ITEM(e));
        history.push("/")
    }
  return (
    <section>
      <div className="details">
        <h2 className="details-title">Product Details Page</h2>
        {getData.map((item) => {
          return (
            <div className="cupper" key={item.id}>
              <div className="details_img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details_text">
                <h1>{item.title}</h1>
                <div className="staricons copper">
                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>(1 customar review)</p>
                </div>
                <h4>{`$${item.price * item.qty}`}</h4>
                <p className="pp">{item.author}</p>
                <div className="copper">
                  <div className="space">
                    <button className="cupper">
                      <button className="incre" onClick={() => increment(item)}>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      ({item.qty})
                      <button
                        className="decre"
                        onClick={
                          item.qty < 1 ? remove(item.id) : () => decrement(item)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </button>
                  </div>
                  <div className="addto_cart">
                    <button>Add To Cart</button>
                  </div>
                </div>
                <div>
                  <h4 className="hh">Product Describtion</h4>
                  <p className="pp">
                    Designed by nanoStudio - I found several websites using it.
                    or other expression like present by? Appreciated for your
                    reading and replies.
                  </p>
                  <h4 className="hh">Product Details</h4>
                  <p className="pp">
                    Designed by nanoStudio - I found several websites using it.
                    or other expression like present by? Appreciated for your
                    reading and replies.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
