import Trans from 'components/Trans';
import { queryClient } from 'config/queryClient';
import { BreadcrumbContext } from 'context/BreadcrumbContext';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { AppProps } from 'next/app';
import Image from 'next/image';
import { useState } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'theme/fonts';
import { Sidebar } from '../components/sidebar/Sidebar';
import backgroundImage from '../public/background.jpg';
import '@popperjs/core';
dayjs.extend(utc);

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [page, setPage] = useState<string>();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="fixed top-0">
        {/* <Image src={backgroundImage} width={1920} height={1440} className="z-0 h-screen object-cover blur-sm" /> */}
      </div>
      <div className="relative">
        <div className="flex bg-background-500 bg-opacity-[90%]">
          <BreadcrumbContext.Provider value={{ setPage }}>
            <div className="sticky top-0 max-h-screen w-[10vw] justify-center bg-background-700">
              <Sidebar />
            </div>
            <div className="grow">
              <div className="sticky top-0 z-[9999] flex h-[5vh] w-full items-center justify-between border-b-white bg-background-600 px-4 text-white drop-shadow-lg">
                <p>Page Name</p>
                <FaUserAstronaut />
              </div>
              <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter>
                  <m.div
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    key={router.route}
                    className="h-[95vh] min-h-[95vh]"
                  >
                    <div className="text-white"></div>
                    <Trans Component={Component} pageProps={pageProps} router={router} />
                  </m.div>
                </AnimatePresence>
              </LazyMotion>
            </div>
          </BreadcrumbContext.Provider>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
