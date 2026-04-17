import { useEffect,useState} from "react";

let CurrentTime = () => {
   const [time,setTime]=  useState(new Date());
   console.log("Current Time painted");
   
    useEffect(()=>{
     console.log("interval has been setup");   
     const intervalId= setInterval(()=>{
     setTime(new Date());
     },1000);

      return ()=>{
        clearInterval(intervalId);
        console.log("cancelled the interval");
      }
    },[]);
  

  return (
    <p className="lead">
      {" "}
      This is the current time:{time.toLocaleTimeString()} -
      {time.toLocaleDateString()}{" "}
    </p>
  );
};
export default CurrentTime;

