import './mainfooter.css'
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom"
import { Container } from "../components/Container" 

export const MainFooter = () => {
    return (
        <div className="line">
        <Container>
        <footer className="footer">
  <div className="footer__addr max-w-[220px]">

    <Link to="/"><img src={logo} style={{maxHeight: 109, margin: "0 auto"}} /></Link>
    <h1 className="text-3xl font-medium mb-2">Rent in Hand</h1>
   <p className="text-gray-400">Сервис с безопасными сделками аренды вещей</p>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">О нас</h2>

      <ul className="nav__ul">
        <li className="mb-2">
          <a href="https://rentinhand.ru/company" target="_blank">Контакты</a>
        </li>

        <li>
          <a href="https://rentinhand.ru/#rec340017028" target="_blank">Чем мы занимаемся</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Помощь</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li className="text-gray-400">
            <a href="mailto:mail@mail.com" target="_blank"><span className="text-primary-main">mail@mail.com</span></a> - тех.поддержка работающая 24 на 7
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <a href="https://rentinhand.ru/docs/terms_of_use" target="_blank"><h2 className="text-primary-main">Соглашение оферты</h2></a> 
    </li>
  </ul>
</footer>
        </Container>
</div>
    )
}
