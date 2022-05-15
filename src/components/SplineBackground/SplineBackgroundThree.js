import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";

export default function SplineBackgroundThree() {
  const [domRenderer, setDomRenderer] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      5,
      100000
    );

    camera.position.set(-250, 0, 0);
    // camera.position.y = -100;
    // camera.quaternion.setFromEuler(new THREE.Euler(-2.79, -0.66, -2.92));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
      "https://prod.spline.design/lUkhBKWkuhPOp7nf/scene.splinecode",
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    setDomRenderer(renderer.domElement);
    // ref.current.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color("#232323");
    renderer.setClearAlpha(1);

    scene.fog = new THREE.Fog("#232323", 205.128, 461.539);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  useEffect(() => {
    if (!domRenderer) return;
    ref.current.innerHTML = "";
    ref.current.appendChild(domRenderer);
  }, [domRenderer]);

  return <div ref={ref}></div>;
}
