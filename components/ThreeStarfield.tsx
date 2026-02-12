'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeStarfield = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let particles: THREE.Points;
        let material: THREE.PointsMaterial;
        let animationFrameId: number;

        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const init = () => {
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000);
            camera.position.z = 500;

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            const size = 2000;

            for (let i = 0; i < 20000; i++) {
                const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
                const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
                const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
                vertices.push(x, y, z);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            material = new THREE.PointsMaterial({
                size: 2,
                color: 0xffffff,
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);

            if (mountRef.current) {
                mountRef.current.appendChild(renderer.domElement);
            }

            window.addEventListener('resize', onWindowResize);
            window.addEventListener('pointermove', onPointerMove);
        };

        const onPointerMove = (event: PointerEvent) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        const onWindowResize = () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
            camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;

            renderer.render(scene, camera);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('pointermove', onPointerMove);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current) {
                mountRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-[0]" />;
};

export default ThreeStarfield;
