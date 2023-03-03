import './App.css';
import React from "react";
import * as ProtoTypes from "prop-types";
import Home from './Screen/Home';
import Nav from "./Components/Nav";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Infos from './Screen/Infos';
import News from './Screen/News';
import NotFound from './Screen/NotFound';
RouterProvider.prototype = {routes: ProtoTypes.any};

const routes = createBrowserRouter( [
  {path: "/home", element:<Home/>},
  {path: "/", element:<Home/>},
  {path: "/infos", element:<Infos/>},
  {path: "/news", element:<News/>},
  {path: "*", element:<NotFound/>},
]);

function App() {
  return (
    <div className="App">
     <Nav/>
     <RouterProvider router={routes}/>

    </div>
  );
}

export default App;
