import React, { useEffect } from "react";
import "./Accueil.scss";
import { FaLocationDot } from "react-icons/fa6";
import { images } from "../../autres/data.js";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Accueil = () => {
  const countA = useMotionValue(0);
  const countB = useMotionValue(0);
  const countC = useMotionValue(0);
  const roundedA = useTransform(countA, Math.round);
  const roundedB = useTransform(countB, Math.round);
  const roundedC = useTransform(countC, Math.round);

  useEffect(() => {
    const animationA = animate(countA, 9000, { duration: 10 });
    const animationB = animate(countB, 3150, { duration: 10 });
    const animationC = animate(countC, 421, { duration: 10 });

    return animationA.stop, animationB.stop, animationC.stop;
  }, []);

  return (
    <div className="accueil-grid">
      <div className="info">
        <h1>Découvrez la résidence de vos rêves</h1>
        <p>
          Trouvez une résidence n'a jamais été un tel plaisir, naviguez au
          travers des meilleurs résidences du pays.
        </p>
        <div className="conteneur-recherche">
          <input type="text" />
          <FaLocationDot className="icon" />
          <span className="btn">Chercher</span>
        </div>
        <div className="achievements">
          <div className="item">
            <h3>
              <span>+</span>
              <motion.strong>{roundedA}</motion.strong>
            </h3>
            <span>Résidences</span>
          </div>
          <div className="item">
            <h3>
              <span>+</span>
              <motion.strong>{roundedB}</motion.strong>
            </h3>
            <span>Clients satisfaits</span>
          </div>
          <div className="item">
            <h3>
              <span>+</span>
              <motion.strong>{roundedC}</motion.strong>
            </h3>
            <span>Partenaires</span>
          </div>
        </div>
      </div>
      <div className="conteneur-image">
        <img src={images.home3} alt="" />
      </div>
    </div>
  );
};

export default Accueil;