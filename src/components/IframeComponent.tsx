import React, { useState } from 'react'
import { createPortal } from 'react-dom';

const IframeComponent = ({children} : any) => {
   const [ref, setRef] = useState<any>();
   const container = ref?.contentDocument?.body;
  return (
    <div>
      <iframe ref={setRef}>
      {container && createPortal(children, container)}
      </iframe>
    </div>
  )
}

export default IframeComponent;
