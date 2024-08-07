'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthPage = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const { data: session } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await signIn('credentials', {
      ...data,
      redirect: false,
    });
  };

  useEffect(() => {
    if (session?.user) {
      redirect('/');
    }
  }, [session]);

  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
          <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
            <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
                Sign in to your account
              </h1>
              <form className='space-y-4 md:space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={data.email}
                    onChange={handleChange}
                    className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                    placeholder='name@company.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    value={data.password}
                    onChange={handleChange}
                    className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex h-5 items-center'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline'
                  >
                    password?
                  </a>
                </div>
                <button
                  className='hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                  onClick={() => signIn('github')}
                >
                  Github
                </button>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                >
                  Sign in
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?{' '}
                  <a
                    href='#'
                    className='text-primary-600 dark:text-primary-500 font-medium hover:underline'
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
