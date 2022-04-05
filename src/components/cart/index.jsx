import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const togglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carts show" : "cart";
  const show2 = menu ? "cart show" : "carts";

  const sub = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };

  const add = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("remover producto?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.quantity = 1;
          cart.splice(index, 1);
        }
      });
    }
    setCart([...cart]);
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart__close" onClick={togglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h1>Tu carrito</h1>

        <div className="cart__center">
          {cart.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              Carrito vacio
            </h2>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <img src={item.thumbnail} alt="logo" width="50" />
                  <div>
                    <h3>{item.title}</h3>
                    <p className="price">$ {item.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => add(item.id)}
                    ></box-icon>
                    <p className="quantity">{item.quantity}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => sub(item.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => removeProduct(item.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="cart__footer">
          <h3>Total: $ {total} </h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
