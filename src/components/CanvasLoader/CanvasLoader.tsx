import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className="canvasLoader flex flex-col justify-center items-center"
    >
      <span className='canvas-loader'></span>
      <p className="font-[1rem] text-white font-bol mt-[40px]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;