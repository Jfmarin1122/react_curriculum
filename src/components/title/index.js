import React from "react";

function Titles(props){
    return(
      <div className='information--degrees'>
        <br></br>
        <br></br>
        <h4 className = "title--form"><b>{props.formulario}</b></h4>
        <br></br>
      </div>
    );
  }

const myTitles ={
    formulario:'CONTACTAME:',
}

function CurriculumTitleForm(props) {
    return(
        <div>
            <Titles
            formulario = {props.formulario}   
            />
        </div>
    );
}

function OfMainTitleForm(){
    return(
        <div>
            <CurriculumTitleForm
            formulario = {myTitles.formulario}
            />
        </div>
    );
}

export default OfMainTitleForm;