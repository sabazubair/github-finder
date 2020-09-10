$(document).ready(function () {
  // 1. Ensure jQuery is Loaded
  console.log("Ready...");
  // Request to this URL
  // https://api.github.com/users/${}
  // 2. Attach event onto searchUser input field id
  $("#searchUser").on("keyup", function (e) {
    // console.log("key pressed");
    // console.log(e.target.value);
    let username = e.target.value;
    // make request to github
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      data: {
        client_id: "CLIENT_ID",
        client_secret: "CLIENT_SECRET",
      },
    }).done(function (user) {
      console.log(user);
    });
  });
});

// github credo search
// --> settings > developer settings > gh-finder
