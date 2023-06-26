import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/*" element={<div>404 NOT FOUND</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
