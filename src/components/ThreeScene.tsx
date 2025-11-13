import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
interface ThreeSceneProps {
  className?: string;
}
export const ThreeScene: React.FC<ThreeSceneProps> = ({
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameId = useRef<number | null>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    // Create orange abstract shapes
    const createShape = () => {
      const geometry = new THREE.IcosahedronGeometry(1, 0);
      const material = new THREE.MeshPhongMaterial({
        color: 0xff6600,
        emissive: 0xff3300,
        emissiveIntensity: 0.2,
        specular: 0xffffff,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
        wireframe: Math.random() > 0.7
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.scale.set(Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1);
      // Add custom properties for animation
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: (Math.random() - 0.5) * 0.01,
        floatAmplitude: Math.random() * 0.5,
        initialY: mesh.position.y,
        timeOffset: Math.random() * 100
      };
      return mesh;
    };
    // Add shapes to scene
    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const shape = createShape();
      scene.add(shape);
      shapes.push(shape);
    }
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0xff9900, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);
    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      // Animate shapes
      shapes.forEach(shape => {
        // Rotation animation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        // Floating animation
        const floatY = Math.sin(time + shape.userData.timeOffset) * shape.userData.floatAmplitude;
        shape.position.y = shape.userData.initialY + floatY;
      });
      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);
  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};