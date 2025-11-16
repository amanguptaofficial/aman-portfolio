import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import './Developer3D.css'

function DeveloperModel() {
  const { scene } = useGLTF('/developer-model.glb')
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return <primitive ref={modelRef} object={scene} scale={1.2} position={[0, -1, 0]} />
}

function CodeDisplay({ position, rotation }) {
  const codeRef = useRef()
  const lineRefs = useRef([])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (codeRef.current) {
      codeRef.current.position.y = (time * 0.1) % 0.8 - 0.4
    }
    
    lineRefs.current.forEach((line, index) => {
      if (line) {
        const typingProgress = (time * 2 + index * 0.3) % 1
        line.scale.x = typingProgress
        if (typingProgress > 0.9) {
          line.material.emissiveIntensity = 0.8 + Math.sin(time * 10) * 0.2
        }
      }
    })
  })

  const codeLines = Array.from({ length: 12 }, (_, i) => i)

  return (
    <group ref={codeRef} position={position} rotation={rotation}>
      {codeLines.map((index) => {
        const lineLength = 0.3 + (index % 3) * 0.1
        const yPos = -index * 0.06
        return (
          <mesh
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            position={[-0.2, yPos, 0]}
          >
            <boxGeometry args={[lineLength, 0.008, 0.001]} />
            <meshStandardMaterial 
              color="#00ff88" 
              emissive="#00ff88"
              emissiveIntensity={0.6}
            />
          </mesh>
        )
      })}
      
      {[1, 4, 7, 10].map((index) => (
        <mesh
          key={`highlight-${index}`}
          position={[-0.2, -index * 0.06, 0.0005]}
        >
          <boxGeometry args={[0.15, 0.008, 0.001]} />
          <meshStandardMaterial 
            color="#4a9eff" 
            emissive="#4a9eff"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

function EnhancedDeveloper() {
  const groupRef = useRef()
  const headRef = useRef()
  const laptopRef = useRef()
  const leftArmUpperRef = useRef()
  const leftArmLowerRef = useRef()
  const rightArmUpperRef = useRef()
  const rightArmLowerRef = useRef()
  const leftHandRef = useRef()
  const rightHandRef = useRef()
  const screenGlowRef = useRef()
  const cursorRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 1.2) * 0.2
      groupRef.current.position.x = Math.sin(time * 0.5) * 0.05
      groupRef.current.rotation.y = Math.sin(time * 0.6) * 0.2
    }
    
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(time * 0.8) * 0.08
      headRef.current.rotation.y = Math.sin(time * 0.4) * 0.05
    }
    
    if (leftArmLowerRef.current) {
      const typingOffset = Math.sin(time * 8) * 0.05
      leftArmLowerRef.current.rotation.z = 0.2 + typingOffset
      leftArmLowerRef.current.position.y = 0.85 + typingOffset * 0.3
    }
    
    if (rightArmLowerRef.current) {
      const typingOffset = Math.sin(time * 8 + Math.PI) * 0.05
      rightArmLowerRef.current.rotation.z = -0.2 + typingOffset
      rightArmLowerRef.current.position.y = 0.85 + typingOffset * 0.3
    }
    
    if (leftHandRef.current) {
      leftHandRef.current.rotation.x = Math.sin(time * 10) * 0.1
    }
    if (rightHandRef.current) {
      rightHandRef.current.rotation.x = Math.sin(time * 10 + Math.PI) * 0.1
    }
    
    if (screenGlowRef.current) {
      screenGlowRef.current.material.emissiveIntensity = 0.5 + Math.sin(time * 3) * 0.3
    }
    
    if (laptopRef.current) {
      laptopRef.current.material.emissiveIntensity = 0.2 + Math.sin(time * 2) * 0.15
    }
    
    if (cursorRef.current) {
      cursorRef.current.material.emissiveIntensity = Math.sin(time * 3) > 0 ? 1 : 0.2
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={headRef} position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      <mesh position={[0, 1.75, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial 
          color="#2c1810" 
          roughness={0.9}
          metalness={0}
        />
      </mesh>
      
      <mesh position={[0, 1.4, 0.25]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial 
          color="#2c1810" 
          roughness={0.9}
        />
      </mesh>
      
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.65, 0.85, 0.45]} />
        <meshStandardMaterial 
          color="#4a90e2" 
          roughness={0.6}
          metalness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 0.9, 0.23]}>
        <boxGeometry args={[0.65, 0.85, 0.01]} />
        <meshStandardMaterial 
          color="#5ba0f2" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh position={[0, 0.65, 0.35]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.6, 0.35, 0.08]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      
      <mesh ref={laptopRef} position={[0, 0.75, 0.38]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.55, 0.32, 0.02]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      <mesh position={[0, 0.75, 0.39]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.5, 0.28, 0.01]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          emissive="#0a0a0a"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh ref={screenGlowRef} position={[0, 0.75, 0.395]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.48, 0.26, 0.005]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <CodeDisplay 
        position={[-0.2, 0.75, 0.396]} 
        rotation={[-0.25, 0, 0]}
      />
      
      <mesh ref={cursorRef} position={[0.15, 0.68, 0.396]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[0.015, 0.025, 0.006]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88"
          emissiveIntensity={1}
        />
      </mesh>
      
      <mesh ref={leftArmUpperRef} position={[-0.38, 1.1, 0]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.08, 0.25, 4, 8]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh ref={leftArmLowerRef} position={[-0.5, 0.85, 0]} rotation={[0, 0, 0.2]}>
        <capsuleGeometry args={[0.07, 0.2, 4, 8]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh ref={leftHandRef} position={[-0.55, 0.7, 0.15]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.06, 0.08, 0.04]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh ref={rightArmUpperRef} position={[0.38, 1.1, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.08, 0.25, 4, 8]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh ref={rightArmLowerRef} position={[0.5, 0.85, 0]} rotation={[0, 0, -0.2]}>
        <capsuleGeometry args={[0.07, 0.2, 4, 8]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh ref={rightHandRef} position={[0.55, 0.7, 0.15]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.06, 0.08, 0.04]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh position={[-0.22, 0.15, 0]}>
        <capsuleGeometry args={[0.1, 0.65, 4, 8]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          roughness={0.8}
        />
      </mesh>
      
      <mesh position={[0.22, 0.15, 0]}>
        <capsuleGeometry args={[0.1, 0.65, 4, 8]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          roughness={0.8}
        />
      </mesh>
      
      <mesh position={[-0.22, -0.25, 0.1]}>
        <boxGeometry args={[0.2, 0.15, 0.3]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
      <mesh position={[0.22, -0.25, 0.1]}>
        <boxGeometry args={[0.2, 0.15, 0.3]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
      
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.12, 32]} />
        <meshStandardMaterial 
          color="#8b7355" 
          roughness={0.7}
        />
      </mesh>
      
      <mesh position={[0, 0.3, -0.3]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.7, 0.6, 0.1]} />
        <meshStandardMaterial 
          color="#6b5b45" 
          roughness={0.7}
        />
      </mesh>
    </group>
  )
}

const Developer3D = () => {
  return (
    <div className="developer-3d-container">
      <Canvas
        camera={{ position: [0, 1.2, 5.5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2}
          />
          
          <directionalLight 
            position={[-5, 3, -5]} 
            intensity={0.4}
            color="#4a90e2"
          />
          
          <pointLight 
            position={[0, 3, -8]} 
            intensity={0.6}
            color="#ffffff"
          />
          
          <spotLight
            position={[2, 2, 3]}
            angle={0.3}
            penumbra={0.5}
            intensity={0.8}
            color="#00ff88"
          />
          
          <Environment preset="sunset" />
          
          <EnhancedDeveloper />
          
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.2}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI / 1.8}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Developer3D

