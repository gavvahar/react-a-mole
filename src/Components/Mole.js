import { useEffect } from "react";

const Mole = (props) => {
  useEffect(() => {
    let randSeconds = Math.cell(Math.random() * 10000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
};

export default Mole;
