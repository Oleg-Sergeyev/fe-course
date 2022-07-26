import * as React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewAuthForm from './Auth/NewAuthForm'
import News from './News/news';
import AllNews from './News/allnews';
import TopMenu from './TopMenu/MainMenu';
import LeftMenu from "./LeftMenu/LeftMainMenu";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

localStorage.setItem("token", document.querySelector('meta[name="csrf-token"]').content);

const App = () => {
  
  return (<QueryClientProvider client={queryClient}>
            <BrowserRouter>

              <TopMenu />
                <Routes>
                  <Route path="/" element={<AllNews />} />
                  <Route path="/news" element={<AllNews />} />
                  <Route path="/news/:id" element={<News />} />
                  <Route path="/users/sign_in" element={<NewAuthForm />} />
                  <Route path="/user/index" element={<LeftMenu />} />
                </Routes>
   
            </BrowserRouter>
          </QueryClientProvider>
  );
}
export default App;