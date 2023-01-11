import { FC } from "react";

import { TodoType } from "utils/types/Todo";

const TodoCard: FC<TodoType> = ({ content, description, created_at }) => {
  return (
    <div className="mb-2 break-inside-avoid rounded-xl border border-dark-2 bg-dark p-5 shadow-lg shadow-black">
      <p className="break-all text-xl font-bold text-white">{content}</p>
      <p className="break-all text-base tracking-wider text-white">
        {description}
      </p>
      <p className="text-sm text-white">{created_at}</p>
    </div>
  );
};

export default TodoCard;
