import { useSpring, config, a } from "@react-spring/three";
import {
  CameraControls,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh, Object3D } from "three";

const Scene = () => {
  const meshRef = useRef<Mesh>(null);
  const springMesh = useSpring({
    from: {
      rotation: [0, 0, 0],
    },
    to: {
      rotation: [2 * Math.PI, 2 * Math.PI, 2 * Math.PI],
    },
    loop: true,
    config: { duration: 10000 },
  });

  return (
    <group>
      <Float rotationIntensity={3} speed={3}>
        <PresentationControls>
          <a.mesh ref={meshRef} position-y={window.innerWidth >= 1024 ? 0: -1.5} rotation={springMesh.rotation as any}>
            <icosahedronGeometry />
            <meshStandardMaterial
              color={"#6025b8"}
              metalness={1}
              roughness={0}
            />
          </a.mesh>
        </PresentationControls>
      </Float>
      <Environment preset="city" />
    </group>
  );
};

export default Scene;
