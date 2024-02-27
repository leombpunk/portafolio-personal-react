import { useState } from "react"
import ProjectDetail from "./projectDetail"
import projectsData from "../data/projectsData"

const Projects = () => {
  const [sideOpen, setSideOpen] = useState(false)
  const [projecData, setProjectData] = useState({})

  const handleClick = (data) => {
    setSideOpen(true)
    console.log("ola kase!")
    console.log(sideOpen)
    setProjectData(data)
  }

  return (
    <>
      <section
        id='projects'
        className='flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl w-full h-full mt-10 lg:mt-32 px-2 md:px-20 py-10 scroll-mt-16'
      >
        <h2 className='text-4xl text-center lg:text-left font-bold text-balance h-full w-full lg:w-96 px-5 py-5 order-1'>
          Proyectos
        </h2>
        <div className='w-full h-full px-5 lg:px-10 py-5 text-balance flex flex-col gap-3 border-l-8 border-sky-300/50 bg-blue-900/45 rounded-md shadow-lg order-2'>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            {projectsData.map((project, index) => (
              <div
                key={index}
                onClick={() => handleClick(project)}
                className='flex flex-col items-center justify-center w-full h-[250px] bg-blue-950 border border-sky-300 rounded-xl overflow-hidden hover:cursor-pointer group'
              >
                <div
                  className='flex items-center justify-center w-full h-full group-hover:scale-110 duration-500 bg-gray-400 bg-center bg-cover blur-0 lg:blur-lg group-hover:blur-0'
                  style={{ backgroundImage: `url(${project.imageSrc})` }}
                ></div>
                <h3 className='absolute text-center text-3xl font-semibold group-hover:text-sky-300 px-5 w-[250px] h-[230px]'>
                  {project.name}
                </h3>
                <div className='absolute flex flex-row justify-between gap-x-5 text-sky-300 text-lg group-hover:opacity-0 duration-200 w-[300px] mt-40'>
                  {project.context ? (
                    <span className='bg-gray-900/80 py-1 px-2 rounded-2xl border border-sky-300/50'>
                      {project.context}
                    </span>
                  ) : (
                    ""
                  )}
                  {project.status ? (
                    <span className='bg-gray-900/80 py-1 px-2 rounded-2xl border border-sky-300/50'>
                      {project.status}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectDetail
        data={projecData}
        status={sideOpen}
        setStatus={setSideOpen}
      />
    </>
  )
}

export default Projects
