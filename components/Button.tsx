import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id: string;
}

const Button: FC<Props> = ({ label, id, ...props }) => {
  return (
    <button
      className="rounded-xl border border-dark-2 bg-dark p-2 text-lg font-bold text-white shadow-black"
      id={id}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
