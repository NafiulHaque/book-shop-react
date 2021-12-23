
// import './App.css';
import Footer from './Books/Components/Footer';
import Box from './Books/Components/Hero/Box';
import Carocel from './Books/Components/Hero/Carocel';
import Box_2 from './Shared/Components/Boxs/Box_2';
import Box_3 from './Shared/Components/Boxs/Box_3';
import SilkCaroucel_1 from './Shared/Components/Carocels/silkCaroucel_1';
import Countdown from './Shared/Components/Countdown/Countdown';
import Navbar from './Shared/Components/Navigation/Navbar';
import Navbar_2 from './Shared/Components/Navigation/Navbar_2';

function App() {
  return (

    <div className="App">

      <Navbar />
      <Navbar_2 />
      <Carocel />
      <hr />
      <div className="container-fluid">
        <Box />
        <hr />
        <SilkCaroucel_1 />
        <hr />
        <Box_2 />
        <hr />
        <SilkCaroucel_1 />
        <hr />
        <Box_3 />
        <hr />
        <SilkCaroucel_1 />
        <hr />
        <Countdown />
        <hr />

      </div>
      <Footer />


    </div>

  );
}

export default App;
