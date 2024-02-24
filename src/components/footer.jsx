const Footer = () => {
  return (
    <>
      <footer className='w-full'>
        <div className='flex flex-row gap-10 items-center justify-between max-w-screen-xl px-4 pt-5 pb-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 border-t border-sky-300/50'>
          <p className='mt-8 text-base leading-6 text-center text-gray-300'>
            Desarrollado por{" "}
            <a
              href='https://linkedin.com/in/leandroboos91/'
              target='_blank'
              rel='noopener norreferer'
              className='text-sky-300 hover:text-sky-500'
            >
              Leandro Boos
            </a>
            .
          </p>
          <div className='flex justify-center mt-8 space-x-6'>
            <a
              href='https://linkedin.com/in/leandroboos91/'
              target='_blank'
              rel='noopener norreferer'
              className='text-gray-300 hover:text-gray-500'
            >
              <span className='sr-only'>LinkedIn</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 74 74'
              >
                <path
                  fillRule='evenodd'
                  d='M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='https://github.com/leombpunk'
              target='_blank'
              rel='noopener norreferer'
              className='text-gray-300 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
