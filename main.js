(function(){
  window.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');

    themeToggle.addEventListener('change', event => {
      event.target.checked 
        ? document.body.setAttribute('data-theme', 'dark') 
        : document.body.removeAttribute('data-theme');
      event.currentTarget.classList.toggle('theme-toggle--toggled');
    });

    const themeToggleInput = document.getElementById('theme-toggle');

    if (themeToggleInput) {
      initTheme();

      themeToggleInput.addEventListener('change', () => resetTheme());

      function initTheme() {
        const darkThemeSelected = 
          localStorage.getItem('themeToggle') !== null &&
          localStorage.getItem('themeToggle') === 'dark';
        themeToggleInput.checked = darkThemeSelected;
        darkThemeSelected 
          ? document.body.setAttribute('data-theme', 'dark')
          : document.body.removeAttribute('data-theme');
      };

      function resetTheme() {
        if (themeToggleInput.checked) {
          document.body.setAttribute('data-theme', 'dark');
          localStorage.setItem('themeToggle', 'dark');
        } else {
          document.body.removeAttribute('data-theme');
          localStorage.removeItem('themeToggle');
        } 
      };
    }    
  });
})();