import { Dialog, Transition } from '@headlessui/react';
import { FaTrash } from 'react-icons/fa';
import { FC, Fragment } from 'react';

import { TodoType } from 'utils/types/Todo';

interface Props {
  data: TodoType;
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onClickDelete?: () => void;
}

const Modal: FC<Props> = ({ id, data, isOpen, onClose, onClickDelete }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" id={id} className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-light p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                <Dialog.Title
                  as="h3"
                  className="break-all text-lg font-bold leading-6 tracking-wider text-dark dark:text-light"
                >
                  {data.content}
                </Dialog.Title>
                <div className="mt-4">
                  {data.description && (
                    <p className="break-all text-base tracking-wider text-dark dark:text-light">
                      {data.description}
                    </p>
                  )}
                  <div className="mt-4 flex justify-end text-dark dark:text-light">
                    <FaTrash
                      className="mr-2 h-4 w-4 cursor-pointer"
                      onClick={onClickDelete}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
