import React, {useState, useEffect, createContext} from 'react';
export const DataContext = createContext();

export const DataProvider = (props) =>{

    const [data, setData] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


useEffect(()=> {
    loadData();
}, []);

const loadData = async () => {
    await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA412445")
    .then(response => response.json())
    .then(recievedData => 
        setData (recievedData)
        );
}
const addCart = (id) =>{
    const check = cart.every(item =>{
        return item.id !== id;

    })
    if(check){
        const allData = data.results.filter(item => {
            return item.id === id
        })
        allData[0].cantidad = 1
        setCart([...cart, ...allData])
    } else{
        alert("El producto se añadió al carrito")
    }
}


useEffect(()=>{
    const dataCart = JSON.parse(localStorage.getItem('dataCart')
    )
    if(dataCart){
        setCart(dataCart)
    }
    
}, [])


useEffect(()=>{
    localStorage.setItem('dataCart', JSON.stringify(cart))
},[cart])


useEffect(() =>{
    const getTotal = () =>{
        console.log(cart)
        const total = cart.reduce((prev, item) =>{
            return prev + (parseInt(item.price) * item.quantity)
        },0)
        setTotal(total)
        
    }
    getTotal()
    
},[cart])





const value = {
    data : [data],
    menu: [menu, setMenu],
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal]

  }




return (
    <DataContext.Provider value = {value}>
        {props.children}
    </DataContext.Provider>
)}

