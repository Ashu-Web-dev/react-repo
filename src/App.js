import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/nav/Navbar';
import Djclubs from './components/nav/Djclub/Djclubs';
import Footer from './components/nav/footer/Footer';
import Alexendra from './components/nav/alexendra/Alexendra';
import Aboutphoto from "./components/about/aboutphoto"
import Discography from "./components/discography/discography"
import Festival from './components/nav/Festival/Festival';
import Tour from "./components/tour/Tour"
import Aboutcards from './components/about/aboutcards';
import Contact from './components/nav/contactinfo/Contactinfo';




function App() {
  const router =createBrowserRouter([{path:"/",
    element:<div><Navbar></Navbar><Home></Home></div>
  },
  {path:"/about",
    element:<div><Navbar></Navbar><Alexendra></Alexendra><Aboutphoto></Aboutphoto><Aboutcards></Aboutcards><Footer></Footer></div>
  },
  {path:"/discography",
    element:<div><Navbar></Navbar><Discography></Discography><Footer></Footer></div>
  },
  {path:"/tour",
    element:<div><Navbar></Navbar><Tour></Tour><Footer></Footer></div>
  },
  {path:"/contact",
    element:<div><Navbar></Navbar><Contact></Contact><Footer></Footer></div>
  }
])
  return (<>
<RouterProvider router={router}/>

  </>   
  );
}

export default App;
