import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        <CallToAction />
        <Footer />
      </main>

    </>
  );
}

export default App;
