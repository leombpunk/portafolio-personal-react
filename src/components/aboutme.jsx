const AboutMe = () => {
  return (
    <>
      <section
        id='aboutme'
        className='flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl w-full h-full mt-10 lg:mt-5 px-2 md:px-20'
      >
        {/* <div className='grid grid-cols-2 grid-rows-1 gap-5 px-16'> */}
        <div className='w-full h-full px-5 lg:px-10 py-5 text-balance flex flex-col gap-3 border-l-8 border-sky-300/50 bg-blue-900/45 rounded-md shadow-lg order-2 lg:order-1'>
          <p className='text-balance'>
            Apasionado desarrollador fullstack con una sólida formación en
            tecnologías front-end y back-end, me especializo en construir
            soluciones robustas y escalables que resuelvan problemas del mundo
            real.
          </p>
          <p className='text-balance'>
            Desde que me adentré en el mundo del desarrollo de software, he
            aprendido nuevas tecnologías y mejorado mis habilidades
            constantemente. Me encanta enfrentarme a nuevos desafíos y encontrar
            formas innovadoras de resolver problemas.
          </p>
          <p className='text-balance'>
            Mi enfoque principal es crear experiencias de usuario excepcionales,
            centrándome en la usabilidad, el rendimiento y la estética. El
            desarrollo ágil y la colaboración en equipo son sumamente necesarios
            para lograr resultados sobresalientes.
          </p>
          <p className='text-balance'>
            Además de mi pasión por la programación, disfruto compartiendo mis
            conocimientos con la comunidad. Creo en el poder del aprendizaje
            continuo y en la importancia de contribuir al crecimiento colectivo
            de la industria.
          </p>
          <p className='text-balance'>
            Estoy emocionado de ser parte de proyectos desafiantes y colaborar
            con equipos talentosos para llevar ideas desde la concepción hasta
            la implementación. Siempre abierto a nuevas oportunidades y me
            encantaría conectarme contigo para explorar cómo puedo agregar valor
            a tu próximo proyecto.
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
