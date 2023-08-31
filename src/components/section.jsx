import React from 'react';

export const Section = props => {
 
  return (
    <>
      <p>{props.title}</p>
      {props.children}
    </>
  )
};




export default Section;
