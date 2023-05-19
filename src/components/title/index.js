import React from "react";

function Titles(props){
    return(
      <div className='information--degrees'>
        <br></br>
        <br></br>
        <h4 className = "title--form"><b>{props.tecnologias}</b></h4>
        <br></br>
      </div>
    );
  }

const myTitles ={
    tecnologias:'TECNOLOGIAS:',
}

function CurriculumTitleTec(props) {
    return(
        <div>
            <Titles
            tecnologias = {props.tecnologias}   
            />
        </div>
    );
}

function OfMainTitleTec(){
    return(
        <div>
            <CurriculumTitleTec
            formulario = {myTitles.formulario}
            />
        </div>
    );
}

export default OfMainTitleTec;