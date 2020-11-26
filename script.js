if (localStorage.getItem("page") && localStorage.getItem("page") !== "about") {
  $(`#${localStorage.getItem("page")}`).removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
}

if (localStorage.getItem("link") && localStorage.getItem("link") !== "about") {
  $(".nav-link").removeClass("active");
  $(`#show-${localStorage.getItem("page")}`).addClass("active");
}

const showAbout = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "about");
  $("#about").removeClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
  $("#resume-and-card").addClass("d-none");
  $("#social-btn-group").addClass("d-none");
};

const showExperience = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "experience");
  $("#experience").removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
  $("#resume-and-card").addClass("d-none");
};

const showSkills = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "skills");
  $("#social-btn-group").removeClass("d-none");
  // $("#experience").removeClass("d-none");
  // $("#about").addClass("d-none");
  console.log("Nothing yet.");
};

const showAwards = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "awards");
  $("#awards").removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#resume-and-card").addClass("d-none");
};

const showResumeAndCard = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "resume-and-card");
  $("#resume-and-card").removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
};

var refreshKeyPressed = false;
var modifierPressed = false;

var f5key = 116;
var rkey = 82;
var modkey = [17, 224, 91, 93];

// Check for refresh keys
$(document).on("keydown", (e) => {
  // Check for refresh
  if (e.which == f5key || (window.modifierPressed && e.which == rkey)) {
    refreshKeyPressed = true;
  }

  // Check for modifier
  if (modkey.indexOf(e.which) >= 0) {
    modifierPressed = true;
  }
});

// Check for refresh keys
$(document).on("keyup", (e) => {
  // Check undo keys
  if (e.which == f5key || e.which == rkey) {
    refreshKeyPressed = false;
  }

  // Check for modifier
  if (modkey.indexOf(e.which) >= 0) {
    modifierPressed = false;
  }
});

$(window).on("beforeunload", (event) => {
  var message = "not refreshed";

  if (!refreshKeyPressed) {
    localStorage.clear();
  }
});

$(window).on("mousemove", (e) => {
  $(".pointer").css({ top: e.pageY, left: e.pageX });
});

$("#nav-toggler").on("click", () => {
  if ($("#nav-container").hasClass("slide-nav-in")) {
    $("#nav-container").removeClass("slide-nav-in");
    $("#nav-container").addClass("slide-nav-out");
  } else {
    $("#nav-container").removeClass("slide-nav-out");
    $("#nav-container").addClass("slide-nav-in");
  }
  // $("#nav-container").css({ display: "block !important" });
});

// $("#nav-toggler").on("click", () => {
//   $("#nav-container").toggle();
// });

$("iframe")
  .on("mouseover", () => {
    $(".pointer").hide();
  })
  .on("mouseout", () => {
    $(".pointer").show();
  });

const encrypted = CryptoJS.AES.encrypt("SLJC2021", "555");
const decrypted = CryptoJS.AES.decrypt(
  "U2FsdGVkX1/rjNk/9xynkYoGXY4XubcNMHn5Ffts89Q=",
  "555"
).toString(CryptoJS.enc.Utf8);
console.log(decrypted);
