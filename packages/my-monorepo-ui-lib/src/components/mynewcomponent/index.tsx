import React from "react";

export interface MyNewComponentProps {
  text: string;
}

export const MyNewComponent = (props: MyNewComponentProps) => {
  return <span>{props.text} That is a 12 modification inside the lib</span>;
};

export default MyNewComponent;
