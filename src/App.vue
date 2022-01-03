<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light pozadina">
        <a
          style="display: inline-flex"
          class="navbar-brand text-secondary"
          href="#"
        >
          <img src="@/assets/logo_pravi.png" width="100" height="100" alt="" />
          <p class="text-center">Sportario</p></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item-custom nav-item active">
              <a class="nav-link text-light text1" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <div class="nav-item-custom btn-group">
              <button type="button" class="btn text-light text2">Sport</button>
              <button
                type="button"
                class="btn arrow-position dropdown-toggle dropdown-toggle-split"
                id="dropdownMenuReference"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-reference="parent"
              >
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div
                class="submenu dropdown-menu"
                aria-labelledby="dropdownMenuReference"
              >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>

                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <li class="nav-item-custom nav-item">
              <a class="nav-link text-light text1" href="#">Events</a>
            </li>
            <li class="nav-item-custom nav-item">
              <a class="nav-link text-light text1 log1" href="#">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.pozadina {
  background-color: black;
}
.btn {
  color: white;
}
.btn:hover {
  color: white;
}
.btn:active {
  color: black;
}
navbar-center {
  display: inline-flex;
}
.text-center {
  margin-top: 63px;
}
.navbar-toggler {
  background-color: white;
}
.nav-item-custom {
  margin-right: 150px;
}
.navbar-nav {
  margin: auto;
}
.log1 {
  border: 2px solid white;
  border-radius: 15%;
  background-color: grey;
  width: 100px;
  height: 50px;
  margin-top: 15px;
  text-align: center;
  padding-bottom: 50px;
}
.text1 {
  font-size: 25px;
  margin-top: 5px;
}
.text2 {
  font-size: 25px;
  margin-top: 0px;
}
.arrow-position {
  margin-top: 5px;
}
</style>
