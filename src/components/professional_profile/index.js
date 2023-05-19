import React from "react";

function ProfessionalProfile(props) {
    return(
        <div className='information--professionalProfile'>
            <br></br>
            <br></br>
            <h4 className = "title_profile"><b>{props.professionalProfile}</b></h4>
            <hr className='linea--hr1'/>
            <p className = "text--profile">{props.text}</p><br></br>
        </div>
      );
}

const myInfoProfile={
    professionalProfile:'PERFIL PROFESIONAL:',
    text:'Soy tecnólogo en Diseño, Implementación y Mantenimiento en Sistemas de Telecomunicaciones, he prestado soporte técnico en varias compañías. Tengo conocimientos en lenguajes de programación HTML, Python, CSS, PHP, JavaScript, además de manejo en SQL y de herramientas como Git, admeás se los servidores virtuales Github y Gitlab.',
  }

function CurriculumProfessionalProfile(props){
    return(
        <div>
        <ProfessionalProfile
        professionalProfile={props.professionalProfile}
        text = {props.text}
        />
        </div>
    );
}

function OfMainProfessionalProfile(){
    return(
        <div>
            <CurriculumProfessionalProfile
            professionalProfile={myInfoProfile.professionalProfile}
            text = {myInfoProfile.text}
            />
        </div>
    );
}

export default OfMainProfessionalProfile;