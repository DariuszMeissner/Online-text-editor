/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react'

export function useOutClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent | null) => {
      const target = e?.target

      if (
        target instanceof HTMLElement &&
        ref.current &&
        !ref.current.contains(target)
      ) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}
