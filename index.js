$(document).ready(function () {
  // 1. Ensure jQuery is Loaded
  console.log("Ready...");
  // Request to this URL
  // https://api.github.com/users/${}
  // 2. Attach event onto searchUser input field id
  $("#searchUser").on("keyup", function (e) {
    // console.log(e.target.value);
    let username = e.target.value;
    // make request to Github
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      data: {
        client_id: "6d36336aa6984801e77f",
        client_secret: "dd4452c7035053dcccf08db78e1d36a8e02c9973",
      },
    }).done(function (user) {
      // console.log(user);
      $("#profile").append(`
        <div class="card" style="width: 18rem;">
          <img src="${user.avatar_url}" class="card-img-top" alt="thumbnail">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <h6>Company: ${user.company}</h6>
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            <p class="card-text">${user.bio}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Public Repos: ${user.public_repos}</li>
            <li class="list-group-item">Public Gists: ${user.public_gists}</li>
            <li class="list-group-item">Followers: ${user.followers}</li>
            <li class="list-group-item">Following: ${user.following}</li>
          </ul>
        </div>
      `);
    });
  });
});

// CSS changes
// - row + columns to be implemented
// - remove title from numbers
