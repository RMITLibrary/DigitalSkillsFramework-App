// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
  const scrollMessage = document.getElementById('scrollMessage');
  const tableResponsive = document.querySelector('.table-responsive');

  function checkTableScroll() {
    const isScrollable = tableResponsive.scrollWidth > tableResponsive.clientWidth;
    scrollMessage.style.display = isScrollable ? 'block' : 'none';
  }

  window.addEventListener('resize', checkTableScroll);
  checkTableScroll();
});