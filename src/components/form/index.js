import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
    return (
        <div class="card border-primary rounded-0">
            <div class="card-header p-0">
                <div class="contac_title">
                    <h3><i className = "contac_text"></i> CONTACTAME</h3>
                </div>
            </div>
            <div class="card-body p-3">
                <div class="form-group">
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-2">
                        <input type="email" class="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group mb-2">
                        <textarea class="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                    </div>
                </div>

                <div class="text-center">
                    <input type="submit" value="Enviar" class="button_send"/>
                </div>
            </div>

        </div>
    );
}
  
const formInfo ={
    YourName:'Nombre',
    YourEmail:'Correo',
    subject:'Objetivo',
    send:'enviar'
}
  
function CurriculumForm(props) {
    return(
        <div>
            <Form
            YourName={props.YourName}
            YourEmail={props.YourEmail}
            subject={props.subject}
            send={props.send} 
            />
        </div>
    );
}
  
function OfMainForm(){
    return(
        <div>
            <CurriculumForm
            YourName={formInfo.YourName}
            YourEmail={formInfo.YourEmail}
            send={formInfo.send}
            subject={formInfo.subject}
            />
        </div>
    );
}
  
export default OfMainForm;
