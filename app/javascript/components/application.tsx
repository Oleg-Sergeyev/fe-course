import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TopMenu from './TopMenu/topmenu';
import News from './News/news';
import AllNews from './News/allnews';

//const App = ({ arg }: AppProps) => {
const App = () => {
  // return <div>{`Hello!`}</div>;
  return TopMenu
  // return <div>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/news/:id([0-9])" element={<News />} />
  //     </Routes>
  //   </BrowserRouter>
  // </div>
};

 //document.addEventListener("DOMContentLoaded", () => {
  const rootEl = ReactDOM.createRoot(document.getElementById("root") as Element)
  rootEl.render(
    <BrowserRouter>
      <TopMenu />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/news/:id" element={<News />} />
        </Routes>
    </BrowserRouter>
  );
// });