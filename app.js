// Register the component to create the 3D globe in A-Frame
AFRAME.registerComponent('globe', {
       init: function () {
              const el = this.el; // Reference to the A-Frame entity

              // Create a video element
              const video = document.createElement('video');
              video.src = 'https://dev-rayhan-byte.github.io/testme/mona.mp4'; // Use the correct path to your video file
              video.crossOrigin = "anonymous"; // Handle cross-origin if needed
              video.autoplay = true;
              video.loop = true;
              video.muted = true; // Avoid autoplay issues
              video.play(); // Ensure the video plays

              // Create a texture from the video using Three.js
              const videoTexture = new THREE.VideoTexture(video);

              // Create a sphere geometry for the 3D globe
              const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
              const globeMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });

              // Create the globe mesh with the video texture applied
              const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
              globeMesh.rotation.y = Math.PI; // Rotate to correct orientation

              // Attach the globe mesh to the A-Frame entity
              el.setObject3D('mesh', globeMesh);
       }
});
