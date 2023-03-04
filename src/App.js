import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';


function App() {
  return (
    <>
      <main>
        <Header />
        <CallToAction />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </main>

    </>
  );
}

export default App;
