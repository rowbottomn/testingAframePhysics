// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

var physics_init = function () {
    player = document.getElementById('player');

    //console.log(player.body);
   // let world = document.querySelector('a-scene').systems['physics'].world;
    //let groundMaterial = document.querySelector('[static-body]').body.material;
   // let laneObjects = document.querySelectorAll(['[dynamic-body]']);
   // for (let i = 0; i < laneObjects.length; i++) {
        //laneObjects[i].body.material = groundMaterial;
   // }

    
   // let contactMaterial = new CANNON.ContactMaterial(
     //   groundMaterial, player.body.material, { restitution: 0.001 });
   // world.addContactMaterial(contactMaterial);
};
//physics_init();