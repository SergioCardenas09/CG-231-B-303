//medidas de la pantalla

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//render y Visializacion
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

//camara perspectiva
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

//Orbit control
var controls = new THREE.OrbitControls(camera, renderer.domElement);

//luz ambiental y direccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 10);
scene.add(ambientLight);
scene.add(directionalLight);

//grilla 
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//Creacion de la figura parametro numero de lados, ladosigual y altura
const figura = prisma(10,5,5);

//agregamos la figura a la escena 
scene.add(figura);

//funcion de imagen  y render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
