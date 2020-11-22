if (localStorage.getItem("page") !== "about") {
  $(`#${localStorage.getItem("page")}`).removeClass("d-none");
  $("#social-btn-group").removeClass("d-none");
  $("#about").addClass("d-none");
}

const showAbout = () => {
  window.scrollTo({ top: 0 });
  localStorage.setItem("page", "about");
  $("#about").removeClass("d-none");
  $("#experience").addClass("d-none");
  $("#skills").addClass("d-none");
  $("#awards").addClass("d-none");
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
};
