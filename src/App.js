import './App.css';
import burger from './icons/burger.svg'
import triagles from './icons/triagles.svg'
import squars from './icons/squars.svg'

function App() {
  return (
    <>
    <nav id="header">
        <div class="header_container">
            <input type="checkbox" name="" id="burger"/>
            <label class="menu" for="burger">
            <img src={burger} alt='burger'/> 
            </label>
            <div class="logo_container">
                <h1>HPC</h1>
            </div>
            <ul class="navigation">
                <a href="#"><li class="item">Home</li></a>
                <a href="#"><li class="item">Lists</li></a>
                <a href="#"><li class="item">Affiliat</li></a>
                <a href="#"><li class="item">Contact</li></a>
            </ul>
        </div>
    </nav>
    <h1 id="hero">Horizon PC</h1>
    <img src={triagles} id="triangles" class="illustr"/>
    <img src={squars} id="squars" class="illustr"/>
    
    </>
  );
}

export default App;
