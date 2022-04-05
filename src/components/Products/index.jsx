import React, { useContext } from "react";
import { DataContext} from "../../context/DataProvider";

export const Booklist = () => {
  const value = useContext(DataContext);
  const [data] = value.data;
  const addCart = value.addCart;

  //console.log(data)

  if (data.results) {
    return (
      <div className="products">
        {data.results.map((items, index) => { console.log(items)
          return (
            <div id={items.id} key={items.id} className="product">
              <a href="#">
                <div className="product__img">
                  <img src={items.thumbnail} alt={items.title} />
                </div>
              </a>
              <div className="product__footer">
                <div className="title-container"> 
                <h1>{items.title}</h1> </div>
                <p className="price">$ {items.price}</p>
              </div>
              <button className="btn" onClick={() => addCart(items.id)}>
                Añadir al carrito
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (<div className="LoadingData">cargando productos...</div>);
  }
};
