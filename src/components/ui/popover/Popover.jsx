import { useEffect, useRef } from 'react';
// import styles from './popover.module.scss';

export function Popover({ open, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => removeEventListener('mousedown', handleClickOutside)
  }, [open, onClose])

  if (!open) return null;

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
