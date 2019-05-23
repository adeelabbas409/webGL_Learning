var gl = (function() {
  "user strict";

  var scene = new THREE.Scene(),
    renderer = new THREE.WebGLRenderer();

  var light = new THREE.AmbientLight(0xffffff),
    camera,
    box;

  function initScene() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("root").appendChild(renderer.domElement);

    scene.add(light);

    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1000;
    scene.add(camera);

    material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
    box = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), material);

    box.name = "box";

    // scene.add(box);

    sphere = new THREE.Mesh(new THREE.SphereGeometry(40, 50, 40), material);

    sphere.name = "sphere";

    scene.add(sphere);

    render();
  }

  function render() {
    sphere.rotation.z += 0.01;
    sphere.scale.x = 5;
    sphere.scale.y = 5;
    box.rotation.x += 0.001;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  window.onload = initScene;

  return {
    scene: scene
  };
})();
