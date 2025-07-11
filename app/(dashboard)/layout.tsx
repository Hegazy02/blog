import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div>Dashboard Layout</div>
        {children}
      </body>
    </html>
  );
};

export default layout;
