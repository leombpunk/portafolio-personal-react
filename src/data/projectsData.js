//sion 
import projectImgSion1 from "../assets/images/projects/sion/portada1.png"
import projectImgSion2 from "../assets/images/projects/sion/portada2.png"
import projectImgSion3 from "../assets/images/projects/sion/portada3.png"

//appPortfolio
import projectImgPortfolio from "../assets/images/projects/appPortfolio/portada.png"
import projectImgPortfolio2 from "../assets/images/projects/appPortfolio/perfil.png"

//recipebook
import projectImgRecipe1 from "../assets/images/projects/recipebook/portada1.png"
import projectImgRecipe2 from "../assets/images/projects/recipebook/portada2.png"

//medicapp
import projectImgMedicApp1 from "../assets/images/projects/medicapp/portada1.png"
import projectImgMedicApp2 from "../assets/images/projects/medicapp/portada2.png"
import projectImgMedicApp3 from "../assets/images/projects/medicapp/pacientes.png"
import projectImgMedicApp4 from "../assets/images/projects/medicapp/paciente-perfil.png"
import projectImgMedicApp5 from "../assets/images/projects/medicapp/agenda.png"
import projectImgMedicApp6 from "../assets/images/projects/medicapp/configuracion.png"

//softboos
import projectImgSoftBoos1 from "../assets/images/projects/softboos/portada1.png"
import projectImgSoftBoos2 from "../assets/images/projects/softboos/portada2.png"
import projectImgSoftBoos3 from "../assets/images/projects/softboos/portada3.png"
import projectImgSoftBoos4 from "../assets/images/projects/softboos/clientes.png"
import projectImgSoftBoos5 from "../assets/images/projects/softboos/productos.png"
import projectImgSoftBoos6 from "../assets/images/projects/softboos/venta.png"
import projectImgSoftBoos7 from "../assets/images/projects/softboos/ventas.png"

const projectsData = [
  {
    name: "Sitio web Sion",
    imageSrc: projectImgSion1,
    description:
      "Te presento al sitio web del Grupo de Oración Sion, cuyo objetivo es el de atraer la atención de los jóvenes hacia la fe. Facilitandole contenido católico, sean redes, otros sitios web, música, lectras, oraciones, libros. También un blog de noticias con todas las actividades que realizamos como grupo en comunidad.",
    status: "Develop", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "",
      },
      {
        name: "Demo",
        href: "",
      },
    ],
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    name: "Recetas de cocina",
    imageSrc: projectImgRecipe1,
    description:
      "Proyecto de recetas de cocina. Alguna vez necesitaste cocinar para una ocacion especial, para alguien especial o simplemente te dio hambrita; pues aquí la solución, una App donde podras almacenar todas tus recetas, las podras compartir con otros usuarios y porque no también con tus amigos.",
    status: "Develop", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "",
      },
    ],
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "JSON Web Token",
      "Multer",
      "MySQL8",
    ],
  },
  {
    name: "MedicApp",
    imageSrc: projectImgMedicApp5,
    description:
      "Proyecto Final de carrera. La App se centra en la gestión de la agenda de un consultorio (area de salud), también se destaca la gestión de pacientes, profesionales, usuarios de la App, configuración de la agenda e historia clínica del paciente.",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "",
      },
    ],
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React-bootstrap",
      "React-hook-form",
      "Axios",
      "NodeJS",
      "Express",
      "Express-validator",
      "Sequelize",
      "JSON Web Token",
      "Multer",
      "MySQL8",
      "ElectronJS",
    ],
  },
  {
    name: "PortfolioApp",
    imageSrc: projectImgPortfolio2,
    description:
      "Proyecto final del curso impartido por el plan Argentina Programa. Es un portafolios minimalista, enfocado a un perfil de programador, en él puedes actualizar tu información, todo a través del propio portafolios, porque éste cuenta con backend",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "",
      },
    ],
    tech: [
      "Angular13",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "Java",
      "SpringBoot",
      "JSON Web Token",
      "Cloudinary",
      "MySQL8",
      "MySQL Workbench",
      "Docker",
      "Firebase",
      "Render",
      "Clever Cloud",
    ],
  },
  {
    name: "SoftBoos (sistema POS)",
    imageSrc: projectImgSoftBoos1,
    description:
      "Sistema de punto de venta, controla tus ventas, compras, productos, clientes, etc., informes y gráficas de ventas. Desarrollado en PHP8, construí un framework minimalista con patrón de diseño MVC.",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "",
      },
    ],
    tech: [
      "PHP8",
      "HTML5",
      "CSS3",
      "Bootstrap 4.3",
      "jQuery",
      "JavaScript",
      "DataTables",
      "charts.js",
      "SweetAlert.js",
      "Template-Valiadmin",
      "MariaDB 10",
      "XAMPP",
    ],
  },
]

export default projectsData
