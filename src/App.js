import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/menu";
import Usuarios from "./components/usuarios/index";
import Publicaciones from "./components/publicaciones";

const Tareas = () => <div>Tareas</div>;
const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margin">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />

    </div>
  </BrowserRouter>
);

export default App;
