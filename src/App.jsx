import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { ItemsWrapper } from "./components/ItemsWrapper/ItemsWrapper"

const items = [
  {
    "id": "2",
    "name": "Купить машину",
    "description": "Всегда мечтала о крутой тачке",
    "img": "https://s0.rbk.ru/v6_top_pics/media/img/6/19/756129720103196.jpg",
  },
  {
    "id": "4",
    "name": "Путешествие в Японию",
    "description": "Мечтаю посетить Токио, увидеть цветущую сакуру, попробовать настоящие суши в маленьком семейном ресторанчике, пожить в традиционном рёкане и искупаться в онсэне с видом на гору Фудзи. Хочу прогуляться по улицам Киото, посетить древние храмы и поучаствовать в чайной церемонии. Также мечтаю прокатиться на сверхскоростном поезде Синкансэн и купить японский нож на рыбном рынке Цукидзи.",
    "img": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    "id": "5",
    "name": "Научиться играть на пианино",
    "description": "Хочу освоить игру на фортепиано, чтобы исполнять классические произведения Бетховена и Шопена. Мечтаю сыграть 'Лунную сонату' и 'К Элизе' для своих друзей и семьи. Планирую заниматься с преподавателем два раза в неделю и ежедневно практиковаться хотя бы по 30 минут. Хочу через год уметь читать ноты с листа и импровизировать в джазовом стиле",
    "img": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",

  },
]
function App() {


  return (
    <div className="wrapper">
     <Header />
     <ItemsWrapper items={items} />
     <Footer />
    </div>
  )
}

export default App
