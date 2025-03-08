(function() {
  "use strict";

  /**
   * Helper function to select elements
   */
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  /**
   * Helper function for event listeners
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Toggle Left Sidebar
   */
  if (select('.toggle-sidebar-btn-left')) {
    on('click', '.toggle-sidebar-btn-left', function() {
      document.body.classList.toggle('toggle-sidebar-left');
    });
  }

  /**
   * Toggle Right Sidebar
   */
  if (select('.toggle-sidebar-btn-right')) {
    on('click', '.toggle-sidebar-btn-right', function() {
      document.body.classList.toggle('toggle-sidebar-right');
    });
  }

  document.querySelectorAll('.icon-content').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.icon-content').forEach(btn => {
        btn.classList.remove('active');
        const img = btn.querySelector('img');
        img.style.filter = 'grayscale(100%)'; // Reapply grayscale to all images
        const span = btn.querySelector('span');
        span.style.color = 'black'; // Reset text color to default
      });
  
      // Add 'active' class to clicked button
      this.classList.add('active');
  
      // Remove grayscale effect on the clicked button's image
      const img = this.querySelector('img');
      img.style.filter = 'none'; // Remove grayscale effect from image
      
      // Change the text color to the active color
      const span = this.querySelector('span');
      span.style.color = 'rgb(226, 31, 31)'; // Set active text color
    });
  });
  
  

})();
