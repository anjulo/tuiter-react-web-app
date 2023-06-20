const exploreItem = (item) => {
  return (
    `
    <li class="list-group-item">
    <div class="row">
      <div class="col-10">
        <div class="text-secondary">${item.topic}</div>
        <div><strong>${item.userName}</strong><i class="fas fa-check-circle ms-1" style="color: blue;"></i> - ${item.time}</div>
        <div><strong>${item.title}</strong>
        </div>
        <div class="text-secondary"> ${item.tuits ? `${item.tuits} tuits` : ""}</div>
      </div>
      <div class="col-2">
        <img src= ${item.image} alt="" width="100%" class="float-end">
      </div>
      </div>
    </li>
    `
  )
}



const exploreItemsList = (array) => {
  return (
    `
    <ul class="list-group">
      ${array.map(item => exploreItem(item)).join('')}
    </ul>
    `
  )
}

export default exploreItemsList;