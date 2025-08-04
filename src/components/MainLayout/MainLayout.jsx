import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';

export const MainLayout = () => {
   const [orders, setOrders] = useState([])
    const addToOrder = (item) => {
      const isAlreadyAdded = orders.filter(order => order.id === item.id).length > 0
  
      if (!isAlreadyAdded) {
        setOrders([...orders, item])
      } else {
        alert("Этот товар уже добавлен!")
      }  
    }
  
    const deleteOrder = (item) => {   
        setOrders(orders.filter(order => order.id !== item.id))   
      }
      
  return (
        <div className="wrapper">
            <Header  orders={orders} onDelete={deleteOrder}/>
            <Outlet context={{ addToOrder }} />
            <Footer/>
        </div>   
  );
};
