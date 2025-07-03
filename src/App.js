import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Skill from './components/Skill';
import Customer from './components/Customer';
import Footer from './components/Footer';
import NavbarFixed from './components/NavbarFixed';

function App() {


  return (
    <div className="mt-6">
      <Navbar />
      <NavbarFixed/>
      <Hero />
      <main className=" bg-orange-200/15">
        <Categories />
        {/* <ScrollMoveSection/> */}
        <Skill />
        <Customer />
        <Footer />
      </main>

    </div>
  );
}

export default App;
