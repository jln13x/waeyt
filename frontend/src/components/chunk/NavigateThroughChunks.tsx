import { PrimaryButton } from 'components/common/button/PrimaryButton';
import React from 'react';

interface NavigateThroughChunksProps {
  text: string;
  onClick: () => void;
}

export const NavigateThroughChunks: React.FC<NavigateThroughChunksProps> = ({ text, onClick }) => {
  return (
    <PrimaryButton
      className="mx-auto flex w-fit bg-black bg-opacity-30 focus-within:bg-black focus-within:bg-opacity-60 hover:bg-black hover:bg-opacity-60"
      onClick={onClick}
    >
      {text}
    </PrimaryButton>
  );
};
