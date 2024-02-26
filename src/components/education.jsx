import { Disclosure, Transition } from "@headlessui/react"

const Education = () => {
  return (
    <>
      <section
        id='education'
        className='flex flex-col lg:flex-row items-start justify-between gap-10 max-w-7xl w-full h-full mt-10 lg:mt-32 px-2 md:px-20 py-10 scroll-mt-16'
      >
        <div className='w-full h-full px-5 lg:px-10 py-5 text-balance flex flex-col gap-3 border-l-8 border-sky-300/50 bg-blue-900/45 rounded-md shadow-lg order-2 lg:order-1'>
          <ol>
            <li className='border-l-2 border-sky-300/50'>
              <div className='flex'>
                <div className='bg-sky-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5'></div>
                <div className='block p-6 rounded-lg shadow-lg bg-blue-950 border border-sky-300/50 max-w-[19rem] md:max-w-md lg:max-w-[27rem] xl:max-w-xl ml-6 mb-10'>
                  <div className='flex justify-between mb-4'>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      New Web Design
                    </h3>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      04 / 02 / 2022
                    </h3>
                  </div>
                  <p className='text-gray-300 mb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula.
                  </p>
                </div>
              </div>
            </li>
            <li className='border-l-2 border-sky-300/50'>
              <div className='flex'>
                <div className='bg-sky-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5'></div>
                <div className='block p-6 rounded-lg shadow-lg bg-blue-950 border border-sky-300/50 max-w-[19rem] md:max-w-md lg:max-w-[27rem] xl:max-w-xl ml-6 mb-10'>
                  <div className='flex justify-between mb-4'>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      21 000 Job Seekers
                    </h3>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      12 / 01 / 2022
                    </h3>
                  </div>
                  <p className='text-gray-300 mb-6'>
                    Libero expedita explicabo eius fugiat quia aspernatur autem
                    laudantium error architecto recusandae natus sapiente sit
                    nam eaque, consectetur porro molestiae ipsam an deleniti.
                  </p>
                </div>
              </div>
            </li>
            <li className='border-l-2 border-sky-300/50'>
              <div className='flex'>
                <div className='bg-sky-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5'></div>
                <div className='block p-6 rounded-lg shadow-lg bg-blue-950 border border-sky-300/50 max-w-[19rem] md:max-w-md lg:max-w-[27rem] xl:max-w-xl ml-6 mb-10'>
                  <div className='flex justify-between mb-4'>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      Awesome Employers
                    </h3>
                    <h3 className='font-medium text-white duration-500 transition ease-in-out text-sm'>
                      21 / 12 / 2021
                    </h3>
                  </div>
                  <p className='text-gray-300 mb-6'>
                    Voluptatibus temporibus esse illum eum aspernatur, fugiat
                    suscipit natus! Eum corporis illum nihil officiis tempore.
                    Excepturi illo natus libero sit doloremque, laborum
                    molestias rerum pariatur quam ipsam necessitatibus incidunt,
                    explicabo.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <h2 className='text-4xl text-center lg:text-left font-bold text-balance h-full w-full lg:w-96 px-5 py-5 order-1 lg:order-2'>
          Educación
        </h2>
      </section>
    </>
  )
}

export default Education
