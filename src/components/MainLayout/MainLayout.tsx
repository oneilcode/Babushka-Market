import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import type { IItem } from '../Item/Item';

export const MainLayout = () => {
   const [orders, setOrders] = useState<IItem[]>([])
    const addToOrder = (item: IItem) => {
      const isAlreadyAdded = orders.filter(order => order.id === item.id).length > 0
  
      if (!isAlreadyAdded) {
        setOrders([...orders, item])
        toast.success(`Товар ${item.name} добавлен в корзину`);
      } else {
        toast.warning("Этот товар уже добавлен");
      }  
    }
  
    const deleteOrder = (item: IItem) => {   
        setOrders(orders.filter(order => order.id !== item.id))   
      }
      
  return (
        <div className="wrapper">
            <ToastContainer />
            <Header  orders={orders} onDelete={deleteOrder} />
            <Outlet context={{ addToOrder }} />
            <Footer/>
        </div>   
  );
};
