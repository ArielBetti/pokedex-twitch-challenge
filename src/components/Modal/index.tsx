// icons
import { XMarkIcon } from "@heroicons/react/24/outline";

// types
import type { TModalProps } from "./types";

// radix: components
import * as Dialog from "@radix-ui/react-dialog";

// ::
const Modal = ({ children, modalTrigger, title }: TModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{modalTrigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 dark:bg-illusion-5/80 bg-illusion-4/80 motion-safe:animate-blurIn" />
        <Dialog.Content className="container mx-auto px-4 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl flex items-center justify-center">
          <div className="relative min-h-[400px] dark:bg-illusion-4 bg-illusion-5 dark:border-illusion-2 border-illusion-1 w-full rounded-md border p-4 shadow-xl motion-safe:animate-fadeIn md:max-w-2xl">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold capitalize">
                {title}
              </h1>
              <Dialog.Close className="absolute top-5 right-5">
                <XMarkIcon className="h-5 w-5" />
              </Dialog.Close>
            </div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
