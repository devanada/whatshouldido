import { FC, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id: string;
}

const Button: FC<Props> = ({ label, id, ...props }) => {
  return (
    <button
      className="w-full rounded-xl border border-dark-2 bg-light p-2 text-lg font-bold capitalize text-dark-2 shadow-md shadow-black dark:bg-dark-2 dark:text-light"
      id={id}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
