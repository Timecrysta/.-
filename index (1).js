document.getElementById('container').addEventListener('click', function(e) {
  const animation = document.createElement('div');
  animation.classList.add('animation');

  // Set the position of the animation
  animation.style.left = `${e.clientX}px`;
  animation.style.top = `${e.clientY}px`;

  // Append to container
  this.appendChild(animation);

  // Remove animation after it finishes
  animation.addEventListener('animationend', function() {
    animation.remove();
  });
});