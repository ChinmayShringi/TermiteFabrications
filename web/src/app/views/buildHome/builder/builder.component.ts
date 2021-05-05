import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as dat from 'dat.gui'
declare var $:any;
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')
const addSphere = document.querySelector('a.addCircle')
const addCuboid = document.querySelector('a.addCube')
const addTemp1 = document.querySelector('a.addTemp1')
const addTemp2 = document.querySelector('a.addTemp2')
const addTemp3 = document.querySelector('a.addTemp3')
const addTemp4 = document.querySelector('a.addTemp4')
const addTemp5 = document.querySelector('a.addTemp5')
const addTemp6 = document.querySelector('a.addTemp6')
const addTemp7 = document.querySelector('a.addTemp7')
let ind=0
let planes:any=[]
let inds=0
let spheres:any=[]

// colorPicker



// Add Data Components
function addCub(){
  const geometry = new THREE.BoxGeometry( 8,1,20);
    var material = new THREE.MeshBasicMaterial();
  planes[ind] = new THREE.Mesh(geometry,material)
  scene.add(planes[ind])
  var f=gui.addFolder('Cuboid '+(ind+1));
  var f1 = gui.addFolder('CSize'+(ind+1));
  f1.add(planes[ind].scale,'x').min(0).max(10)
  f1.add(planes[ind].scale,'y').min(0).max(10)
  f1.add(planes[ind].scale,'z').min(0).max(10)
  var f2=gui.addFolder('CPosition'+(ind+1));
  f2.add(planes[ind].position,'x').min(0).max(10)
  f2.add(planes[ind].position,'y').min(0).max(10)
  f2.add(planes[ind].position,'z').min(0).max(10)
  var f3 = gui.addFolder('CRotation'+(ind+1));
  f3.add(planes[ind].rotation,'x').min(0).max(10)
  f3.add(planes[ind].rotation,'y').min(0).max(10)
  f3.add(planes[ind].rotation,'z').min(0).max(10)
  gui.addColor( planes[ind].material, 'color') 
  ind=ind+1
}
addCuboid!.addEventListener('click',addCub)

function addSph(){
  const geometry = new THREE.SphereGeometry( 5, 32, 32 );
  const material = new THREE.MeshBasicMaterial();
  spheres[inds] = new THREE.Mesh(geometry,material)
  spheres[ind].position.x=10
  scene.add(spheres[inds])
  var f=gui.addFolder('Sphere '+(inds+1));
  var f1 = gui.addFolder('SSize'+(inds+1));
  f1.add(spheres[inds].scale,'x').min(0).max(10)
  f1.add(spheres[inds].scale,'y').min(0).max(10)
  f1.add(spheres[inds].scale,'z').min(0).max(10)
  var f2=gui.addFolder('SPosition'+(inds+1));
  f2.add(spheres[inds].position,'x').min(0).max(10)
  f2.add(spheres[inds].position,'y').min(0).max(10)
  f2.add(spheres[inds].position,'z').min(0).max(10)
  var f3 = gui.addFolder('SRotation'+(inds+1));
  f3.add(spheres[inds].rotation,'x').min(0).max(10)
  f3.add(spheres[inds].rotation,'y').min(0).max(10)
  f3.add(spheres[inds].rotation,'z').min(0).max(10)
  gui.addColor( spheres[inds].material, 'color') 
  inds=inds+1
}
addSphere!.addEventListener('click',addSph)




// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xcfcfcf)
// Objects
const geometry = new THREE.BoxGeometry( 50,0.1,50);

// Materials

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xeedede)

// Mesh
const plane = new THREE.Mesh(geometry,material)
scene.add(plane)
// 

var temp:any=[]
var indt=0
const loader = new GLTFLoader();

function addTemp(house:any){
  loader.load(
	"../assets/"+house+"/scene.gltf",
	function ( gtlf ) {
		scene.add( gtlf.scene );
    console.log(gtlf);
    var prop=gtlf.scene
    prop.scale.x=0.03
    prop.scale.y=0.03
    prop.scale.z=0.05
    gui.addFolder('Template '+(indt+1));
    var f1 = gui.addFolder('TSize'+(indt+1));
    f1.add(prop.scale,'x').min(0).max(1)
    f1.add(prop.scale,'y').min(0).max(1)
    f1.add(prop.scale,'z').min(0).max(1)
    var f2=gui.addFolder('TPosition'+(indt+1));
    f2.add(prop.position,'x').min(0).max(10)
    f2.add(prop.position,'y').min(0).max(10)
    f2.add(prop.position,'z').min(0).max(10)
    var f3 = gui.addFolder('TRotation'+(indt+1));
    f3.add(prop.rotation,'x').min(0).max(1)
    f3.add(prop.rotation,'y').min(0).max(1)
    f3.add(prop.rotation,'z').min(0).max(1)
    // gui.addColor( prop.material, 'color') 
    temp[indt] =prop
    indt=indt+1

	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);
  
}

addTemp1!.addEventListener('click',function(){addTemp('House1')})
addTemp2!.addEventListener('click',function(){addTemp('House2')})
addTemp3!.addEventListener('click',function(){addTemp('House3')})
addTemp4!.addEventListener('click',function(){addTemp('House4')})
addTemp5!.addEventListener('click',function(){addTemp('House5')})
addTemp6!.addEventListener('click',function(){addTemp('House6')})
addTemp7!.addEventListener('click',function(){addTemp('House7')})


// Ambient Light

const ambient= new THREE.AmbientLight(0xaeaeae,2);
scene.add(ambient);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 80
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas as HTMLElement)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas as HTMLCanvasElement
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // plane.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
  }
}
