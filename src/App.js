import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OfMain from "./components/personal_information";
import OfMainTitles from './components/academic_formation';
import OfMainForm from './components/form';
import OfMainProfessionalProfile from './components/professional_profile';
import OfMainWorkExperience from './components/work_experience';
import OfMainOtherStudies from './components/other_studies';
import personal from './components/images/foto.png';
//import logo from './components/imagenes/tecnologias.png';

function App() {
  return (
    <div className = 'main'>
      <div className='container'>
        <div className='row'>
          <div className = 'col-1'></div>
          <div className='col-4'>
            <img className = 'image--photo' src={personal} alt = 'personal_photo'/>
          </div>
          <div className = 'col-2'></div>
          <div className = 'col-4'>
            <br></br>
            <br></br>
            <h1 className = 'name'><b>JUAN FELIPE MARIN ROMERO</b></h1>
            <hr></hr>
            <h2 className = 'title'><b> INGENIERO EN SISTEMAS Y TELECOMUNICACIONES </b></h2>

          </div>
          <div className = 'col-1'></div>
        </div>
      </div>
      <div className = 'row'>
        <div className = 'col-1'></div>
        <div className = 'col-5 main_text'>
          <br></br>
          <OfMainProfessionalProfile/><br></br>
          <OfMainOtherStudies/><br></br>
          <OfMain/>
        </div>
        <div className = 'col-5'>
          <br></br>
          <br></br>
          <br></br>
          <OfMainWorkExperience/><br></br>
          <br></br>
          <OfMainTitles/>
        </div>
        <div className = 'col-1'></div>
      </div>
    </div>
  )
}

export default App;
