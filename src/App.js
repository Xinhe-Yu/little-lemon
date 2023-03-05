import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';

function App() {

  return (
    <>
      <main>
        <Header />
        <CallToAction />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <CustomersSay />
        <Chicago />
        <Footer />
      </main>

    </>
  );
}

export default App;
