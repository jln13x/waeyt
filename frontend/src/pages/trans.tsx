import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

const Trans: React.FC<AppProps> = ({ children }) => {
  return <>{children}</>;
};

export default appWithTranslation(Trans);
