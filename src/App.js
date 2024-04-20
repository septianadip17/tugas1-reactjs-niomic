import './App.css';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Main from './Pages/Main';
import AboutUs from './Pages/AboutUs';

const Header = () => {
  return (
    <h1>Ini Halaman Untuk Header</h1>
  )
}

const Footer = () => {
  return (
    <h1>Ini Halaman Untuk Footer</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Product/>
      <Contact/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
