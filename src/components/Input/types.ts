import { InputHTMLAttributes } from "react";

export type TInputFeedback = {
  message: string;
};

export type TInput = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
