<template>
  <div>
    <div class="container-fluid">
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
          <div class="okvir space">
            <h1>Submit your request now</h1>
            <!-- forma -->
            <form class="forma2">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="okvir1 col-4 form-outline">
                  <label class="form-label margin1" for="sport">Sport</label>
                  <input
                    type="text"
                    id="sport"
                    class="inc margin1 form-control"
                  />

                  <label class="form-label margin1" for="location"
                    >Location</label
                  >
                  <input
                    type="email"
                    id="location"
                    class="inc margin1 form-control"
                  />

                  <label class="form-label margin1" for="date">Date</label>
                  <input
                    type="email"
                    id="date"
                    class="inc margin1 form-control"
                  />

                  <label class="form-label margin1" for="players"
                    >Players</label
                  >
                  <input
                    type="email"
                    id="players"
                    class="inc margin1 form-control"
                  />
                </div>

                <div class="col-7 form-group">
                  <label class="form-label margin1" for="information"
                    >More information</label
                  >
                  <textarea
                    class="inc margin1 form-control"
                    id="information"
                    rows="6"
                  ></textarea>

                  <!-- Submit button -->
                  <button type="submit" class="col-5 btn incb btn-block mb-4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
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
  margin-left: 20px;
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
.okvir h1 {
  text-align: center;
  font-family: "Roboto" sans-serif;
}
.okvir1 {
  margin-bottom: 20px;
}
.okvir {
  border: solid;
  background-color: #ffffff;
  border-radius: 50px;
}
.inc {
  background-color: #d0d0d0;
  border-radius: 30px;
}
.incb {
  background-color: #5b69bf;
  margin-top: 50px;
}
.form-label {
  color: #707070;
  font-family: "Roboto" sans-serif;
}
.margin1 {
  margin-left: 20px;
}
</style>
