type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`hover:text-white cursor-pointer text-[#27374F] h-[65px] rounded-[100px] btn-fill-bg ${className ? className : 'bg-white font-semibold w-[245px]'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;