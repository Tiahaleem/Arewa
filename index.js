//  Hambuger Icon Mobile
 const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  // On click Portfolio Section
  const buttons = document.querySelectorAll('.portfolio_category_flex button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  // Image Filter
  //  const buttons = document.querySelectorAll('.portfolio_category_flex .cart');
  const images = document.querySelectorAll('.img_portfolio_display_inner_div');

  buttons.forEach(button => {
    button.addEventListener('click', () => {

      // ✅ Active button toggle
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // ✅ Filter images
      images.forEach(image => {
        const category = image.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });

    });
  });

