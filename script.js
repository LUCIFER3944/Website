// Get the slider container element
const slider = document.querySelector('.slider');

// Function to activate the slider on button click
function activateSlider(e) {
  // Get all elements with the class 'item' inside the slider
  const items = document.querySelectorAll('.item');

  // Move to the next item when the element with class 'next' is clicked
  if (e.target.matches('.next')) {
    // Append the first item to the end of the slider
    slider.append(items[0]);
  }

  // Move to the previous item when the element with class 'prev' is clicked
  if (e.target.matches('.prev')) {
    // Prepend the last item to the beginning of the slider
    slider.prepend(items[items.length - 1]);
  }
}

// Add a click event listener to the entire document
document.addEventListener('click', activateSlider, false);

// SECTION-2///////////////////////////////////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});