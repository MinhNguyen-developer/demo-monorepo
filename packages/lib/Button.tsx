import React from "react";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  return <button {...props}>{props.children}</button>;
}

export default Button;
