import React, { useState } from 'react';
import imgEco from '../resources/ecologismo.png';
import imgInv from '../resources/investigacion.png';
import imgAse from '../resources/asesoramiento.png';
import Servicio from './Servicios/Servicio';
import Backdrop from './Servicios/Backdrop';
import classes from './NuestrosServ.module.css';

const NuestrosServ = () => {
    const [datos, setDatos] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const temas = {
        Ecologismo: `Dentro de los sistemas de producción, sostenibilidad y rentabilidad de las explotaciones, se desarrolla investigación y experimentación en el ámbito de la producción ecológica, buscando:\n- Mejorar las prácticas medioambientales.\n- Utilización de un elevado nivel de biodiversidad.\n- Preservación de los recursos naturales.\n- Aumento de la producción ecológica.\nDesde Ecolegas se está desarrollando experimentación y trasferencia de conocimientos en:\n- Gestión de la fertilidad del suelo y rotaciones.\n- Elección de especies y variedades adaptadas al entorno.\n- Técnicas de cultivo.\n- Estudios económicos de conversión de explotaciones convencionales a ecológicas.\n- Experimentación de cultivos ecológicos para uso ganadero.`,
        Investigacion:
            'Ecolegas, a través de sus cuatro unidades operativas: Cultivos In Vitro, Genotipado Vegetal, Fitopatología Vegetal y Bioinformática; aborda un control preciso de los sistemas biológicos vegetales para ofrecer alternativas a la industria agrícola, de forma que pueda responder al desafío de hacer frente a las necesidades de alimentar a las crecientes poblaciones de humanos y animales, de una forma más eficiente y sostenible en un entorno de cambio climático.\nCuenta con equipo humano multidisciplinar, con una demostrada experiencia tanto en los distintos campos de la genética y la biología vegetal, del fitomejoramiento, y de la agronomía; como en el mundo del emprendimiento, de la conceptualización y ejecución de proyectos de I+D+i, y del desarrollo de negocios internacionales.\nUn grupo de científicos y emprendedores, que trabajan para construir una agricultura más segura, sostenible y saludable; como un futuro más prometedor para el planeta.\nSu objetivo es ser laboratorio de referencia para el sector de la mejora vegetal, a través de la prestación de servicios de prebreeding, genotipado y análisis fitopatológico.',
        Asesoramiento: `Le ayudamos a optimizar su producción gracias a nuestro asesoramiento técnico agrícola:\n- Optimizar el uso de recursos escasos como el agua.\n- Asegurar una mayor rentabilidad de las explotaciones.\n- Optimizar el consumo energético.\n- Conseguir el máximo aprovechamiento de las infraestructuras y equipos hidráulicos.\n- Adaptar los cultivos a las condiciones del entorno, especialmente en zonas con mayor estrés hídrico, y a las tendencias para un consumo saludable y responsable.\nEn Ecolegas acompañamos y asesoramos a los empresarios y empresarias agrícolas para hacer frente a los retos del sector y mejorar la rentabilidad de sus explotaciones mediante una solución llaves en mano que engloba la mejora en los sistemas de cultivo y un uso más eficiente del agua y la energía.\nContamos con una amplia experiencia en el sector ofreciendo soluciones de alto valor añadido para una agricultura más competitiva, moderna y sostenible.`,
    };
    function openModalHandler(event) {
        setModalIsOpen(true);
        setDatos(temas[event.target.getAttribute('alt')]);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
        <>
            {modalIsOpen && (
                <Servicio onConfirm={closeModalHandler} datos={datos} />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
            <div
                className={classes.bloqueResp}
                alt="Ecologismo"
                onClick={openModalHandler}
            >
                <img
                    src={imgEco}
                    alt="Ecologismo"
                    className={classes.imgServ}
                />
                <p className={classes.lineaHor} alt="Ecologismo"></p>
                <h2 className={classes.titulo} alt="Ecologismo">
                    Ecologismo
                </h2>
                <div className={classes.parrafo}>
                    En Ecolegas apostamos por una agricultura respetuosa con el
                    medio ambiente, que nos permita dignificar el trabajo en el
                    campo y producir alimentos sanos y de calidad a precios
                    justos.
                </div>
            </div>
            <div
                className={classes.bloqueResp}
                alt="Investigacion"
                onClick={openModalHandler}
            >
                <img
                    src={imgInv}
                    alt="Investigacion"
                    className={classes.imgServ}
                />
                <p className={classes.lineaHor} alt="Investigacion"></p>
                <h2 className={classes.titulo} alt="Investigacion">
                    Investigación
                </h2>
                <div className={classes.parrafo}>
                    Grupo de trabajo destinado a la investigación de los
                    alimentos ecológicos.
                </div>
            </div>
            <div
                className={`${classes.bloqueResp} ${classes.centrado}`}
                alt="Asesoramiento"
                onClick={openModalHandler}
            >
                <img
                    src={imgAse}
                    alt="Asesoramiento"
                    className={classes.imgServ}
                />
                <p className={classes.lineaHor} alt="Asesoramiento"></p>
                <h2 className={classes.titulo} alt="Asesoramiento">
                    Asesoramiento
                </h2>
                <div className={classes.parrafo}>
                    Nuevas técnicas y variedades que permiten mejorar las
                    técnicas de producción y manipulación de los productos para
                    así asegurar la máxima calidad y seguridad alimentaria.
                </div>
            </div>
        </>
    );
};

export default NuestrosServ;
