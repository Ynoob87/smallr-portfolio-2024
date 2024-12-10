import { FC } from "react";
import { BaseProps } from "@/types/components";

const Background: FC<BaseProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default Background;
