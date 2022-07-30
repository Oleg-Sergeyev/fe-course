import * as React from "react";
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import NewAuthForm from './Auth/NewAuthForm'
import News from './News/news';
import AllNews from './News/allnews';
import TopMenu from './TopMenu/MainMenu';
import LeftMenu from "./LeftMenu/LeftMainMenu";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

localStorage.setItem("token", document.querySelector('meta[name="csrf-token"]').content);

const App = () => {
  const[path, setPath] = React.useState(window.location.pathname)
  const regexLeftMenu = new RegExp("^\/user\/.*");
  const regexTopMenu = new RegExp("^((?!user).)*$");
  const Menu = () => {
    console.log('location.pathname', regexLeftMenu.test(path))
    if(regexLeftMenu.test(path) && localStorage.getItem("username") !='guest') {
      return ( <LeftMenu />)
    }
    if(regexTopMenu.test(path)) {
      return ( <TopMenu />)
    }
  };
  return (<QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Menu/>
                <Routes>
                  <Route path="/" element={<AllNews/>}/>
                  <Route path="/news" element={<AllNews />} />
                  <Route path="/news/:id" element={<News />} />
                  <Route path="/users/sign_in" element={<NewAuthForm />} />
                  {/* <Route path='/user/*' element={<LeftMenu />} /> */}
                  <Route path='/user/news/*' element={<AllNews />}/>
                </Routes>
             </BrowserRouter>
          </QueryClientProvider>
  );
}
export default App;