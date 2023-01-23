import { Dispatch, SetStateAction, type ReactNode } from "react";

export type TModalProps = {
  children: ReactNode,
  modalTrigger?: ReactNode,
  title: string,
};
