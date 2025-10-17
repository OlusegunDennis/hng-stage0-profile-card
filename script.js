document.addEventListener('DOMContentLoaded', function() {
  const timeElement = document.querySelector('span[data-testid="test-user-time"]');
  
  function updateTime() {
    timeElement.textContent = `Current timestamp: ${Date.now()}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
});
