
import './App.scss'
import Accueil from './components/Accueil/Accueil'
import Navbar from './components/Navbar/Navbar'
import Produits from './components/Produits/Produits'
import NosValeurs from './components/NosValeurs/NosValeurs'
import Contact from './components/Contact/Contact'
function App() {


  return (
    <>
      <div className='app'>
        <section className="containeur-accueil">
          <div className="accueil">
            <Navbar/>
            <Accueil/>
          </div>
        </section>
        <section className="conteneur-produits">
          <div className="produits"> 
          <Produits/>
          </div>
        </section>
        <section className="conteneur-valeurs">
          <div className="valeurs">
            <NosValeurs/>
          </div>
        </section>
        <section className="conteneur-contact">
          <div className="contact">
            <Contact/>
          </div>
        </section>
        <section className="conteneur-footer">
          
        </section>
      </div>
    </>
  )
}

export default App;
