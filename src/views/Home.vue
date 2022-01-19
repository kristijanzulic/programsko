<template>
  <div>
    <div class="container first">
      <div class="row">
        <div class="col-md">
          <h2 class="first space">A LIFE TIME EXPERIENCE</h2>
          <H1 class="second"
            >Sport Events <br />
            To Remember</H1
          >
          <p class="third">Play Anywhere Anytime</p>

          <router-link to="/sport"
            ><button class="space button-17">
              <p>Search</p>
            </button></router-link
          >
        </div>
        <div class="col-md"></div>
        <!-- forma -->
        <div class="col-md">
          <div class="forma space">
            <form>
              <h1>New to Sportario?</h1>
              <p>Sign up now to ger your own personilized timeline!</p>
              <div class="form-group">
                <label for="email"></label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="username"></label>
                <input
                  type="text"
                  v-model="username"
                  class="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <button
                type="button"
                @click="signup"
                class="btn2 2btn btn-light text-dark"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <img src="@/assets/backround.jpg" alt="" class="bg-img" />
  </div>
</template>

<style scoped>
.bg-img {
  top: 0;
  left: 0;
  width: 1920px;
  position: fixed;
  z-index: -1;
}
.first {
  color: #29a48b;
  font-size: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
.second {
  color: white;
  text-align: center;
  font-size: 55px;
  font-family: "Times New Roman", Times, serif;
}
.third {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}
.space {
  margin-top: 90px;
}
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  background: rgb(29, 61, 86);
  background: linear-gradient(
    90deg,
    rgba(29, 61, 86, 1) 0%,
    rgba(29, 86, 104, 1) 100%
  );
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 40px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
.forma {
  border: 2px solid #bcbcbc;
  background: rgba(0, 0, 0, 0.7);
  opacity: 1;
  border-radius: 5%;
  font-family: "montserat" sans-serif;
}
.forma h1 {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
}
.forma p {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
}
.btn2 {
  position: relative;
  left: 100px;
  margin-top: 50px;
  font-family: "Montserrat" sans-serif;
}
</style>

<script>
import { firebase } from "@/firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password);
      then(function () {
        console.log("Uspješna registracija");
      }).catch(function (error) {
        comsole.error("Došlo je do greške", error);
      });
      console.log("Nastavak");
    },
  },
};
</script>
