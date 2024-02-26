const AboutMe = () => {
  return (
    <>
      <section
        id='aboutme'
        className='flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl w-full h-full mt-10 lg:mt-5 px-2 md:px-20'
      >
        {/* <div className='grid grid-cols-2 grid-rows-1 gap-5 px-16'> */}
        <div className='w-full h-full px-5 lg:px-10 py-5 text-balance flex flex-col gap-3 border-l-8 border-sky-300/50 bg-blue-900/45 rounded-md shadow-lg order-2 lg:order-1'>
          <p className='text-pretty  text-lg'>
            Desarrollador <span className='text-sky-300'>fullstack</span> con
            una sólida formación en tecnologías front-end y back-end, me
            especializo en construir{" "}
            <span className='text-sky-300'>
              soluciones robustas y escalables
            </span>{" "}
            que resuelvan problemas del mundo real.
          </p>
          <p className='text-pretty text-lg'>
            Desde que me adentré en el mundo del desarrollo de software, he
            aprendido nuevas tecnologías y{" "}
            <span className='text-sky-300'>
              mejorado mis habilidades constantemente
            </span>
            . El aprendizaje continuo y contribuir son la clave para el{" "}
            <span className='text-sky-300'>
              crecimiento personal y colectivo
            </span>
            .
          </p>
          <p className='text-pretty text-lg'>
            Estoy emocionado de ser parte de proyectos desafiantes y{" "}
            <span className='text-sky-300'>
              colaborar con equipos talentosos
            </span>{" "}
            para llevar ideas desde la concepción hasta la implementación.
          </p>
        </div>
        <h2 className='text-4xl text-center lg:text-left font-bold text-balance h-full w-full lg:w-96 px-5 py-5 order-1 lg:order-2'>
          Sobre <span className='text-sky-300'>mí</span>
        </h2>
        {/* </div> */}
      </section>
    </>
  )
}

export default AboutMe
