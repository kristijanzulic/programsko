<template>
  <div>
    <div class="container-flex">
      <div class="row">
        <div class="col-4 kategorije">
          <h1>Categories</h1>
          <p>
            Football <br />
            Basketball <br />
            Tennis <br />
            Fishing <br />
            Golf <br />
          </p>
        </div>
        <div class="col-5">
          <!-- forma -->
          <div class="forma">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control bar2"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    class="form-control bar2"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    class="form-control bar2"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    class="form-control bar2"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1"
                    >Example textarea</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="col-1">sa</div>
        </div>
      </div>
    </div>
    <img src="@/assets/cover-sport.png" alt="" class="bg-img" />
  </div>
</template>

<style lang="scss">
.bg-img {
  top: 0;
  left: 0;
  width: 1920px;
  position: fixed;
  z-index: -1;
}
.kategorije {
  margin-top: 100px;
}
.kategorije h1 {
  color: white;
  font-family: "manrope" sans-serif;
  text-transform: uppercase;
  font-size: 25px;
}
.kategorije p {
  margin-top: 50px;
  color: white;
  font-family: "manrope" sans-serif;
  font-size: 20px;
}
.forma {
  margin: solid;
  background-color: yellow;
}
.bar2 {
  margin-top: 10px;
  margin-bottom: 10px;
  color: blue;
}
</style>
