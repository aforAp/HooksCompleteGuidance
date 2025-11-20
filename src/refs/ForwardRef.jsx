import React, {forwardRef, useRef} from 'react'

const Input = forwardRef((props, ref) => {
   return <input ref={ref} onChange={props.onChanges} />
})


const ForwardRef = () => {
    const ref = useRef();
function handleChange (){
    return ref.current.focus();
}
   return (
    <div>
      <Input ref={ref} onChanges={handleChange} />
    </div>
  )
}

export default ForwardRef
