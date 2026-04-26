const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollProgress = document.getElementById("scrollProgress");
const revealEls = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const metricNumbers = document.querySelectorAll(".metric-number");
const magneticEls = document.querySelectorAll(".magnetic");
const usageMainImage = document.getElementById("usageMainImage");
const usageCaption = document.getElementById("usageCaption");
const usageThumbs = Array.from(document.querySelectorAll("#usageThumbs .thumb"));
const usagePrev = document.getElementById("usagePrev");
const usageNext = document.getElementById("usageNext");
const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialCards = Array.from(document.querySelectorAll(".testimonial-card"));
const testimonialDots = Array.from(document.querySelectorAll("#testimonialDots .dot"));
const mediaOpenImages = document.querySelectorAll(".media-open");
const experienceVideoWraps = Array.from(
  document.querySelectorAll("#experience .video-wrap")
);
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const forcedMutedVideos = document.querySelectorAll(
  '#experience video[data-force-muted="true"]'
);
const inquiryForm = document.getElementById("inquiryForm");
const inquiryStatus = document.getElementById("inquiryStatus");
const inquirySubmitBtn = document.getElementById("inquirySubmitBtn");
const addCartButtons = Array.from(document.querySelectorAll(".add-cart-btn"));
const clearCartBtn = document.getElementById("clearCartBtn");
const applyCartBtn = document.getElementById("applyCartBtn");
const cartSummaryText = document.getElementById("cartSummaryText");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartHomeQty = document.getElementById("cartHomeQty");
const cartCommercialQty = document.getElementById("cartCommercialQty");
const cartTotalQty = document.getElementById("cartTotalQty");
const cartLineButtons = Array.from(document.querySelectorAll(".line-btn"));
const inquiryCartSummary = document.getElementById("inquiryCartSummary");
const scrollToCartLink = document.getElementById("scrollToCartLink");
const usageTypeInput = inquiryForm?.querySelector('input[name="usage_type"]');
const quantityRequiredInput = inquiryForm?.querySelector(
  'input[name="quantity_required"]'
);
const productSelectionInput = inquiryForm?.querySelector(
  'input[name="product_selection"]'
);

const ASSET_CDN_BASE =
  "https://cdn.jsdelivr.net/gh/Omkarkulkarni1811/idyllic-anvi_engineering-6f588d@main/assets/";

const resolveAssetUrl = (value) => {
  if (!value || !value.startsWith("assets/")) {
    return value;
  }
  return `${ASSET_CDN_BASE}${value.replace(/^assets\//, "")}`;
};

const remapMediaAttributesToCdn = () => {
  document.querySelectorAll('[src^="assets/"]').forEach((el) => {
    const src = el.getAttribute("src");
    el.setAttribute("src", resolveAssetUrl(src));
  });

  document.querySelectorAll('[poster^="assets/"]').forEach((el) => {
    const poster = el.getAttribute("poster");
    el.setAttribute("poster", resolveAssetUrl(poster));
  });

  document.querySelectorAll('[data-src^="assets/"]').forEach((el) => {
    const dataSrc = el.getAttribute("data-src");
    el.setAttribute("data-src", resolveAssetUrl(dataSrc));
  });

  document.querySelectorAll("video").forEach((video) => {
    video.load();
  });
};

remapMediaAttributesToCdn();

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

window.addEventListener("scroll", () => {
  if (!scrollProgress) {
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
});

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) {
    return;
  }
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

magneticEls.forEach((el) => {
  el.addEventListener("mousemove", (event) => {
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0px, 0px)";
  });
});

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const el = entry.target;
      const target = Number(el.dataset.target || "0");
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(target * progress);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.45 }
);

metricNumbers.forEach((el) => countObserver.observe(el));

forcedMutedVideos.forEach((video) => {
  video.muted = true;
  video.volume = 0;
  // Keep experience videos silent even if controls are used.
  video.addEventListener("volumechange", () => {
    if (!video.muted || video.volume !== 0) {
      video.muted = true;
      video.volume = 0;
    }
  });
});

experienceVideoWraps.forEach((wrap) => {
  const video = wrap.querySelector("video");
  if (!video) {
    return;
  }

  const applyOrientation = () => {
    if (!video.videoWidth || !video.videoHeight) {
      return;
    }
    const isPortrait = video.videoHeight > video.videoWidth;
    wrap.classList.toggle("portrait", isPortrait);
    wrap.classList.toggle("landscape", !isPortrait);
  };

  if (video.readyState >= 1) {
    applyOrientation();
  }
  video.addEventListener("loadedmetadata", applyOrientation);
});

const openLightbox = (src, alt = "") => {
  if (!lightbox || !lightboxImage) {
    return;
  }
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
};

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

  usageMainImage.addEventListener("click", () =>
    openLightbox(usageMainImage.src, usageMainImage.alt)
  );

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

mediaOpenImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

if (testimonialSlider && testimonialCards.length > 0 && testimonialDots.length > 0) {
  let activeTestimonial = 0;
  let sliderTimer;

  const applyTestimonial = (index) => {
    activeTestimonial = (index + testimonialCards.length) % testimonialCards.length;
    testimonialCards.forEach((card, i) => {
      card.classList.toggle("active", i === activeTestimonial);
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeTestimonial);
    });
  };

  const restartSlider = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
      applyTestimonial(activeTestimonial + 1);
    }, 4200);
  };

  testimonialDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      applyTestimonial(i);
      restartSlider();
    });
  });

  testimonialSlider.addEventListener("mouseenter", () => clearInterval(sliderTimer));
  testimonialSlider.addEventListener("mouseleave", restartSlider);
  restartSlider();
}

if (addCartButtons.length > 0 && cartSummaryText) {
  const cart = {
    home: 0,
    commercial: 0,
  };

  const updateCartSummary = () => {
    const total = cart.home + cart.commercial;

    if (cartHomeQty && cartCommercialQty && cartTotalQty) {
      cartHomeQty.textContent = String(cart.home);
      cartCommercialQty.textContent = String(cart.commercial);
      cartTotalQty.textContent = String(total);
    }

    const parts = [];
    if (cart.home > 0) {
      parts.push(`Home: ${cart.home}`);
    }
    if (cart.commercial > 0) {
      parts.push(`Commercial: ${cart.commercial}`);
    }
    cartSummaryText.textContent =
      parts.length > 0 ? `${parts.join(" | ")} (Total: ${total})` : "No items added yet.";

    if (inquiryCartSummary) {
      inquiryCartSummary.textContent =
        parts.length > 0 ? `${parts.join(" | ")} (Total: ${total})` : "No items selected yet.";
    }

    if (scrollToCartLink) {
      scrollToCartLink.textContent = parts.length > 0 ? "Update selection" : "Go to top cart";
    }

    if (cartToggleBtn) {
      cartToggleBtn.textContent = `Cart (${total})`;
    }

    if (usageTypeInput && quantityRequiredInput && productSelectionInput) {
      if (total < 1) {
        usageTypeInput.value = "";
        quantityRequiredInput.value = "";
        productSelectionInput.value = "{}";
      } else {
        usageTypeInput.value =
          cart.home > 0 && cart.commercial > 0
            ? "mixed"
            : cart.commercial > 0
              ? "commercial"
              : "home";
        quantityRequiredInput.value = String(total);
        productSelectionInput.value = JSON.stringify(cart);
      }
    }
  };

  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const usageType = button.dataset.usageType || "";
      const qtyInputId = button.dataset.qtyInputId || "";
      const card = button.closest(".use-type-card, .inquiry-order-builder");
      const qtyInput = qtyInputId
        ? document.getElementById(qtyInputId)
        : card?.querySelector(".order-qty-input");
      const quantity = Number.parseInt(String(qtyInput?.value || ""), 10);

      if (!["home", "commercial"].includes(usageType) || !Number.isInteger(quantity) || quantity < 1) {
        return;
      }

      cart[usageType] += quantity;
      updateCartSummary();

      if (inquiryStatus) {
        inquiryStatus.textContent = `${quantity} item(s) added to inquiry for ${usageType} use.`;
        inquiryStatus.classList.remove("error");
      }

      if (cartDrawer) {
        cartDrawer.setAttribute("aria-hidden", "false");
      }
    });
  });

  if (cartLineButtons.length > 0) {
    cartLineButtons.forEach((lineButton) => {
      lineButton.addEventListener("click", () => {
        const usage = lineButton.dataset.usage;
        const action = lineButton.dataset.action;
        if (!usage || !["home", "commercial"].includes(usage)) {
          return;
        }
        if (action === "increase") {
          cart[usage] += 1;
        } else if (action === "decrease") {
          cart[usage] = Math.max(0, cart[usage] - 1);
        }
        updateCartSummary();
      });
    });
  }

  if (cartToggleBtn && cartDrawer) {
    cartToggleBtn.addEventListener("click", () => {
      const isHidden = cartDrawer.getAttribute("aria-hidden") === "true";
      cartDrawer.setAttribute("aria-hidden", isHidden ? "false" : "true");
    });
  }

  if (cartCloseBtn && cartDrawer) {
    cartCloseBtn.addEventListener("click", () => {
      cartDrawer.setAttribute("aria-hidden", "true");
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cart.home = 0;
      cart.commercial = 0;
      updateCartSummary();
      if (inquiryStatus) {
        inquiryStatus.textContent = "Selection cleared.";
        inquiryStatus.classList.remove("error");
      }
    });
  }

  if (applyCartBtn && usageTypeInput && quantityRequiredInput) {
    applyCartBtn.addEventListener("click", () => {
      const total = cart.home + cart.commercial;
      if (total < 1) {
        return;
      }
      updateCartSummary();
      inquiryStatus.textContent = `Cart applied to inquiry. Total quantity: ${total}.`;
      inquiryStatus.classList.remove("error");
      inquiryForm?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  updateCartSummary();
}

if (scrollToCartLink) {
  scrollToCartLink.addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.getElementById("orderCartSection");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (inquiryForm && inquiryStatus && inquirySubmitBtn) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      usageType: String(formData.get("usage_type") || "").trim(),
      quantityRequired: Number.parseInt(
        String(formData.get("quantity_required") || ""),
        10
      ),
      productSelection: String(formData.get("product_selection") || "{}"),
      requirement: String(formData.get("requirement") || "").trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.address ||
      !payload.usageType ||
      payload.productSelection === "{}" ||
      !payload.requirement ||
      !Number.isInteger(payload.quantityRequired) ||
      payload.quantityRequired < 1
    ) {
      inquiryStatus.textContent = "Please fill all fields before submitting.";
      inquiryStatus.classList.add("error");
      return;
    }

    inquirySubmitBtn.disabled = true;
    inquiryStatus.textContent = "Sending inquiry...";
    inquiryStatus.classList.remove("error");

    try {
      const response = await fetch("/.netlify/functions/create-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to save inquiry");
      }

      inquiryForm.reset();
      inquiryStatus.textContent =
        "Thank you! Inquiry submitted successfully. We will contact you soon.";
      inquiryStatus.classList.remove("error");
    } catch (error) {
      inquiryStatus.textContent =
        "Inquiry could not be submitted right now. Please try again in a minute.";
      inquiryStatus.classList.add("error");
    } finally {
      inquirySubmitBtn.disabled = false;
    }
  });
}
