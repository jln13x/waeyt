const defaultPlaceholder = 'Select...';

export const Placeholder: React.FC<{ text?: string }> = ({ text }) => {
  return <p className="text-white text-opacity-30">{text || defaultPlaceholder}</p>;
};
