import {BrowserRouter} from 'react-router-dom';
import {Home, Mapa, Navbar} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
        </div>
        <Mapa />
      </div>
    </BrowserRouter>
  );
}

export default App;