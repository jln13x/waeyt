import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { PrimaryLinkProps } from 'components/common/PrimaryLink';

interface SidebarItemProps extends PrimaryLinkProps {
  label: string;
  icon: IconType;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ href, label, icon: Icon }) => {
  const { asPath, push } = useRouter();
  const isActive = asPath === href;

  const onClick = () => push(href);

  const wrapperStyles = 'w-full p-6  hover:bg-opacity-10 flex gap-2';

  if (isActive) {
    return (
      <div className={`${wrapperStyles} bg-background-200 bg-opacity-10 text-white `}>
        <div className="center flex text-2xl text-emerald-300">
          <Icon />
        </div>
        <p className="text-xl font-bold">{label}</p>
      </div>
    );
  }

  return (
    <div
      className={`${wrapperStyles} cursor-pointer text-white text-opacity-60 hover:bg-background-200`}
      onClick={onClick}
    >
      <div className="flex items-center text-xl">
        <Icon />
      </div>
      <NextLink href={href} passHref>
        <a className="text-xl">{label}</a>
      </NextLink>
    </div>
  );
};
