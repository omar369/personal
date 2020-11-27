//THREE JS APP...
console.log("ALL_RUNNIN_runin-in");
//add the basic (scene, camera & renderer):
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor( "#263238" );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//reize added:
window.addEventListener('resize', ()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );//updates size of canvas window
    camera.aspect =  window.innerWidth / window.innerHeight;//updates camera
    camera.updateProjectionMatrix(); //updates geom size
})

//create geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.z += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.x -= 0.005;

    renderer.render( scene, camera );
};

animate();

