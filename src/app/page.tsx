"use client"

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from "@react-three/drei"
import Model from './Model'

export default function Home() {
  const gltfCanvasParentRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      <div
        ref={gltfCanvasParentRef}
        style={{ height: 1000 }}
      >
        <Canvas
          frameloop="demand"
          camera={{ fov: 20, near: 0.1, far: 300, position: [0, 1, -10] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
      </div>
    </main>
  )
}
