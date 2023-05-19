import React from "react";

function WorkExperience(props){
    return(
      <div className='information--workExperince'>
        <br></br>
        <br></br>
        <h4 className = "tile_esperience"><b>{props.workExperience}</b></h4>
        <br></br>
        <ul className = "list_experience">
          <li>{props.text1}</li><br></br>
          <li>{props.text2}</li><br></br>
          <li>{props.text3}</li><br></br>
        </ul>
        
      </div>
    );
  }  

const myInfoWorkExperience={
    workExperience:'EXPERIENCIA LABORAL:',
    text1:'GENSA (17/Octubre/2019 - 16/Abril/2020) - Practicante en la Unidad de Tecnología, durante 6 meses.',
    text2:'San Luis Gonzaga (17/Septiembre/2022 - 17/Octubre/2022) Técnico de Soporte en Recursos Informáticos.',
    text3:'Adsum - Soluciones Tecnológicas (18/septiembre/2022 - Actualidad) - Tecnólogo en sistemas en la Unidad de Tecnología'
  }

function CurriculumWorkExperience(props){
    return(
        <div>
        <WorkExperience
        workExperience={props.workExperience}
        text1 = {props.text1}
        text2 = {props.text2}
        text3 = {props.text3}
        />
        </div>
    );
}

function OfMainWorkExperience(){
    return(
        <div>
            <CurriculumWorkExperience
            workExperience={myInfoWorkExperience.workExperience}
            text1 = {myInfoWorkExperience.text1}
            text2 = {myInfoWorkExperience.text2}
            text3 = {myInfoWorkExperience.text3}
            />
        </div>
    );
}

export default OfMainWorkExperience;