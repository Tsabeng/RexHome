import React, { useState } from 'react'
import "./NosValeurs.scss";
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa6';
import { images } from '../../autres/data';

const NosValeurs = () => {
    const [activeItem, setActiveItem] = useState("un")

    const updateActiveItem = (valeur) => {
        setActiveItem(valeur);
    };
    return (
        <div className='sous-conteneur-valeurs'>
            <div className="grid">
                <div className="gauche">
                    <div className="conteneur-image">
                        <img src={images.home1} alt='' />
                    </div>
                </div>
                <div className="droite">
                    <span className="titre">Nos valeurs</span>
                    <h2 className="sous-titre">Ce a quoi nous croyons</h2>
                    <p className="desc-valeurs">Nous garantissons un niveau de qualite inegale,un magnifique et spacieux appartement pour vous et votre famille.</p>
                    <div className="liste-valeurs">
                        <div className={activeItem === "un" ? "item active" : "item"} onClick={() => updateActiveItem("un")}>
                            <div className="head">
                                <IoShieldCheckmarkSharp className='valeur-icon' />
                                <span>Qualite</span>
                                <FaChevronDown className='valeur-icon' />
                            </div>
                            <p className="description">Nous garantissons un niveau de qualite inegale, un magnifique et spacieux appartement pour vous et votre famille.</p>

                        </div>
                        <div className={activeItem === "deux" ? "item active" : "item"} onClick={() => updateActiveItem("deux")}>
                            <div className="head">
                                <MdVisibility className='valeur-icon' />
                                <span>Visibilite</span>
                                <FaChevronDown className='valeur-icon' />
                            </div>
                            <p className="description">Nous garantissons un niveau de qualite inegale, un magnifique et spacieux appartement pour vous et votre famille.</p>

                        </div>
                        <div className={activeItem === "trois" ? "item active" : "item"} onClick={() => updateActiveItem("trois")}>
                            <div className="head">
                                <FaCarSide className='valeur-icon' />
                                <span>Satisfaction</span>
                                <FaChevronDown className='valeur-icon' />
                            </div>
                            <p className="description">Nous garantissons un niveau de qualite inegale, un magnifique et spacieux appartement pour vous et votre famille.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosValeurs
