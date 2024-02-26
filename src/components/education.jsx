import { Disclosure, Transition } from "@headlessui/react"
import {
  CheckBadgeIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline"
import educationData from "../data/educationData"

const Education = () => {
  return (
    <>
      <section
        id='education'
        className='flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl w-full h-full mt-10 lg:mt-32 px-2 md:px-20 py-10 scroll-mt-16'
      >
        <div className='w-full h-full px-5 lg:px-10 py-5 text-balance flex flex-col gap-3 border-l-8 border-sky-300/50 bg-blue-900/45 rounded-md shadow-lg order-2 lg:order-1'>
          <ol>
            {educationData
              ? educationData.map((studies) =>
                  studies?.category === "studies"
                    ? studies.data.map((data, index) => (
                        <li
                          className='border-l-2 border-sky-300/50'
                          key={index}
                        >
                          <div className='flex'>
                            <div className='bg-sky-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5'></div>
                            <div className='block p-6 rounded-lg shadow-lg bg-blue-950 border border-sky-300/50 w-full max-w-[19rem] md:max-w-md lg:max-w-[27rem] xl:max-w-xl ml-6 mb-10'>
                              <div className='flex justify-between mb-2'>
                                <h3 className='font-medium text-white duration-500 transition ease-in-out text-xl'>
                                  {data.name}
                                </h3>
                                <h3 className='font-medium text-white duration-500 transition ease-in-out text-xl'>
                                  <CheckBadgeIcon
                                    width={28}
                                    height={28}
                                    className='text-sky-300'
                                  />
                                </h3>
                              </div>
                              <p className='text-gray-300 mb-1'>
                                {data.institute}
                              </p>
                              <p className='text-gray-300 mb-1'>
                                {`Inicio: ${data.start} - Fin: ${data.end}`}
                              </p>
                              <p className='text-gray-300 mb-1'>{data.place}</p>
                            </div>
                          </div>
                        </li>
                      ))
                    : ""
                )
              : ""}
          </ol>

          <Disclosure as='div' className='w-full'>
            <Disclosure.Button className='w-full flex flex-row items-center justify-center leading-6 gap-3 text-2xl font-semibold duration-500 rounded-xl p-3 mb-5 text-white hover:text-sky-300 border border-transparent hover:shadow-md hover:shadow-sky-300 hover:border-sky-300'>
              Cursos
              <ChevronDoubleDownIcon
                width={22}
                height={22}
                className='flex-none animate-bounce'
                aria-hidden='true'
              />
            </Disclosure.Button>
            <Transition
              enter="transition ease-out duration-500"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Disclosure.Panel>
                <ol>
                  {educationData
                    ? educationData.map((studies) =>
                        studies?.category === "courses"
                          ? studies.data.map((data, index) => (
                              <li
                                className='border-l-2 border-sky-300/50'
                                key={index}
                              >
                                <div className='flex'>
                                  <div className='bg-sky-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5'></div>
                                  <div className='block p-6 rounded-lg shadow-lg bg-blue-950 border border-sky-300/50 w-full max-w-[19rem] md:max-w-md lg:max-w-[27rem] xl:max-w-xl ml-6 mb-10'>
                                    <div className='flex justify-between mb-2'>
                                      <h3 className='font-medium text-white duration-500 transition ease-in-out text-xl'>
                                        {data.name}
                                      </h3>
                                      <h3 className='font-medium text-white duration-500 transition ease-in-out text-xl'>
                                        <CheckBadgeIcon
                                          width={28}
                                          height={28}
                                          className='text-sky-300'
                                        />
                                      </h3>
                                    </div>
                                    <p className='text-gray-300 mb-1'>
                                      {data.institute}
                                    </p>
                                    <p className='text-gray-300 mb-1'>
                                      {`Inicio: ${data.start} - Fin: ${data.end}`}
                                    </p>
                                    <p className='text-gray-300 mb-1'>
                                      {`Duración: ${data.duration}`}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))
                          : ""
                      )
                    : ""}
                </ol>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
        <h2 className='text-4xl text-center lg:text-left font-bold text-balance h-full w-full lg:w-96 px-5 py-5 order-1 lg:order-2'>
          Educación
        </h2>
      </section>
    </>
  )
}

export default Education
