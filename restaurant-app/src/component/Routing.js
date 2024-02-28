import {React,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Routing(props) {
    let Component=props.cmp;
    const navigate=useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("signup")) {
          navigate("/")
        }
      }, [])
  return (
    <div>
      <Component/>
    </div>
  );
}
