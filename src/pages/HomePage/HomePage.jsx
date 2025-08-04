import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Categories } from '../../components/Categories/Categories';
import { ItemsWrapper } from '../../components/ItemsWrapper/ItemsWrapper';
import { ShowFullItem } from '../../components/ShowFullItem/ShowFullItem';
import { useOutletContext } from 'react-router-dom';
import styles from './HomePage.module.css';

const items = [
    {
      "id": "2",
      "name": "Футболка",
      "description": "Классическая Футболка с вышитым логотипом в ретро-стиле. Удобная посадка, качественный хлопок, мягкий козырек. Идеально дополняет образ любителя винтажа и городских прогулок.",
      "img": "https://images.unsplash.com/photo-1656695230389-01185e6fbff8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 100,
      "category": "одежда",
    },
    {
      "id": "4",
      "name": "Магнитофон",
      "description": "Легендарная советская зеркалка 1960-х в рабочем состоянии. Металлический корпус, характерный ход затвора, фирменный логотип. Полный комплект с объективом «Гелиос-44-2»",
      "img": "https://plus.unsplash.com/premium_photo-1681433389174-b08efd10579e?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 200,
      "category": "музыка",
    },
    {
      "id": "5",
      "name": "Фотоапарат",
      "description": "Легендарная советская зеркалка 1960-х в рабочем состоянии. Металлический корпус, характерный ход затвора, фирменный логотип. Полный комплект с объективом «Гелиос-44-2»",
      "img": "https://images.unsplash.com/photo-1594954358052-3238c595867f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 2000,
      "category": "техника",
    },
    {
      "id": "6",
      "name": "Утка",
      "description": "Ручная работа по традициям народных мастеров. Тёплая древесина, плавные формы, добротная покраска в стиле ретро-игрушек 50-70х годов.",
      "img": "https://images.unsplash.com/photo-1600876997455-4cafa4c419d1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 2000,
      "category": "игрушки",
    },
    {
      "id": "7",
      "name": "Робот",
      "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
      "img": "https://images.unsplash.com/photo-1703668929798-67cab2e41f6b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 2000,
      "category": "игрушки",
    },
    {
      "id": "8",
      "name": "Машина",
      "description": "Точная копия советской литой машинки 60-80-х годов. Металлический корпус, подвижные элементы, винтажная окраска. Каждая царапинка — часть истории.",
      "img": "https://images.unsplash.com/photo-1686773565608-0c45fc7ed94f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price" : 2000,
      "category": "игрушки",
    },
    {
        "id": "9",
        "name": "Бейсболка",
        "description": "Классическая бейсболка с вышитым логотипом в ретро-стиле. Удобная посадка, качественный хлопок, мягкий козырек. Идеально дополняет образ любителя винтажа и городских прогулок.",
        "img": "https://images.unsplash.com/photo-1611891032550-cda7788e5048?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price" : 2000,
        "category": "одежда",
      },
  ]

export const HomePage = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Все")
    const [isModalOpen, setModalOpen] = useState(false)
    const [fillItem, setFullItem] = useState({})
  
    const { addToOrder } = useOutletContext();

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

    const onClickShowModal = (item) => {  
      setFullItem(item) 
      setModalOpen(!isModalOpen)  
    }
  
    useEffect(() => {
      const body = document.body;
      
      if (isModalOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto'; // или ''
      }
    
      return () => {
        body.style.overflow = 'auto'; // Очистка при размонтировании
      };
    }, [isModalOpen]);


  return (
    <>
        <div className={styles.presentation}></div>
        <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        <ItemsWrapper items={filteredItems}  addToOrder={addToOrder} onClickShowModal={onClickShowModal} />

        {isModalOpen && <ShowFullItem item={fillItem} addToOrder={addToOrder} onClickShowModal={onClickShowModal}/>}
    </>
  );
};
