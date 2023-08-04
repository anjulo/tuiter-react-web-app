import users from "./users.js"

const listItem = user => {
  return (
    `
    <li class="list-group-item">
    <div class="row">
      <div class="col-3">
        <img src=${user.avatarIcon} alt="" class="img-thumbnail rounded-circle p-0">
      </div>
      <div class="col-6">
        <div><strong>${user.userName}</strong><i class="fas fa-check-circle ms-1" style="color: blue;"></i></div>
        <div class="text-secondary small">@${user.handle}</div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary rounded-pill float-end ">Follow</button>
      </div>
    </div>
    </li>
    `
  )

}

const whoToFollowList = () => {
  return (
    `
    <ul class="list-group">
      ${users.map(user => listItem(user)).join('')}
    </ul>
    `
  )
}

console.log(whoToFollowList(users));

export default whoToFollowList;

