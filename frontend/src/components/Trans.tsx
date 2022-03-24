import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';

const Trans: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(Trans);
