 // Function to update the viewport height and width values
 function updateViewportSize() {
    // Get the viewport height and width
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let mode = '';
    if(viewportHeight>viewportWidth){
        mode = 'Portrait';
    }
    else if(viewportHeight<viewportWidth){
        mode = 'Landscape';
    }
    else{
        mode = 'Square'
    }

    // Update the text content of the elements
    heightWidthElement.textContent = `${viewportHeight} x ${viewportWidth} px (${mode})`;
    
  }

  // Create new elements to display the viewport height and width
  const heightWidthElement = document.createElement('div');

  // Append the elements to the body
  document.body.appendChild(heightWidthElement);

  // Initial update of viewport size
  updateViewportSize();

  // Listen for the resize event and update the values
  window.addEventListener('resize', updateViewportSize);