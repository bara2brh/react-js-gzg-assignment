import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    onClose:()=>void;
}

const Alert = ({children,onClose}:Props) =>
 <>
    
    <div className='alert alert-primary alert-dismissible'>{children}

    <button type="button" onClick={onClose}  className="btn-close" data-dismiss="alert" aria-label="Close"/>

    </div>

  </>


export default Alert