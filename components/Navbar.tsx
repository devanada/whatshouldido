import {
  FaSun,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaListAlt,
} from 'react-icons/fa';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeContext } from 'utils/context';

const Navbar = () => {
  const router = useRouter();
  const accessToken = getCookie('access_token');
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = (mode: string) => {
    setTheme(mode);
    setCookie('theme', mode);
  };

  function handleAuth() {
    if (accessToken) {
      deleteCookie('access_token');
    }
    router.push('/login');
  }

  return (
    <nav className="sticky top-0 z-50 mb-6 flex min-h-navbar w-full justify-center border-b bg-light/95 dark:border-b-dark-2 dark:bg-dark/95">
      <div className="container flex h-full items-center justify-between rounded-b-2xl p-3">
        <Link
          href="/"
          className="dark:light text-2xl font-bold text-dark dark:text-light"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width="200"
            height="200"
            className="object-contain"
          />
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-50 px-4 py-2 text-sm font-medium text-light hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <FaChevronDown
                className="h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-dark rounded-md bg-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-light dark:bg-dark">
              <div className="px-1 py-1">
                {accessToken && (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-dark text-light dark:bg-light dark:text-dark'
                            : 'text-dark dark:text-light'
                        } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        id="btn-mode"
                        onClick={() => router.push('/home')}
                      >
                        <FaListAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                        My Task
                      </button>
                    )}
                  </Menu.Item>
                )}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-dark text-light dark:bg-light dark:text-dark'
                          : 'text-dark dark:text-light'
                      } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      id="btn-mode"
                      onClick={() => handleTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      {theme === 'dark' ? (
                        <FaSun className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FaMoon className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-dark text-light dark:bg-light dark:text-dark'
                          : 'text-dark dark:text-light'
                      } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      id="btn-logout"
                      onClick={() => handleAuth()}
                    >
                      {accessToken ? (
                        <FaSignOutAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FaSignInAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      {accessToken ? 'Logout' : 'Login'}
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
