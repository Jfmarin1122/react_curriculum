import React from "react";

function OtherStudies(props){
    return(
      <div className='information--otherStudies'>
        <h4 className = "title_studies"><b>{props.otherStudies}</b></h4>
        <hr className='linea--hr1'/>
        <ul className = "list_studies">
          <li>{props.text1}</li>
          <li>{props.text2}</li>
          <li>{props.text3}</li>
          <li>{props.text4}</li>
          <li>{props.text5}</li>
          <li>{props.text6}</li>
          <li>{props.text7}</li>
        </ul>
      </div>
    );
  }  

const myInfoOtherStudies={
    otherStudies:'ESUDIOS ADICIONALES:',
    text1:'Creación de páginas webs con bases de datos.',
    text2:'Curso especial de Word avanzado.',
    text3:'Construcción de sitios webs dinámicos.',
    text4:'Curso especial en TICS',
    text5:'Diseño de sitios web con HTML y JavaScript',
    text6:'CCNA routing y switching: Introducción a redes.',
    text7:'CCNA routing y switching: Principios básicos',
  }

function CurriculumOtherStudies(props){
    return(
        <div>
        <OtherStudies
        otherStudies={props.otherStudies}
        text1 = {props.text1}
        text2 = {props.text2}
        text3 = {props.text3}
        text4 = {props.text4}
        text5 = {props.text5}
        text6 = {props.text6}
        text7 = {props.text7}
        />
        </div>
    );
}

function OfMainOtherStudies(){
    return(
        <div>
            <CurriculumOtherStudies
            otherStudies={myInfoOtherStudies.otherStudies}
            text1 = {myInfoOtherStudies.text1}
            text2 = {myInfoOtherStudies.text2}
            text3 = {myInfoOtherStudies.text3}
            text4 = {myInfoOtherStudies.text4}
            text5 = {myInfoOtherStudies.text5}
            text6 = {myInfoOtherStudies.text6}
            text7 = {myInfoOtherStudies.text7}
            />
        </div>
    );
}

export default OfMainOtherStudies;