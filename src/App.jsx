import { useEffect, useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { ItemsWrapper } from "./components/ItemsWrapper/ItemsWrapper"
import { Categories } from "./components/Categories/Categories"

const items = [
  {
    "id": "2",
    "name": "Футболка",
    "description": "Всегда мечтала о крутой тачке",
    "img": "https://images.unsplash.com/photo-1656695230389-01185e6fbff8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 100,
    "category": "одежда",
  },
  {
    "id": "4",
    "name": "Магнитофон",
    "description": "Мечтаю посетить Токио, увидеть цветущую сакуру, попробовать настоящие суши в маленьком семейном ресторанчике, пожить в традиционном рёкане и искупаться в онсэне с видом на гору Фудзи. Хочу прогуляться по улицам Киото, посетить древние храмы и поучаствовать в чайной церемонии. Также мечтаю прокатиться на сверхскоростном поезде Синкансэн и купить японский нож на рыбном рынке Цукидзи.",
    "img": "https://plus.unsplash.com/premium_photo-1681433389174-b08efd10579e?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 200,
    "category": "музыка",
  },
  {
    "id": "5",
    "name": "Фотоапарат",
    "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
    "img": "https://images.unsplash.com/photo-1594954358052-3238c595867f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 2000,
    "category": "техника",
  },
  {
    "id": "6",
    "name": "Робот",
    "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
    "img": "https://images.unsplash.com/photo-1600876997455-4cafa4c419d1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 2000,
    "category": "игрушки",
  },
  {
    "id": "7",
    "name": "Робот",
    "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
    "img": "https://images.unsplash.com/photo-1600876997455-4cafa4c419d1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 2000,
    "category": "игрушки",
  },
  {
    "id": "8",
    "name": "Робот",
    "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
    "img": "https://images.unsplash.com/photo-1600876997455-4cafa4c419d1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price" : 2000,
    "category": "игрушки",
  },
]

function App() {
  const [orders, setOrders] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Все")

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


  const addToOrder = (item) => {
    const isAlreadyAdded = orders.filter(order => order.id === item.id).length > 0

    if (!isAlreadyAdded) {
      setOrders([...orders, item])
      // alert("Товар добавлен в корзину")
    } else {
      alert("Этот товар уже добавлен!")
    }  
  }

  const deleteOrder = (item) => {   
    setOrders(orders.filter(order => order.id !== item.id))   
  }

  return (
    <div className="wrapper">
     <Header orders={orders} onDelete={deleteOrder}/>
     <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
     <ItemsWrapper items={filteredItems}  addToOrder={addToOrder}/>
     <Footer />
    </div>
  )
}

export default App
