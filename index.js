/**
 * Animate an element from a calculated position to its assigned position.
 * 
 * @param {element} elem the element to animate
 * @param {int} direction the direction the element should move
 */
function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0;
  var y = direction * 100;

  delay = 0;

  if (elem.classList.contains('from-left')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('from-right')) {
    x = 100;
    y = 0;
  }

  if (elem.classList.contains('delay-one')) {
    delay += 0.1;
  } else if (elem.classList.contains('delay-two')) {
    delay += 0.2;
  } else if (elem.classList.contains('delay-three')) {
    delay += 0.3;
  }

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      delay: delay,
    }
  );
}

/**
 * Animate an element to a calculated position from its assigned position.
 * 
 * @param {element} elem the element to animate
 * @param {int} direction the direction the element should move
 */
function animateTo(elem, direction) {
  direction = direction | 1;

  var x = 0;
  var y = direction * 100;

  delay = 0;

  if (elem.classList.contains('from-left')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('from-right')) {
    x = 100;
    y = 0;
  }

  // if (elem.classList.contains('delay-one')) {
  //   delay += 0.1;
  // } else if (elem.classList.contains('delay-two')) {
  //   delay += 0.2;
  // } else if (elem.classList.contains('delay-three')) {
  //   delay += 0.3;
  // }

  gsap.fromTo(
    elem,
    { x: 0, y: 0, autoAlpha: 1 },
    {
      duration: 1.25,
      x: x,
      y: y,
      autoAlpha: 0,
      ease: 'expo',
      overwrite: 'auto',
      delay: delay,
    }
  );
}

/**
 * Hide an element.
 * 
 * @param {element} elem the element to hide
 */
function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

/**
 * Registers the GSAP plugins for every element with the appropriate class name.
 */
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.reveal').forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      start: "bottom bottom",
      end: "top top",
      // markers: true,
      onEnter: function () {
        animateFrom(elem, -1);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        animateTo(elem, -1);
      },
      onLeaveBack: function () {
        animateTo(elem);
      }
    });
  });
});
