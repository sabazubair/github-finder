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
      console.log(user);
      $("#profile").append(`
        <div class="card" style="width: 18rem; margin: 3px 3px;">
          <img src="${user.avatar_url}" class="card-img-top" alt="thumbnail">
          <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
            <h6>Company: ${user.company}</h6>
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            <p class="card-text" style="margin-top: 0.5rem";>${user.bio}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style="display:flex; flex-direction: row; justify-content:space-between;"><span>Public Repos:</span><span>${user.public_repos}</span></li>
            <li class="list-group-item" style="display:flex; flex-direction: row; justify-content:space-between;"><span>Public Gists:</span><span>${user.public_gists}</span></li>
            <li class="list-group-item" style="display:flex; flex-direction: row; justify-content:space-between;"><span>Followers:</span> ${user.followers}</span></li>
            <li class="list-group-item" style="display:flex; flex-direction: row; justify-content:space-between;"><span>Following:</span> ${user.following}</span></li>
          </ul>
        </div>
      `);
    });
  });
});
