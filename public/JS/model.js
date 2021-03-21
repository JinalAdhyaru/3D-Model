var scene = new THREE.Scene();
scene.background = new THREE.Color(0xD3D3D3);
var camera = new THREE.PerspectiveCamera(30, (window.innerWidth)/(window.innerHeight), 50, 1000);
camera.position.set(0,150,-300);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);


//controls.autoRotate = true;

var ambientLight = new THREE.AmbientLight(0xe3dac9); // soft white light
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xf5c693, 0.8);
pointLight.position.set(-10, 20, -70);
scene.add(pointLight);

var loader = new THREE.STLLoader();
loader.load('STL/Shoulder_Bone.stl', function (geometry) {
    var material = new THREE.MeshPhongMaterial({color: 0xA9A9A9});
    var bone = new THREE.Mesh(geometry, material);
    bone.position.set(50, -75,750);
    scene.add(bone);
});

//logic 
// var update = function() {
    
// };

// var gridXZ = new THREE.GridHelper(100, 100);
// gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
// scene.add(gridXZ);


// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);



//draw scene
var render = function() {
    renderer.render(scene,camera);
};

//run loop (update,render,repeat)
var loop = function() {
    requestAnimationFrame(loop);
    controls.update();
    render();
};

loop();