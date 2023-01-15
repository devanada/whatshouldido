import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import { FC } from 'react';
import clsx from 'clsx';

import { TodoType } from 'utils/types/Todo';

const TodoCard: FC<TodoType> = ({
  id,
  content = '',
  description = '',
  onClickDelete,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="mb-4 flex break-inside-avoid flex-col gap-2 rounded-xl border border-dark-2 bg-light p-5 shadow-md shadow-black dark:bg-dark"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Link
        href={`?todo_id=${id}`}
        className="break-all text-xl font-bold text-dark dark:text-light"
      >
        {content.length > 50 ? content.slice(0, 50) + '...' : content}
      </Link>
      {description && (
        <p className="break-all text-base tracking-wider text-dark dark:text-light">
          {description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>
      )}
      <div
        className={clsx(
          'mt-4 flex justify-end text-dark dark:text-light',
          isHovering ? 'visible' : 'invisible'
        )}
      >
        <FaTrash className="mr-2 h-4 w-4 cursor-pointer" onClick={onClickDelete} />
      </div>
    </div>
  );
};

export default TodoCard;
