document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    // Load saved state
    const saved = localStorage.getItem(checkbox.id);
    if (saved !== null) {
      checkbox.checked = saved === 'true';
    }
    // Save state on change
    checkbox.addEventListener('change', function() {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });
}); 