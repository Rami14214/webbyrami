document.addEventListener('DOMContentLoaded', () => {
  // --- Portfolio Filter Functionality ---
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      items.forEach(item => {
        const category = item.dataset.category;
        item.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
      });
    });
  });

  // --- Fake Review Slider Functionality ---
  const reviews = [
    {
      name: "Sarah K.",
      text: "Absolutely loved the experience. Highly recommend!",
      image: "user.png",
      stars: 5
    },
    {
      name: "Ali M.",
      text: "Professional, efficient and very reliable.",
      image: "user2.png",
      stars: 4
    },
    {
      name: "Rita B.",
      text: "Customer service was excellent, will come back again.",
      image: "user3.png",
      stars: 5
    },
    {
      name: "Jad F.",
      text: "Affordable and high-quality, couldn't ask for more.",
      image: "user4.png",
      stars: 4
    },
    {
      name: "Nour A.",
      text: "Fast delivery and great attention to detail.",
      image: "user5.png",
      stars: 5
    },
    {
      name: "Mark D.",
      text: "Great communication throughout the process.",
      image: "user6.png",
      stars: 4
    },
    {
      name: "Layla R.",
      text: "Amazing service, exceeded my expectations!",
      image: "user7.png",
      stars: 5
    },
    {
      name: "Karim S.",
      text: "Delivered exactly what I needed, thanks!",
      image: "user8.png",
      stars: 4
    },
    {
      name: "Tina M.",
      text: "Friendly and helpful, loved every step.",
      image: "user9.png",
      stars: 5
    },
    {
      name: "Omar J.",
      text: "Great value for money. 10/10",
      image: "user10.png",
      stars: 5
    }
  ];

  let currentReview = 0;

  const reviewText = document.querySelector('.review-text');
  const reviewName = document.querySelector('.user-name');
  const reviewImage = document.querySelector('.user-icon');
  const starRating = document.querySelector('.star-rating');
  const prevBtn = document.querySelector('.prev-review');
  const nextBtn = document.querySelector('.next-review');

  if (prevBtn && nextBtn && reviewText && reviewName && reviewImage && starRating) {
    function showReview(index) {
      const review = reviews[index];
      reviewText.textContent = review.text;
      reviewName.textContent = review.name;
      reviewImage.src = review.image;

      // Create star icons dynamically
      starRating.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = i < review.stars ? '★' : '☆';
        starRating.appendChild(star);
      }
    }

    function nextReview() {
      currentReview = (currentReview + 1) % reviews.length;
      showReview(currentReview);
    }

    function prevReviewFunc() {
      currentReview = (currentReview - 1 + reviews.length) % reviews.length;
      showReview(currentReview);
    }

    prevBtn.addEventListener('click', () => {
      prevReviewFunc();
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      nextReview();
      resetInterval();
    });

    showReview(currentReview);

    let reviewInterval = setInterval(nextReview, 5000);

    function resetInterval() {
      clearInterval(reviewInterval);
      reviewInterval = setInterval(nextReview, 5000);
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const data = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          formStatus.innerText = "Thanks for your message!";
          contactForm.reset();
        } else {
          formStatus.innerText = "Oops! Something went wrong.";
        }
      }).catch(error => {
        formStatus.innerText = "Error: Unable to send message.";
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});

