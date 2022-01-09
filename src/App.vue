<template>
  <div id="app">
    <!-- navigacija -->
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
              <router-link to="/home" class="nav-link text-light text1" href="#"
                >Home <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item-custom nav-item nav-link text-light text1">
              <router-link to="/sport">
                <div class="btn-group">
                  <button type="button" class="btn">Sport</button>
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Football</a>
                    <a class="dropdown-item" href="#">Basketball </a>
                    <a class="dropdown-item" href="#">Tennis</a>
                    <a class="dropdown-item" href="#">Fishing</a>
                  </div>
                </div>
              </router-link>
            </li>
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
  margin-left: 100px;
}
.text2 {
  font-size: 25px;
  margin-top: 5px;
  margin-left: 100px;
}
.arrow-position {
  margin-top: 5px;
}
</style>
