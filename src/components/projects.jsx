import { useState } from "react"
import ProjectDetail from "./projectDetail"
import projectsData from "../data/projectsData"
import usePagination from "../hooks/usePagination"

const Projects = () => {
  const [sideOpen, setSideOpen] = useState(false)
  const [projecData, setProjectData] = useState({})
  const { items, currentPage, setPage, totalItems, totalPages } =
    usePagination(projectsData)

  const handleClick = (data) => {
    setSideOpen(true)
    setProjectData(data)
  }

  const handleClickNextPage = () => {
    setPage(currentPage+1)
  }

  const handleClickPrevPage = () => {
    setPage(currentPage-1)
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
                className='flex flex-col items-center justify-center w-full bg-blue-950 border border-sky-300 rounded-xl overflow-hidden hover:cursor-pointer group hover:shadow-sky-300 hover:shadow-lg'
              >
                <div
                  className='flex items-center justify-center w-full h-[300px] group-hover:scale-105 duration-500 bg-gray-400 bg-center bg-cover'
                  style={{ backgroundImage: `url(${project.imageSrc[0]})` }}
                >
                  {/* <div className='relative flex flex-row justify-between px-3 text-sky-300 text-lg duration-200 w-full -mt-48'>
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
                  </div> */}
                </div>
                {/* <picture>
                  <img src={project.imageSrc[0]} alt="imagen representativa del proyecto" className="object-cover" />
                </picture> */}
                <h3 className='w-full text-center text-3xl bg-gray-800 font-semibold group-hover:text-sky-300 px-5 py-2 z-10'>
                  {project.name}
                </h3>
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
