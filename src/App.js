import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import { LandingPage } from './components/LandingPage/LandingPage.jsx';
import { Home } from './components/Home/Home.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';
import { CreateDog } from './components/CreateDog/CreateDog.jsx';
import { Detail } from './components/Detail/Detail.jsx';
import { About } from './components/About/About.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="AppDogs">
      <Routes>
        <Route exact path={"/"} element={ <LandingPage /> }/>
        <Route exact path={"/home"} element={ <Home /> }/>
        <Route path={"/create"} element={ <CreateDog /> } />
        <Route path={"/home/:id"} element={ <Detail /> }/>
        <Route path={"/about"} element={ <About /> }/>
        <Route path={"/"} element={ <NotFound /> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
