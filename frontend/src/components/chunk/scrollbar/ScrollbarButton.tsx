import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface ScrollbarButtonProps {
  direction: 'up' | 'down';
  onClick: () => void;
  isDisabled: boolean;
}

export const ScrollbarButton: React.FC<ScrollbarButtonProps> = ({ direction, onClick, isDisabled }) => {
  const Icon = direction === 'up' ? BiChevronUp : BiChevronDown;

  return (
    <div className="mx-auto flex grow items-center">
      <button
        onClick={() => !isDisabled && onClick()}
        className={`${isDisabled ? 'cursor-not-allowed text-opacity-40' : ''} text-lg text-emerald-300`}
        disabled={isDisabled}
      >
        <Icon />
      </button>
    </div>
  );
};
