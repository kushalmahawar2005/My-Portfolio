'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { useRef } from 'react'

const ThreeScene = () => {
  const sphereRef = useRef()

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere ref={sphereRef} args={[1, 32, 32]}>
        <meshStandardMaterial color="#4285f4" wireframe />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ThreeScene 