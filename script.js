const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const revealEls = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const usageMainImage = document.getElementById("usageMainImage");
const usageCaption = document.getElementById("usageCaption");
const usageThumbs = Array.from(document.querySelectorAll("#usageThumbs .thumb"));
const usagePrev = document.getElementById("usagePrev");
const usageNext = document.getElementById("usageNext");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) {
    return;
  }
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

if (usageMainImage && usageCaption && usageThumbs.length > 0) {
  let activeIndex = 0;

  const applyUsageSlide = (index) => {
    activeIndex = (index + usageThumbs.length) % usageThumbs.length;
    const activeThumb = usageThumbs[activeIndex];
    usageMainImage.src = activeThumb.dataset.src || usageMainImage.src;
    usageMainImage.alt = activeThumb.dataset.alt || usageMainImage.alt;
    usageCaption.textContent = activeThumb.dataset.caption || "";
    usageThumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === activeIndex);
    });
  };

  usageThumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => applyUsageSlide(i));
  });

  if (usagePrev) {
    usagePrev.addEventListener("click", () => applyUsageSlide(activeIndex - 1));
  }

  if (usageNext) {
    usageNext.addEventListener("click", () => applyUsageSlide(activeIndex + 1));
  }

  usageMainImage.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) {
      return;
    }
    lightboxImage.src = usageMainImage.src;
    lightboxImage.alt = usageMainImage.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("open")) {
      return;
    }
    if (event.key === "Escape") {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}
