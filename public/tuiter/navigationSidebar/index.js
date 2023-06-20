const navigationSidebar = () => { 
  return(
    `       
    <div class="list-group mb-1">
      <a href="" class="list-group-item list-group-item-action"><i class="fab fa-twitter me-1 fa-2x"></i></a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-home me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Home</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action active">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-hashtag me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Explore</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-bell me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Notifications</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-envelope me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Messages</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-bookmark me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Bookmarks</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-list me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Lists</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-user me-1"></i> </div>
          <div class="d-none d-xl-block col-10">Profile</div>
        </div>
      </a>
      <a href="" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-12 col-xl-2 col-xxl-2"><i class="fas fa-ellipsis-h me-1"></i> </div>
          <div class="d-none d-xl-block col-10">More</div>
        </div>
      </a>
    </div>
    <button type="button" class="btn btn-primary rounded-pill w-100 mt-1">Tuit</button>
    `
  )
}

export default navigationSidebar;