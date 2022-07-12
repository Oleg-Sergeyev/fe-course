import * as React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewAuthForm from './Auth/NewAuthForm'
import News from './News/news';
import AllNews from './News/allnews';
import TopMenu from './TopMenu/topmenu';
import { ReactSession } from 'react-client-session';

ReactSession.setStoreType("localStorage");

const App = () => {
  return (
    <BrowserRouter>
      <TopMenu />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/users/sign_in" element={<NewAuthForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;