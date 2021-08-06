import React, { useState } from 'react';
import farmerWoman from '../resources/farmerWoman.png';
import farmerMan from '../resources/farmerMan.png';
import farmerGirl from '../resources/farmerGirl.png';
import classes from './Opiniones.module.css';

const Opiniones = () => {
    const [testimonio, setTestimonio] = useState('farmerWoman');
    const [nombre, setNombre] = useState('farmerWomanName');
    const testimonios = {
        farmerManName: 'David Kirk Ginder. Propietario de la granja Bsnes.',
        farmerMan:
            'Llegué a Ecolegas después de haber trabajado en granjas durante unos años y estaba preparado para tener una experiencia de aprendizaje más centrada en la que se pudiera llenar los vacíos y prepararme para empezar mi propia granja. El programa de Ecolegas me dio el espacio para reconectar y revitalizar mi pasión por la agricultura sostenible y me dio la confianza y las herramientas para comenzar mi carrera como agricultor y propietario de una pequeña empresa. Esta experiencia también me puso en contacto con otros agricultores y con la comunidad regional que apoya la agricultura sostenible, lo que me ha proporcionado muchas oportunidades para perseguir mis objetivos agrícolas.',
        farmerWomanName: 'Ada Lovelace. Propietaria de la granja Somerville.',
        farmerWoman:
            'Cuando necesitábamos llevar nuestra granja al siguiente nivel, queríamos trabajar con personas que realmente conocieran el negocio de las granjas y la agricultura. Que se esforzara por conocerme a mí y las necesidades de mi granja. El equipo de Ecolegas sabe de agricultura, conoce las necesidades específicas de una agricultora y está ahí para ayudar en cada paso del camino. Soy una agricultora, una mujer, una madre orgullosa y recomiendo Ecolegas.',
        farmerGirlName: 'Fatma Mehdi Hassan. Propietaria de la granja Tinduf.',
        farmerGirl:
            'Al haber sido un agricultora de acogida durante tres temporadas, he visto de primera mano la diferencia que las prácticas suponen tanto para los agricultores principiantes como para la granja de acogida. La energía fresca y el entusiasmo que aportan a la granja es algo más que unas manos que ayudan; aportan una perspectiva fresca y una curiosidad que te ayuda a mirar a la granja y al sistema agrícola con nuevos ojos cada temporada. No hay ningún modelo educativo que conozca que sea más eficaz para hacer crecer a los agricultores que el que ha desarrollado Ecolegas, que deja a los graduados con un nivel de conocimientos, habilidades y experiencia que es fundamental para el éxito en el mundo de la agricultura. Lo que más me sorprende es el número de graduados que continúan con la agricultura como carrera. No hay un camino más rápido para pasar de estudiante interesado a agricultora capaz.',
    };
    function testimonioHandler(event) {
        setTestimonio(event.target.alt);
        setNombre(event.target.alt + 'Name');
    }
    return (
        <section>
            <div className={classes.imagenes}>
                <div>
                    <img
                        src={farmerWoman}
                        onClick={testimonioHandler}
                        alt="farmerWoman"
                        className={
                            testimonio === 'farmerWoman'
                                ? classes.imgActiva
                                : null
                        }
                    />
                </div>
                <div>
                    <img
                        src={farmerGirl}
                        onClick={testimonioHandler}
                        alt="farmerGirl"
                        className={
                            testimonio === 'farmerGirl'
                                ? classes.imgActiva
                                : null
                        }
                    />
                </div>
                <div>
                    <img
                        src={farmerMan}
                        onClick={testimonioHandler}
                        alt="farmerMan"
                        className={
                            testimonio === 'farmerMan'
                                ? classes.imgActiva
                                : null
                        }
                    />
                </div>
            </div>
            {
                <div className={classes.opinion}>
                    <div className={classes.nombre}>{testimonios[nombre]}</div>
                    {testimonios[testimonio]}
                </div>
            }
        </section>
    );
};

export default Opiniones;
