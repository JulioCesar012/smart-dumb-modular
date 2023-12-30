import { FormEvent } from "react";

export interface FormProps {
    handleSubmit: (e: FormEvent) => void;
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
  }

export interface LayoutFormProps extends FormProps {}