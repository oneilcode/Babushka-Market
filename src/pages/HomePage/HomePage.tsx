import  { useEffect, useState } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { ItemsWrapper } from '../../components/ItemsWrapper/ItemsWrapper';
import { ShowFullItem } from '../../components/ShowFullItem/ShowFullItem';
import { useOutletContext } from 'react-router-dom';
import styles from './HomePage.module.css';
import { items } from '../../assets/data';
import type { IItem } from '../../components/Item/Item';

interface OutletContext {
  addToOrder: (item: IItem) => void;
}

export const HomePage = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("Все")
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [fullItem, setFullItem] = useState<IItem | null>(null)
  
    const { addToOrder } = useOutletContext<OutletContext>();

    const filteredItems = selectedCategory === "Все" 
    ? items
    : items.filter(item => item.category === selectedCategory);
  
    const fetchCategories = () => {
      const categories = [...new Set(items.map(item => item.category))]
        setCategories(["Все", ...categories])    
    }
  
    useEffect(() => {
      fetchCategories()
    }, [])

    const onClickShowModal = (item: IItem) => {  
      setFullItem(item) 
      setModalOpen(!isModalOpen)  
    }
  
    useEffect(() => {
      const body = document.body;
      
      if (isModalOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto'; 
      }
    
      return () => {
        body.style.overflow = 'auto'; 
      };
    }, [isModalOpen]);

  return (
    <>
        <div className={styles.presentation}></div>
        <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        <ItemsWrapper items={filteredItems}  addToOrder={addToOrder} onClickShowModal={onClickShowModal} />
        {isModalOpen && fullItem && <ShowFullItem item={fullItem} addToOrder={addToOrder} onClickShowModal={() => setModalOpen(!isModalOpen)}/>}
    </>
  );
};
