// Update your products filtering JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.type-btn button');
    const items = document.querySelectorAll('.product-item');
    const prodShow = document.querySelector('.prod-show');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove previous active states
        buttons.forEach(b => {
          b.classList.remove('active-btn');
          b.style.color = '#383838';
        });
  
        // Add active state to clicked button
        this.classList.add('active-btn');
        
        // Get filter value
        const filter = this.dataset.filter;
  
        // Animate product items
        prodShow.style.minHeight = `${prodShow.offsetHeight}px`;
        
        items.forEach(item => {
          const matchesFilter = filter === 'all' || item.classList.contains(filter);
          
          if (matchesFilter) {
            item.classList.remove('hide');
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => item.classList.add('hide'), 300);
          }
        });
  
        // Reset container height after animation
        setTimeout(() => {
          prodShow.style.minHeight = 'auto';
        }, 500);
      });
    });
  });