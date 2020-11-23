if (localStorage.getItem("page") && localStorage.getItem("page") !== "about") {
  $(`#${localStorage.getItem("page")}`).removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
}

if (localStorage.getItem("link") && localStorage.getItem("link") !== "about") {
  $(".nav-link").removeClass("active");
  console.log($(`#show-${localStorage.getItem("link")}`).html());
  $(`#show-${localStorage.getItem("link")}`).addClass("active");
}

const showAbout = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "about");
  localStorage.setItem("link", "about");
  $("#about").removeClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
  $("#social-btn-group").addClass("d-none");
};

const showExperience = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "experience");
  localStorage.setItem("link", "experience");
  $("#experience").removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
};

const showSkills = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "skills");
  localStorage.setItem("link", "skills");
  $("#social-btn-group").removeClass("d-none");
  // $("#experience").removeClass("d-none");
  // $("#about").addClass("d-none");
  console.log("Nothing yet.");
};

const showAwards = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "awards");
  localStorage.setItem("link", "awards");
  $("#awards").removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
};
