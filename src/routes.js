import AvaliarAdmin from "views/admin/Avaliar.jsx"
import AvaliarForm from "views/admin/AvaliarForm.jsx"

import ResultadosUser from "views/user/Resultados.jsx"
import ProjetoUser from "views/user/Projeto.jsx"
import PerfilUser from "views/user/Perfil.jsx"

var routes = [
  {
    path: "/projetos",
    name: "Avaliar Projetos",
    icon: "nc-icon nc-chart-bar-32",
    component: AvaliarAdmin,
    layout: "/admin",
    visible: true
  },
  {
    path: "/avaliar/:id",
    name: "Avaliar Projeto",
    icon: "nc-icon nc-chart-bar-32",
    component: AvaliarForm,
    layout: "/admin",
    visible:false
  } 
];

var routes_user = [
  {
    path: "/cadastrar-projeto",
    name: "Cadastrar Projeto",
    icon: "nc-icon nc-single-copy-04",
    component: ProjetoUser,
    layout: "/user",
    visible: true
  },
  {
    path: "/resultados",
    name: "Resultados",
    icon: "nc-icon nc-chart-bar-32",
    component: ResultadosUser,
    layout: "/user",
    visible: true
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: PerfilUser,
    layout: "/user",
    visible: true
  }

]
export default routes;
export const routesUser = routes_user;
