import AvaliarAdmin from "views/admin/Avaliar.jsx"

import ResultadosUser from "views/user/Resultados.jsx"
import ProjetoUser from "views/user/Projeto.jsx"
import PerfilUser from "views/user/Perfil.jsx"

var routes = [
  {
    path: "/avaliar-projeto",
    name: "Avaliar Projetos",
    icon: "nc-icon nc-chart-bar-32",
    component: AvaliarAdmin,
    layout: "/admin"
  }
  
];

var routes_user = [
  {
    path: "/cadastrar-projeto",
    name: "Cadastrar Projeto",
    icon: "nc-icon nc-chart-bar-32",
    component: ProjetoUser,
    layout: "/user"
  },
  {
    path: "/resultados",
    name: "Resultados",
    icon: "nc-icon nc-chart-bar-32",
    component: ResultadosUser,
    layout: "/user"
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: PerfilUser,
    layout: "/user"
  }

]
export default routes;
export const routesUser = routes_user;
