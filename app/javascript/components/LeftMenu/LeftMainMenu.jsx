import * as React from 'react';
import {log_out} from '../Auth/authmethods';
import { useNavigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from '../../images/ruby-fiolent.png'
import AllNews from '../News/allnews';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import CommentBox from '../Comments/CommentBox';


import { Nav } from 'react-bootstrap';

const LeftMenu = () => {
    const queryClient = new QueryClient()
    //const [allnews, setAllNews] = useState([]);
    const [name, setName] = React.useState(localStorage.getItem("username"));
    const navigate = useNavigate();
    const bodyNav = React.useRef();
    const toggleRef = React.useRef();
    const searchboxRef = React.useRef();
    const modetextRef = React.useRef();
    const modeswitchRef = React.useRef();
    const contentRef = React.useRef();
    // React.useEffect(() => {
    //     if (isLoading) {
    //         return
    //       }
    //       if (error) {
    //         console.error('Error:', error);
    //         alert(error);
    //         return;
    //       }
    //         setName(data.name);
    //         localStorage.setItem("name", data.name);
    // },[isLoading, data, error])
   
    React.useEffect(() => {
      

      const toggle = toggleRef.current;
      const sidebar = bodyNav.current;
      toggle.addEventListener("click" , () =>{
      sidebar.classList.toggle("close");
      false
    })
        
        const modeswitch = modeswitchRef.current
        // const body = bodyRef.current;
        const modeText = modetextRef.current
        modeswitch.addEventListener("click" , () =>{
            document.body.classList.toggle("dark");
            if(document.body.classList.contains("dark")){
                modeText.innerText = "Light mode";
            }else{
                modeText.innerText = "Dark mode";
            }
          false
        });


      // Specify how to clean up after this effect:
    //   return function cleanup() {
    //     buttonRef.removeEventListener("click", alertFunc, false)
    //   };

    })

   

  function handleAuthLogout() {
    setName(log_out)
    // navigate('/news');
  }

  return (
    <div>
    <nav className="sidebar close" ref={bodyNav}>
        <header>
            <div className="image-text">
                <span className="image">
                   <img src={logo} alt=""></img>
                </span>

                <div className="text logo-text">
                  <span className="name">Ruby on Rails</span>
                  <span className="profession">News maker</span>
                </div>
            </div>

            <i className='bx bx-chevron-right toggle' ref={toggleRef}></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box" ref={ searchboxRef }>
                    <i className='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."></input>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <NavLink to="/user/news">
                            <i className='i bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Новости</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <a href="/user/edit">
                            <i className='i bx bx-user-circle icon' ></i>
                            <span className="text nav-text">Профиль</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="/" onClick={handleAuthLogout} >
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Выход</span>
                    </a>
                </li>

                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text" ref={modetextRef}>Dark mode</span>

                    <div className="toggle-switch" ref={modeswitchRef} >
                        <span className="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
    <section className="home">
      <div className="text">{localStorage.getItem("username")}</div>
      <div className='content' ref={contentRef}>
        <Routes>
            <Route path="/user/news/*" element={<AllNews />} />
            <Route path="/user/edit"/>
        </Routes>
      </div>
    </section>
    </div>
  );
};
export default LeftMenu;