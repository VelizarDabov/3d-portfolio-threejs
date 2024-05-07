import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
const Home = () => {
  const islandSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale, rotation];
  };
  const [ islandPosition,islandScale, islandRotation] = islandSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
