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

})();
