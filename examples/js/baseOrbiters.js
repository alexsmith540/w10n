//POW! Written by Alex Smith 2012. http://atpsmith.com, email: alexsmith_540@yahoo.com
var ts;
function initScene(){
    ts = new threeScene();
}
var controls;
var threeScene = function(){
    this.useControls = false; //change this later for easter eggs??
    this.orbiters = [];
    this.is_done_transitioning = false;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    //this.camera.position.set(-872,0, 0);
    this.camera.position.set(-581.7877773317265, -84.71818727820266, 26.509923964651453)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene = new THREE.Scene();
    this.projector = new THREE.Projector();
    this.geometry = new THREE.CubeGeometry( 50, 50, 50 );
    this.material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    this.lgeo = new THREE.Geometry();
    if(this.useControls){
        controls = new THREE.TrackballControls( this.camera );

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        controls.keys = [ 65, 83, 68 ];
    }
    var c = 0;
    var that = this;
    for(i=0;i<Math.PI*2;i+=Math.PI/400){
        that.orbiters.push( new orbiter(i,i,400,c));
        var lgv = new THREE.Vector3(that.orbiters[c].cube.position.x, that.orbiters[c].cube.position.y, that.orbiters[c].cube.position.z);
        that.lgeo.vertices.push(lgv);
        c++;
    }

    this.lmaterial = new THREE.LineBasicMaterial({
        color: 0x0378A6,
        linewidth:1
    });
    this.mouse = {x:0,y:0};
    this.INTERSECTED;
    this.temp_material = new THREE.LineBasicMaterial({color:0x011C40,linewidth:5,opacity:0.4,transparent:true});
    this.scene.fog = new THREE.Fog( 0x000000, 200,3500 );
    this.line = new THREE.Line(this.lgeo,this.lmaterial);
    this.scene.add(this.line);
    this.line.geometry.__dirtyVertices = true;
    this.line.geometry.dynamic = true;

    for(i=0;i<this.orbiters.length;i++){
        that.scene.add(that.orbiters[i].cube);
        that.scene.add(that.orbiters[i].sphere);
    }

    var that = this;
    document.addEventListener( 'mousemove', function(flarb){that.onDocumentMouseMove(flarb);}, false );
    this.renderer.render(this.scene,this.camera);
    this.animate();
}
function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

threeScene.prototype.onDocumentMouseMove = function( event ) {

    event.preventDefault();

    this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
threeScene.prototype.animate = function(){
    if(this.camera.position.x == -1000) this.is_done_transitioning = true;
    if(Math.abs(this.camera.position.x) > 995 && this.is_done_transitioning == false) this.camera.position.x = this.camera.position.x * 0.95 + -1000 * 0.05;
    var that = this;
    for(i=0;i<this.orbiters.length;i++){
        that.orbiters[i].animate();//scene.add(orbiters[i].cube);
        that.line.geometry.vertices[i].x = that.orbiters[i].cube.position.x;
        that.line.geometry.vertices[i].y = that.orbiters[i].cube.position.y;
        that.line.geometry.vertices[i].z = that.orbiters[i].cube.position.z;
    }
    that.line.geometry.__dirtyVertices = true;
    that.line.geometry.__dirtyNormals = true;
    that.line.geometry.computeFaceNormals();
    that.line.geometry.computeVertexNormals();
    that.line.geometry.verticesNeedUpdate = true;
    if(that.useControls)
    controls.update();//this.controls.update();
    //console.log(typeof(this.controls.update));

    that.renderer.render(that.scene,that.camera);

    requestAnimationFrame(function() { that.animate(); });
    var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
    this.projector.unprojectVector( vector, this.camera );

    var ray = new THREE.Raycaster( this.camera.position, vector.sub( this.camera.position ).normalize() )//new THREE.Ray( this.camera.position, vector.subSelf( this.camera.position ).normalize() );

    var intersects = ray.intersectObjects( this.scene.children );
    
    if ( intersects.length > 0 ) {
        var that = this;
        if ( this.INTERSECTED != intersects[ 0 ].object) {
            //console.log('intersected',this.INTERSECTED)
            if ( this.INTERSECTED instanceof THREE.Mesh ) this.INTERSECTED.material.color.setHex( this.INTERSECTED.currentHex );
            //if(typeof(this.INTERSECTED.foo) != "undefined") console.log(this.INTERSECTED);
            this.INTERSECTED = intersects[ 0 ].object;
            if(typeof(this.INTERSECTED.idx) != "undefined" && this.INTERSECTED instanceof THREE.Mesh) {

                this.tempgeo = new THREE.Geometry();
                this.tempgeo.vertices = [];
                if(typeof(this.tempgeo.vertices[0]) == "undefined")
                this.tempgeo.vertices.push(new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx-1].x,that.line.geometry.vertices[this.INTERSECTED.idx-1].y,that.line.geometry.vertices[this.INTERSECTED.idx-1].z));
                else this.tempgeo.vertices[i] = new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx-1].x,that.line.geometry.vertices[this.INTERSECTED.idx-1].y,that.line.geometry.vertices[this.INTERSECTED.idx-1].z);
                if(typeof(this.tempgeo.vertices[1]) == "undefined")
                this.tempgeo.vertices.push(new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx].x,that.line.geometry.vertices[this.INTERSECTED.idx].y,that.line.geometry.vertices[this.INTERSECTED.idx].z));
                else this.tempgeo.vertices[1] = new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx].x,that.line.geometry.vertices[this.INTERSECTED.idx].y,that.line.geometry.vertices[this.INTERSECTED.idx].z);
                if(typeof(this.tempgeo.vertices[2]) == "undefined")
                this.tempgeo.vertices.push(new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx+1].x,that.line.geometry.vertices[this.INTERSECTED.idx+1].y,that.line.geometry.vertices[this.INTERSECTED.idx+1].z));
                else this.tempgeo.vertices[2] = new THREE.Vector3(that.line.geometry.vertices[this.INTERSECTED.idx+1].x,that.line.geometry.vertices[this.INTERSECTED.idx+1].y,that.line.geometry.vertices[this.INTERSECTED.idx+1].z);
            }
            if(this.INTERSECTED instanceof THREE.Mesh){
                if(typeof(this.templine) != "undefined") this.scene.remove(this.templine);
                this.templine = new THREE.Line(this.tempgeo,this.temp_material);
                this.templine.geometry.__dirtyVertices = true;
                this.templine.geometry.__dirtyNormals = true;
                this.templine.geometry.computeFaceNormals();
                this.templine.geometry.computeVertexNormals();
                this.templine.geometry.verticesNeedUpdate = true;
                this.templine.geometry.dynamic = true;
                this.scene.add(this.templine);
                this.INTERSECTED.currentHex = this.INTERSECTED.material.color.getHex();
                this.INTERSECTED.material.color.setHex( 0x011C40 );
               
                this.INTERSECTED.material.opacity = 0.4;
            }
        }

    } else {
        //console.log(this.INTERSECTED);
        if ( this.INTERSECTED && this.INTERSECTED instanceof THREE.Mesh ) {this.INTERSECTED.material.color.setHex( this.INTERSECTED.currentHex );
         this.INTERSECTED.material.opacity = 0.2; 
         this.scene.remove(this.templine);
         
        if(typeof(this.INTERSECTED.idx) != "undefined") {

            console.log(this.INTERSECTED.idx);
        }
     }
        this.INTERSECTED = null;

    }
}
threeScene.prototype.render = function() {

    this.renderer.render( this.scene, this.camera );
    //stats.update();

}

var orbiter = function(phi,theta,rho,i){
    this.adder = Math.random() * 0.005;
    this.phi = phi;//0;
    this.theta = theta;//Math.PI*1.25;
    this.rho = rho;//400;
    this.geometry = new THREE.CubeGeometry( 200, 200, 200 );
    this.geometry2 = new THREE.CubeGeometry(20,20,20);
    this.material = new THREE.MeshBasicMaterial( { color: 0xF7D01F } );
    this.material2 = new THREE.MeshBasicMaterial({color: 0x0378A6,opacity:0.2,transparent:true});
    this.cube = new THREE.Mesh( this.geometry2, this.material2 );
    this.sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5,6,6),this.material
        );

    this.x = Math.cos(this.phi) * Math.cos(this.theta) * this.rho;
    this.y = Math.sin(this.phi) * Math.sin(this.theta) * this.rho;
    this.z = Math.sin(this.phi) * this.rho;
    this.cube.position.x = this.x;
    this.cube.position.y = this.y;
    this.cube.position.z = this.z;
    this.cube.idx = i;
    this.sphere.position.x = this.x;
    this.sphere.position.y = this.y;
    this.sphere.position.z = this.z;
}
orbiter.prototype.animate = function(){
    this.phi = this.phi >= Math.PI*2 ? 0 : this.phi-this.adder;

    this.x = Math.cos(this.phi) * Math.cos(this.theta) * this.rho;
    this.y = Math.cos(this.phi) * Math.sin(this.theta) * this.rho;
    this.z = Math.sin(this.phi) * this.rho;
    this.cube.position.x = this.x;
    this.cube.position.y = this.y;
    this.cube.position.z = this.z;
    this.sphere.position.x = this.x;
    this.sphere.position.y = this.y;
    this.sphere.position.z = this.z;
}