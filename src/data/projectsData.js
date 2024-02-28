//sion
import sion1 from "../assets/images/projects/sion/portada1.png"
import sion2 from "../assets/images/projects/sion/portada2.png"
import sion3 from "../assets/images/projects/sion/portada3.png"
import sion4 from "../assets/images/projects/sion/musica1.png"
import sion5 from "../assets/images/projects/sion/musica2.png"
import sion6 from "../assets/images/projects/sion/libros1.png"
import sion7 from "../assets/images/projects/sion/libros2.png"
import sion8 from "../assets/images/projects/sion/oraciones1.png"
import sion9 from "../assets/images/projects/sion/oraciones2.png"
import sion10 from "../assets/images/projects/sion/redes.png"
import sion11 from "../assets/images/projects/sion/web1.png"
import sion12 from "../assets/images/projects/sion/web2.png"
import sion13 from "../assets/images/projects/sion/blog1.png"
// import sion14 from "../assets/images/projects/sion/blog2.png"

//appPortfolio
import portfolio1 from "../assets/images/projects/appPortfolio/portada.png"
import portfolio2 from "../assets/images/projects/appPortfolio/perfil.png"
import portfolio3 from "../assets/images/projects/appPortfolio/experiencia.png"
import portfolio4 from "../assets/images/projects/appPortfolio/educacion.png"
import portfolio5 from "../assets/images/projects/appPortfolio/habilidades.png"
import portfolio6 from "../assets/images/projects/appPortfolio/proyectos.png"

//recipebook
import recipe1 from "../assets/images/projects/recipebook/portada1.png"
import recipe2 from "../assets/images/projects/recipebook/portada2.png"

//medicapp
import medicapp1 from "../assets/images/projects/medicapp/portada1.png"
import medicapp2 from "../assets/images/projects/medicapp/portada2.png"
import medicapp3 from "../assets/images/projects/medicapp/portada3.png"
import medicapp4 from "../assets/images/projects/medicapp/pacientes.png"
import medicapp5 from "../assets/images/projects/medicapp/paciente-perfil.png"
import medicapp6 from "../assets/images/projects/medicapp/agenda.png"
import medicapp7 from "../assets/images/projects/medicapp/configuracion.png"

//softboos
import softboos1 from "../assets/images/projects/softboos/portada1.png"
import softboos2 from "../assets/images/projects/softboos/portada2.png"
import softboos3 from "../assets/images/projects/softboos/portada3.png"
import softboos4 from "../assets/images/projects/softboos/clientes.png"
import softboos5 from "../assets/images/projects/softboos/productos.png"
import softboos6 from "../assets/images/projects/softboos/venta.png"
import softboos7 from "../assets/images/projects/softboos/ventas.png"
import softboos8 from "../assets/images/projects/softboos/venta-productos.png"
import softboos9 from "../assets/images/projects/softboos/perfil.png"
import softboos10 from "../assets/images/projects/softboos/notificacion1.png"
import softboos11 from "../assets/images/projects/softboos/notificacion2.png"

const projectsData = [
  {
    name: "Sitio web Sion",
    imageSrc: [
      sion1,
      sion2,
      sion3,
      sion4,
      sion5,
      sion6,
      sion7,
      sion8,
      sion9,
      sion10,
      sion11,
      sion12,
      sion13,
      // sion14,
    ],
    description:
      "Te presento al sitio web del Grupo de Oración Sion, cuyo objetivo es el de atraer la atención de los jóvenes hacia la fe. Facilitandole contenido católico, sean redes, otros sitios web, música, lectras, oraciones, libros. También un blog de noticias con todas las actividades que realizamos como grupo en comunidad.",
    status: "Develop", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "https://github.com/leombpunk/grupo-oracion-sion",
      },
      // {
      //   name: "Demo",
      //   href: "",
      // },
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
    imageSrc: [recipe1, recipe2],
    description:
      "Proyecto de recetas de cocina. Alguna vez necesitaste cocinar para una ocacion especial, para alguien especial o simplemente te dio hambrita; pues aquí la solución, una App donde podras almacenar todas tus recetas, las podras compartir con otros usuarios y porque no también con tus amigos.",
    status: "Develop", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "https://github.com/leombpunk/recetas-de-cocina",
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
    imageSrc: [
      medicapp6,
      medicapp1,
      medicapp2,
      medicapp3,
      medicapp4,
      medicapp5,
      medicapp7,
    ],
    description:
      "Proyecto Final de carrera. La App se centra en la gestión de la agenda de un consultorio (area de salud), también se destaca la gestión de pacientes, profesionales, usuarios de la App, configuración de la agenda e historia clínica del paciente.",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "https://github.com/leombpunk/medicapp-app",
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
    imageSrc: [
      portfolio2,
      portfolio3,
      portfolio4,
      portfolio5,
      portfolio6,
      portfolio1,
    ],
    description:
      "Proyecto final del curso impartido por el plan Argentina Programa. Es un portafolios minimalista, enfocado a un perfil de programador, en él puedes actualizar tu información, todo a través del propio portafolios, porque éste cuenta con backend",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "https://github.com/leombpunk/portafolio-app",
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
    imageSrc: [
      softboos1,
      softboos2,
      softboos3,
      softboos4,
      softboos5,
      softboos6,
      softboos7,
      softboos8,
      softboos9,
      softboos10,
      softboos11,
    ],
    description:
      "Sistema de punto de venta, controla tus ventas, compras, productos, clientes, etc., informes y gráficas de ventas. Desarrollado en PHP8, construí un framework minimalista con patrón de diseño MVC.",
    status: "", //terminado, en desarrollo, etc
    context: "FullStack", //frontend, backend, fullstack
    links: [
      {
        name: "GitHub",
        href: "https://github.com/leombpunk/softboos-sistema-pos",
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
