/* eslint-disable react/prop-types */
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Carousel } from "flowbite-react"

const ProjectDetail = ({ data, status, setStatus }) => {
  return (
    <Transition.Root show={status} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setStatus}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-3xl'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='relative rounded-md bg-blue-950 text-white hover:text-sky-300 focus-visible:ring-0'
                        onClick={() => setStatus(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Cerrar panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-blue-950 border-l-2 border-sky-300 py-6 shadow-xl'>
                    <div className='flex flex-col flex-wrap gap-2 px-4 sm:px-6'>
                      <Dialog.Title className='text-4xl font-semibold leading-6 text-sky-300 text-balance'>
                        {data?.name}
                      </Dialog.Title>
                      <div className="flex flex-row gap-2 pt-2">
                        {data.status ? (
                          <span className='text-sm border bg-gray-800 border-sky-300 rounded-2xl px-2.5 py-1 shadow-md shadow-black/50'>
                            {data.status}
                          </span>
                        ) : (
                          ""
                        )}
                        {data.context ? (
                          <span className='text-sm border bg-gray-800 border-sky-300 rounded-2xl px-2.5 py-1 shadow-md shadow-black/50'>
                            {data.context}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className='relative mt-6 flex flex-col px-4 sm:px-6'>
                      <div className='w-full px-1 h-48 md:h-96'>
                        {/* <picture> */}
                        <Carousel
                          slide={false}
                          className='shadow-md shadow-sky-300 rounded-xl overflow-hidden'
                        >
                          {data?.imageSrc?.map((img, index) => (
                            <img
                              key={index}
                              alt={`image-${data?.name}-${index}`}
                              src={img}
                              className='bg-center bg-cover bg-no-repeat aspect-video'
                            />
                          ))}
                        </Carousel>
                        {/* <img alt="image-project" src={data?.imageSrc[0]} className='shadow-md shadow-sky-300 rounded-xl bg-center bg-cover bg-no-repeat aspect-video' /> */}
                        {/* </picture> */}
                      </div>
                      <div className='flex flex-row gap-2 w-full px-1 mt-4 mb-2'>
                        {data?.links?.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            title={link.name}
                            target="_blank"
                            className='bg-transparent border border-sky-300 rounded-xl px-6 py-3 shadow-lg hover:shadow-sky-300'
                          >
                            Ver {link.name}
                          </a>
                        ))}
                      </div>
                      <div className='px-1 mt-3'>
                        <p className='text-pretty text-lg italic'>
                          {data?.description}
                        </p>
                      </div>
                      <div className='w-full px-1 mt-3 mb-5 flex flex-wrap gap-1'>
                        <h3 className="w-full text-2xl font-medium text-sky-300">Tecnologías utilizadas:</h3>
                        {data?.tech?.map((tech, index) => (
                          <span
                            key={index}
                            className='border bg-gray-800 border-sky-300 rounded-2xl px-2.5 py-1 shadow-md shadow-black/50'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProjectDetail
