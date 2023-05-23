import './App.css';
import ForgotPassword from './Components/ForgotPassword';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Corousel from './Components/Corousel';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import CoursePage from './Components/CoursePage';
function App() {
  const img = [{url : '4.png'}, {url : '11.png'}, {url :'10.png'}];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/course' element={<CoursePage images={img} courseName='Aviation' desc='Enroll to our Aviation Course' />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
