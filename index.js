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
  // Send Email 
function sendMail() {
  const name = document.getElementById('name_inp').value.trim();
  const email = document.getElementById('email_inp').value.trim();
  const subject = document.getElementById('sub_inp').value.trim();
  const message = document.getElementById('msg_inp').value.trim();

  if (!name || !email || !subject || !message) {
    showPopup("⚠️ Please fill in all fields before sending.");
    return;
  }

  const params = { from_name: name, from_email: email, subject, message };
  const serviceID = "service_cxh2gfn";
  const templateID = "template_luoqbaa";
  const autoReplyTemplateID = "template_autoreply";

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      showPopup("✅ Email sent successfully!");
      emailjs.send(serviceID, autoReplyTemplateID, params);
      document.getElementById('name_inp').value = "";
      document.getElementById('email_inp').value = "";
      document.getElementById('sub_inp').value = "";
      document.getElementById('msg_inp').value = "";
    })
    .catch(error => {
      console.error("EmailJS Error:", error);
      showPopup("❌ Failed to send email. Please try again.");
    });
}



function showPopup(message) {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = 'rgba(0,0,0,0.85)';
  popup.style.color = '#fff';
  popup.style.padding = '15px 25px';
  popup.style.borderRadius = '10px';
  popup.style.fontSize = '18px';
  popup.style.zIndex = '9999';
  popup.style.textAlign = 'center';
  popup.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  popup.style.transition = 'opacity 0.4s ease';
  popup.style.maxWidth = '80%';
  popup.style.wordWrap = 'break-word';

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = '0';
    setTimeout(() => popup.remove(), 400);
  }, 3000);
}


