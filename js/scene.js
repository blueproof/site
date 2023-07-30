
import * as THREE from './lib/three.js';
import { OrbitControls } from './lib/OrbitControls.js';
import { GLTFLoader } from './lib/GLTFLoader.js';

const canvas = document.querySelector("#interactive-model");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.maxPolarAngle = Math.PI / 2;
const CAMERA_0 = [0, 20, 28];
camera.position.set(...CAMERA_0);
camera.lookAt(0, 1, 0);
controls.update();

function updateMaterials(root, update) {
    const stack = [root];
    while (stack.length !== 0) {
        const item = stack.pop();
        if (item.isMesh) {
            update(item);
        }
        stack.push(... (item.children));
    }
}
const loader = new GLTFLoader();
let MAIN_SCENE;
const url = new URL('../res/models/scene_opt.glb', import.meta.url)
loader.load(url.pathname, function (gltf) {
    MAIN_SCENE = gltf.scene;
    MAIN_SCENE.position.set(0, -2, 0);
    updateMaterials(MAIN_SCENE, (item) => {
        item.material.roughness = 0.8;
        item.castShadow = true;
        item.receiveShadow = true;
    })
    scene.add(MAIN_SCENE);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.07);
    const light2 = new THREE.PointLight(new THREE.Color(255, 255, 255), 0.005);
    light2.position.set(0, 25, 2);
    light2.castShadow = true;
    light2.shadow.radius = 15;
    light2.shadow.camera.near = 6;
    light2.shadow.camera.far = 30;
    light2.shadow.mapSize = new THREE.Vector2(1024, 1024);
    light2.shadow.bias = -0.005;
    const light3 = new THREE.PointLight(new THREE.Color(255, 236, 225), 0.003);
    light3.position.set(0, 10, -13);
    light3.castShadow = true;
    light3.shadow.radius = 1;
    light3.shadow.camera.near = 1;
    light3.shadow.camera.far = 30;
    light3.shadow.mapSize = new THREE.Vector2(1024, 1024);
    light3.shadow.bias = -0.004;

    scene.add(ambientLight)
    scene.add(light2)
    scene.add(light3);
    render();

}, undefined, function (error) {

    console.error(error);

});

window.addEventListener("resize", render, false);
controls.addEventListener("change", render)

function render_(n) {
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        if (canvas.clientWidth <= 500) {
            camera.fov = 50;
        } else {
            camera.fov = 35;
        }
        camera.updateProjectionMatrix();
    }
    controls.update();
    renderer.render(scene, camera);
}
function render() {
    requestAnimationFrame(render_);
}
render();