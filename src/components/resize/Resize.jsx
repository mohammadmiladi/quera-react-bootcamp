import { useEffect } from "react";
import Card from "../common/Card";

const Resize = () => {
  useEffect(() => {
    const handleSize = () => {
      console.log("window size:", window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    }; // for remove listener in Unmount
  }, []);

  return (
    <Card>
      <p>resize component</p>
    </Card>
  );
};

export default Resize;
