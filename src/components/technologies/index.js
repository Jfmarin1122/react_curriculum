import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Technologies() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../images/git.png" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../images/mysql.png" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../images/js_html_css.png" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}
  
const infoTechnologies ={
    YourName:'Nombre',
}
  
function CurriculumTechnologies(props) {
    return(
        <div>
            <Technologies
            YourName={props.YourName}
            />
        </div>
    );
}
  
function OfMainTechonologies(){
    return(
        <div>
            <CurriculumTechnologies
            YourName={infoTechnologies.YourName}
            />
        </div>
    );
}
  
export default OfMainTechonologies;