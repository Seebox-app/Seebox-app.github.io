import React, { PropsWithChildren } from "react";

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="mb-4">{children}</p>
);
