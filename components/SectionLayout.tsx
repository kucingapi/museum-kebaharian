import React, { FC } from 'react';

interface section {
  className: String;
  style?: React.CSSProperties;
}

export const SectionLayout: FC<section> = (props) => {
  return (
    <div style={props.style} className={`overflow-clip min-h-screen relative ${props.className}`}>
      {props.children}
    </div>
  );
};
