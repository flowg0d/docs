// Override Mintlify's logo size constraints
(function() {
  const style = document.createElement('style');
  style.textContent = `
    /* Target all possible logo selectors */
    [class*="navbar"] [class*="logo"],
    [class*="navbar"] a[href="/"],
    .navbar-logo,
    nav a[href="/"],
    header a[href="/"] {
      height: 80px !important;
      min-height: 80px !important;
      display: flex !important;
      align-items: center !important;
    }
    
    [class*="navbar"] [class*="logo"] svg,
    [class*="navbar"] a[href="/"] svg,
    .navbar-logo svg,
    nav a[href="/"] svg,
    header a[href="/"] svg {
      width: auto !important;
      height: 80px !important;
      min-width: 300px !important;
      min-height: 80px !important;
      max-width: none !important;
      max-height: none !important;
    }
  `;
  document.head.appendChild(style);
})();

