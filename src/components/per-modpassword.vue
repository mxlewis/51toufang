<template>
    <div class="main">
        <section class="per-modpass-tit">修改密码</section>
        <el-alert :title="content" type="warning">
        </el-alert>
        <section class="per-modpass-con max-inp">
            <el-form :model="ruleForm2" :rules="rules2" label-position='top' ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="旧密码" prop="oldPass">
                    <el-input type="password" v-model="ruleForm2.oldPass"  maxlength="16"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass" >
                    <el-input type="password" v-model="ruleForm2.pass" maxlength="16"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" maxlength="16"></el-input>
                </el-form-item>
            </el-form>
            <div class="podpass-btn plan-btn">
                <el-button @click="sub" type="primary">确认</el-button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        oldPass: "",
        pass: "",
        checkPass: ""
      },
      rules2: {
        oldPass: [{ validator: validatePass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
   sub(){
       console.log(this.ruleForm2)
       if(this.ruleForm2.oldPass ==""){
        this.$message.error('请输入旧密码');
        return
       }
       if(this.ruleForm2.pass =="" || this.ruleForm2.checkPass ==""){
        this.$message.error('请输入新密码');
        return
       }
      
       if(this.ruleForm2.pass !=this.ruleForm2.checkPass){
        this.$message.error('两次输入密码不一致!');
        return
       }
        if(this.ruleForm2.pass.length<6){
        this.$message.error('密码长度应为6位以上');
        return
       }
       
   }
  },
   async mounted() {
    //  this.$get('/public/sendSms',{ajax:"1"}).then(res=>{
    //    console.log(res)
    //  })
    let res = await this.$post('/public/sendSms',{ajax:"1"});
    console.log(res)
  },
  computed: {
    content() {
      return this.$store.state.content;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.main {
  .per-modpass-tit {
    height: 48px;
    border-top: 1px solid #e4e5e7;
    border-bottom: 1px solid #e4e5e7;
    text-indent: 19px;
    font-size: 14px;
    color: #262626;
    line-height: 48px;
    background: #fff;
    font-weight: 700;
  }
}
.per-modpass-con {
  margin: 20px;
  min-height: 700px;
  background: #fff;
  border: 1px solid #e4e5e7;
  padding-top: 25px;
  padding-left: 30px;
}
.el-form-item.is-required .el-form-item__label:before {
  display: none;
}
.podpass-btn {
  margin-top: 40px;
  .el-button {
    width: 152px !important;
    height: 34px !important;
    line-height: 34px !important;
    padding: 0 !important;
  }
}
</style>
