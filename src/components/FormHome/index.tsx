import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { FormProps } from "./data";

export const FormHome = (props: FormProps) => {
  useEffect(() => {}, []);

  const [teste,setTest] = useState();

  return <Layout {...props} />;
};
