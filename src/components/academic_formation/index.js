import React from "react";

function Titles(props){
    return(
      <div className='information--degrees'>
        <h4 className = "title--studies"><b>{props.titles}</b></h4>
        <br></br>
        <ul className = "list_studies">
          <li><p>{props.primary}</p></li>
           
          <li><p>{props.secundary}</p></li>   
         
          <li><p>{props.tecnology}</p></li>   
          
          <li><p>{props.universitary}</p></li>   
          
        </ul>
      </div>
    );
  }

const myTitles ={
    titles:'ESTUDIOS:',
    primary: 'Ricardo Flórez: Primaria',
    secundary: 'Instituto Universitario: Bachiller académico',
    tecnology: 'SENA: Tecnólogo en Diseño, Implementación y mantenimiento de sistemas de Telecomunicaciones',
    universitary: 'Universidad de Manizales: Ingeniería en Sistemas y Telecomunicaciones',
}

function CurriculumTitles(props) {
    return(
        <div>
            <Titles
            titles = {props.titles}
            primary = {props.primary}     
            secundary = {props.secundary}    
            tecnology = {props.tecnology}
            universitary = {props.universitary}      
            />
        </div>
    );
}

function OfMainTitles(){
    return(
        <div>
            <CurriculumTitles
            titles = {myTitles.titles}
            primary = {myTitles.primary}
            secundary = {myTitles.secundary}
            tecnology = {myTitles.tecnology}
            universitary = {myTitles.universitary}
            />
        </div>
    );
}

export default OfMainTitles;