//THREE JS APP...
import {OrbitControls} from './threeJS/OrbitControls.js';
import {GLTFLoader} from './threeJS/GLTFLoader.js';


//add the basic (scene, camera & renderer):
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor( "#263238" );
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild( renderer.domElement );

//reize added:
window.addEventListener('resize', ()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );//updates size of canvas window
    camera.aspect =  window.innerWidth / window.innerHeight;//updates camera
    camera.updateProjectionMatrix(); //updates geom size
})

//Light
var lightAmbient = new THREE.AmbientLight( 0x404040 );
scene.add(lightAmbient);

//loader Model...
// var loader = new GLTFLoader();
// loader.load("./modelos-3d/brichTree/scene.gltf", function(gltf){
//     scene.add(gltf.scene);
//     renderer.render( scene, camera );
// });

//create geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//controles orbitales
var controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 6;//zoom min
// controls.maxDistance = 8;//zoom max
controls.enableDamping = true;//rapidez de control
controls.dampingFactor = 0.3;//cantidad 

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.y += 0.005;    

    renderer.render( scene, camera );
};

animate();

