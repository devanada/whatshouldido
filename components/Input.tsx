import { InputHTMLAttributes, FC } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  id: string;
  error?: string;
  name?: string;
}

export const Input: FC<Props> = ({ id, error, register, name, ...props }) => {
  return (
    <input
      className="w-full rounded-xl border border-dark-2 bg-dark p-2 text-lg text-white shadow-black"
      id={id}
      {...(register ? register(name) : {})}
      {...props}
    />
  );
};
