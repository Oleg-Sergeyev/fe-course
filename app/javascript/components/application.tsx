import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import News from './News/news';

//const App = ({ arg }: AppProps) => {
const App = () => {
  return <div>{`Hello!`}</div>;
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
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
// });