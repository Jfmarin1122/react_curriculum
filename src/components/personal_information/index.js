import React from "react";

function PersonalInformation (props) {
    return (
        <div className='information--personal'>
            <br/>
            <h4 className = "information"><b>{props.personal}</b></h4>
            <hr className='linea--hr1'/>
            <ul className = "list_information--profile">
                <li className = "negrita--parrafo">{props.phone}</li>
                <li className = "negrita--parrafo">{props.email}</li>
                <li className = "negrita--parrafo">{props.address}</li>
                <li className = "negrita--parrafo">{props.ownDescription}</li><br></br>
            </ul>
      </div>
    )
}

const myInfo = {
    personal:'INFORMACION PERSONAL:',
    phone: 'Phone: 3143647878',
    email: 'Email: felipemarin1109@gmail.com',
    address: 'Address: Manizales, Caldas',
    ownDescription: 'Description: Soy una persona muy dedicada en las labores que realizo, me gusta superarme y aprender cada día algo nuevo, me gusta leer e informarme sobre tecnología, además soy muy respetuoso con las personas que me rodean.'
}

function CurriculumInformationMain (props) {
    return (
        <div>
            <PersonalInformation
            personal = {props.personal}
            phone = {props.phone}
            email = {props.email}
            address = {props.address}
            ownDescription = {props.ownDescription}
            />
        </div>
    )
}

function OfMain () {
    return (
        <div>
            <CurriculumInformationMain
            personal = {myInfo.personal}
            phone = {myInfo.phone}
            email = {myInfo.email}
            address = {myInfo.address}
            ownDescription = {myInfo.ownDescription}
            />
        </div>
    )
}

export default OfMain;