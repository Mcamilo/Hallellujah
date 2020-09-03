import AvaliarAdmin from "views/admin/Avaliar.jsx"
import AvaliarForm from "views/admin/AvaliarForm.jsx"
import ResultadosAdmin from "views/admin/Resultados.jsx"

import ResultadosUser from "views/user/Resultados.jsx"
import ProjetoUser from "views/user/Projeto.jsx"
import PerfilUser from "views/user/Perfil.jsx"

import AvaliarSAdmin from "views/super/Avaliar.jsx"
import AvaliarSForm from "views/super/AvaliarForm.jsx"
import Perfis from "views/super/Perfis.jsx"
import ResultadosSAdmin from "views/super/Resultados.jsx"

var routes = [
  {
    path: "/projetos",
    name: "Avaliar Projetos",
    icon: "nc-icon nc-paper",
    component: AvaliarAdmin,
    layout: "/conselho",
    visible: true
  },
  {
    path: "/avaliados",
    name: "Projetos Avaliados",
    icon: "nc-icon nc-single-copy-04",
    component: ResultadosAdmin,
    layout: "/conselho",
    visible: true
  },
  {
    path: "/avaliar/:id",
    name: "Avaliar Projeto",
    icon: "nc-icon nc-chart-bar-32",
    component: AvaliarForm,
    layout: "/conselho",
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

var routes_SA = [
  {
    path: "/avaliados",
    name: "Projetos Avaliados",
    icon: "nc-icon nc-single-copy-04",
    component: ResultadosSAdmin,
    layout: "/admin",
    visible: true
  },
  {
    path: "/avaliar/:id",
    name: "Avaliar Projeto",
    icon: "nc-icon nc-chart-bar-32",
    component: AvaliarSForm,
    layout: "/admin",
    visible:false
  },
  {
    path: "/perfis",
    name: "Contas",
    icon: "nc-icon nc-paper",
    component: Perfis,
    layout: "/admin",
    visible: true
  },
]
export default routes;
export const routesUser = routes_user;
export const routesSA = routes_SA;
