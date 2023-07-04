document.addEventListener("DOMContentLoaded", function () {
  Array.from(document.querySelectorAll(".countdownlist")).forEach(function (o) {
    var t = o.getAttribute("data-countdown"),
      c = new Date(t).getTime(),
      s = setInterval(function () {
        var t = new Date().getTime(),
          t = c - t,
          n = Math.floor(t / 864e5),
          i = Math.floor((t % 864e5) / 36e5),
          e = Math.floor((t % 36e5) / 6e4),
          d = Math.floor((t % 6e4) / 1e3);
        o &&
          (o.innerHTML =
            '<div class="countdownlist-item"><div class="count-title">Days</div><div class="count-num">' +
            n +
            '</div></div><div class="countdownlist-item"><div class="count-title">Hours</div><div class="count-num">' +
            i +
            '</div></div><div class="countdownlist-item"><div class="count-title">Minutes</div><div class="count-num">' +
            e +
            '</div></div><div class="countdownlist-item"><div class="count-title">Seconds</div><div class="count-num">' +
            d +
            "</div></div>"),
          t < 0 &&
            (clearInterval(s),
            (o.innerHTML =
              '<div class="countdown-endtxt">The countdown has ended!</div>'));
      }, 1e3);
  });
});

// Portfolio Filter
document.addEventListener("DOMContentLoaded", function (event) {
  // init Isotope
  var GalleryWrapper = document.querySelector(".gallery-wrapper");
  if (GalleryWrapper) {
    var iso = new Isotope(".gallery-wrapper", {
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });
  }
  // bind filter button click
  var filtersElem = document.querySelector(".categories-filter");
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "li a")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      if (filterValue) {
        // use matching filter function
        iso.arrange({
          filter: filterValue,
        });
      }
    });
  }
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll(".categories-filter");
  if (buttonGroups) {
    Array.from(buttonGroups).forEach(function (btnGroup) {
      var buttonGroup = btnGroup;
      radioButtonGroup(buttonGroup);
    });
  }
  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "li a")) {
        return;
      }
      buttonGroup.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
    });
  }
});
// TESti Monial slider
var swiper = new Swiper(".testi-slider", {
  spaceBetween: 20,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".testi-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testi-slider-button-next",
    prevEl: ".testi-slider-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
// latest product slider
var swiper = new Swiper(".latest-slider", {
  spaceBetween: 16,
  loop: "true",
  slidesPerView: 1,
  pagination: {
    el: ".latest-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".latest-button-next",
    prevEl: ".latest-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
// best Office slider
var swiper = new Swiper(".bestOffice", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".bestOffice-button-next",
    prevEl: ".bestOffice-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(
  function (s) {
    Array.from(s.querySelectorAll(".password-addon")).forEach(function (t) {
      t.addEventListener("click", function (t) {
        var e = s.querySelector(".password-input");
        "password" === e.type ? (e.type = "text") : (e.type = "password");
      });
    });
  }
);


function getInputElement(e) {
  return document.getElementById("digit" + e + "-input");
}
function moveToNext(e, t) {
  t = t.which || t.keyCode;
  1 === getInputElement(e).value.length &&
    (4 !== e
      ? getInputElement(e + 1).focus()
      : (getInputElement(e).blur(), console.log("submit code"))),
    8 === t && 1 !== e && getInputElement(e - 1).focus();
}
