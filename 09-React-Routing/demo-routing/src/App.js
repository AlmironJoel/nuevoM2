
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Profile from './components/Profile';
import Person from './components/Person';

function App() {
  return (
   <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    
    <Route path='/profile' element={<Profile/>}>
      {/* se anida el link colocando : la direcion, dentro de un route*/}
      <Route path=':person' element={<Person/>}/>
    </Route>

      <Route path=':error' element={<Error/>} />
   </Routes>
)}

export default App;
