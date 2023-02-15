
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './components/header';
import BasicExample from './components/login';
import Home from './components/home'
import Userlist from './components/register';
import Sidebar from './components/sidebar';
import Edit from './components/edit';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Demo />
      <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={<BasicExample />}></Route>
        <Route path='/register' element={<Userlist />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
      </Sidebar>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
