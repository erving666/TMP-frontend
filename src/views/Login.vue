<template>
  <div class="login" id="box">
    <div id="c1">
      <!-- <div><img src="../assets/images/preorder/logo.png"></div> -->
      <div><a href="../wx/preorder">我要报名</a></div>
    </div>
    <div id="c2">
      <a href="javascript:">
        <!-- <img src="../assets/images/preorder/back.png"> -->
        <p>学生平台登录</p>
      </a>
    </div>
    <div id="c3">
      <form id="form">
        <p class="alert">平台账户：</p>
        <input
          id="account"
          name="account"
          tabindex="1"
          class="username"
          type="text"
          v-model="account"
          required
          autofocus
          placeholder="输入平台账户"
        />
        <p class="alert">平台密码：</p>
        <input
          id="psw"
          name="psw"
          tabindex="3"
          class="phone"
          type="password"
          v-model="psw"
          required
          placeholder="输入平台密码"
        />
        <input id="submit" type="submit" value="登录" @click="logForm" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// import { Vue, Component, Watch } from 'vue-property-decorator';
import { Options, Vue } from "vue-class-component";
import { LoginInfo } from "@/store/models";
import loginstore from "@/store/modules/login_store";
import router from "@/router";
// import StuTypeModel from '@/models/stutype_model'
// @Component({
//   components: {
//   },
// })
export default class Login extends Vue {
  public result: any = null;
  public account: any = null;
  public psw: any = null;


  async logForm(event: any) {
    event.preventDefault();

    const logInoStatus: LoginInfo = { account: this.account, psw: this.psw };

    await loginstore.Login(logInoStatus).then((data) => {
      console.log(loginstore.status);
      alert("test");

      if (loginstore.status == "1") {
        this.$router.push("/user/login");
        alert("logined");
      } else {
        alert("登录出错,请确认好账号和密码");
      }
    });

    // .then(data =>{

    // alert(data.result);

    // if(localStorage.getItem("access_token")!=""){

    //     this.$router.push("/");

    // }
    // else
    //     alert("你输入的用户名和密码不正确请重新输入");
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}

#box {
  display: flex;
  flex-direction: column;
}

#c1 {
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
}

#c1 div:first-child {
  flex: 1;
}

#c1 img {
  max-width: 40vw;
}

#c1 a {
  border: 1px solid orangered;
  color: orangered;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  border-radius: 4px;
  display: block;
}

#c2 {
  display: flex;
  background: #00af2e;
  padding: 0 0.5rem;
}

#c2 a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

#c2 img {
  max-width: 10vw;
}

#c2 p {
  color: white;
  font-weight: bolder;
}

#c3 {
  padding: 0 10vw;
}

.alert {
  font-size: 1rem;
  color: black;
  margin: 0.5rem 0;
  display: block;
  text-align: left;
}

#c3 form input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1rem;
  display: block;
}

#c3 form input::placeholder {
  color: gray;
}

#select1 {
  display: flex;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  margin: 1rem 0;
}

#select1 label {
  flex: 1;
  color: gray;
}

#select1 select {
  border: 0;
  background: 0%;
  font-size: 1rem;
  width: 30%;
  box-sizing: border-box;
  /* background-image: url(../assets/images/preorder/arrow.png); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
  -webkit-appearance: none;
  padding: 0 1.2rem;
}

#select2,
#select3,
#select4 {
  display: flex;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  margin: 1rem 0;
}

#select2 select,
#select3 select,
#select4 select {
  border: 0;
  background: 0%;
  font-size: 1rem;
  width: 60%;
  /* background-image: url(../assets/images/preorder/arrow.png); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
  -webkit-appearance: none;
  padding: 0 1.2rem;
}

#select2 label,
#select3 label,
#select4 label {
  flex: 1;
  color: gray;
}

#submit {
  color: white;
  background: #00af2e;
  margin: 2rem 0 !important;
  -webkit-appearance: none;
}
#alertin {
  font-size: 0.8rem;
  color: orange;
  display: block;
}
</style>
