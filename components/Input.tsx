import { InputHTMLAttributes, FC } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  id: string;
  error?: string;
  name?: string;
}

export const Input: FC<Props> = ({ id, error, register, name, ...props }) => {
  return (
    <input
      className="w-full rounded-xl border border-dark-2 bg-light p-2 text-lg text-dark-2 shadow-md shadow-black dark:bg-dark-2 dark:text-light"
      id={id}
      {...(register ? register(name) : {})}
      {...props}
    />
  );
};

export const TextArea: FC<Props> = ({ id, error, register, name, ...props }) => {
  return (
    <textarea
      className="w-full rounded-xl border border-dark-2 bg-light p-2 text-lg text-dark-2  shadow-md shadow-black dark:bg-dark-2 dark:text-light"
      id={id}
      {...(register ? register(name) : {})}
      {...props}
    />
  );
};
