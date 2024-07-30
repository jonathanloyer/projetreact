import './App.css';
import Logo from './components/logo';
import Menu from './components/menu';
import Titre from './components/titre';

function App() {
  // ici le code de fonctionnement
  // du composant App
  //...
  // const tabNoms = [
  //   "Jonathan",
  //   "Mickael",
  //   "Jean",
  // ]
  // let authorName = "";
  // let i = 0;
  // let id = window.setInterval(() => {
  //   authorName = tabNoms[i];
  //   i++;
  //   if (i > 2) {
  //     i = 0;
  //   }
  //   console.log(authorName)
  // }, 1000)
  // console.log(id)
  // dans le return ci-dessous
  // l'ossature du composant App
  // en html
  return (
    <div id="app-container" className="App">
      <header className='container-struct'>
        <div className='menu-rep'>
          <div className='left-menu'>
            <Logo />
            <Titre />
          </div>
            <Menu />
        </div>

      </header>
    </div>

  );
}

export default App;
