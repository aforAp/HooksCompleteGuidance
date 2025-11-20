import { useRef, forwardRef, useState } from "react";


 const MyInput = forwardRef((props, ref) => {
    return <input ref={ref} value={props.data} onChange={props.onChange}/>;
  });
const ForwardRef = () => {
  const ref = useRef();
  const [datas, setDatas] = useState("");

  // Correct forwardRef syntax: (props, ref)

  const DataUpdates = (event) => {
    setDatas(event.target.value);
  };

  return (
    <div>
      <MyInput ref={ref} data={datas} onChange={DataUpdates} />
    </div>
  );
};

export default ForwardRef;