import React from 'react'
import "./Produit.scss"
import {images} from "../../autres/data";
const Produits = () => {
  return (
    <div className='sous-conteneur-produit'>
      <span className="titre">Les meilleurs Offres </span>
      <h2 className="sous-titre">Residences les plus populaire</h2>
      <div className="conteneur-slide">
        <div className="suivi-slide">
          <div className="carte-article">
            <img src={images.home4} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Tsabeng</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>rize de Sana</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Nguedia</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home6} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence laure</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home7} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Domga</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home8} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Fokou</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home3} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Dongmo</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
        </div>
          <div className="suivi-slide">
          <div className="carte-article">
            <img src={images.home4} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Ngoufack</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Tene</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Saffoo</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home6} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Metango</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home7} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Chris</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home8} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Residence Glory</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home3} alt=''/>
            <div className="details">
              <span className="prix">
                <span>$</span> 1000
              </span>
              <h4 className='nom'>Darius Palace</h4>
              <p className="description">Un magnifique et spacieux appartement pour vous et votre famille</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produits
