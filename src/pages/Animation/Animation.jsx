import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Animation =() =>  {
    
    useEffect(() => {
        Aos.init();
    }, [])

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="bg-dark text-white p-5 m-5" data-aos="fade-right">
        <h2>Box 1</h2>
      </div>
      <div className="bg-dark text-white p-5 m-5" data-aos="fade-left">
        <h2>Box 2</h2>
      </div>
      <div className="bg-dark text-white p-5 m-5" data-aos="fade-down">
        <h2>Box 3</h2>
      </div>
    </div>
  );
}


export default Animation;
