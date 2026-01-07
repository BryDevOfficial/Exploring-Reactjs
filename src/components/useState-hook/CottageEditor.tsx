import { useState } from 'react'

interface EditorProps {
    initialName: string;
    initialPrice: number;
}

function CottageEditor({initialName, initialPrice, ...rest}: EditorProps) {
  return (
    <div>CottageEditor</div>
  )
}

export default CottageEditor