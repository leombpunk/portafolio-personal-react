import { Disclosure } from "@headlessui/react"
import { Bars3Icon, CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Incio", href: "#presentation", current: true },
  { name: "Acerca de", href: "#aboutme", current: false },
  { name: "Proyectos", href: "#projects", current: false },
  { name: "Educación", href: "#education", current: false },
  { name: "Habilidades", href: "#skills", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const NavMenu = () => {
  return (
    <Disclosure
      as='nav'
      className='w-full bg-transparent backdrop-blur-sm fixed border-b border-sky-300/50 z-10'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center p-2 text-white hover:text-sky-300'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Abrir menú principal</span>
                  {open ? (
                    <XMarkIcon className='block h-8 w-8' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-8 w-8' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <a className='flex flex-shrink-0 items-center' href={navigation[0].href} title={navigation[0].name}>
                  <CodeBracketIcon className='h-10 w-auto text-sky-300 animate-pulse' title="Leandro Boos" />
                </a>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-sky-100 underline underline-offset-8"
                            : "text-sky-300 hover:text-white hover:underline underline-offset-8",
                          "px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-sky-100"
                      : "text-sky-300 hover:text-white",
                    "block px-3 py-2 text-2xl font-medium text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default NavMenu
