interface NavigatorIconProps {
  onClick: Function;
}

export const NavigatorIcon: React.FC<NavigatorIconProps> = ({ children, onClick }) => {
  return (
    <div
      className="text-4xl cursor-pointer text-violet-700 hover:text-violet-300"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};
