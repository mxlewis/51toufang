<template>
  <div class="maintop">
    <section class="user-info-tit">账户资料</section>
    <el-alert :title="content" type="warning">
    </el-alert>
    <section class="user-accunt" style="">
      <h5 class="accunt-notice">账号未审核</h5>
      <p>尊敬的用户，当前账号未进行身份验证，身份审核通过后即可进行广告投放。</p>
    </section>
    <section class="user-accunt" style="display:none">
      <h5 class="accunt-notice" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABmklEQVQ4ja3Vu2tUURAG8N9el+3Sq7FSC5uw4qPQTisDghGygn+EkBWimFhK8IGPRtv8AUlMhJCgNoKlGh8oWCiCD9KnEBSCFmcu3CX3rIH1g8Ph3pn5Zu49M99pbMwOqUELY7GOYTd+4zteYxGP4l0PmjVkZ3ET+/EWy/gaSYZxHOfxCZfxMEe4AzO4hMcYD8I6tHEDC5F8CptQVJxmMIlpjPYhE7bR8J2M2J4Kx6OyLu7VEExVkpb4E88/cRcvMN/YmB1q4TM+4FSmouXYT2fsqxjB3iY62IMzGeftYBqvcK6QWuMj1gYgXAuOsQJH8XQAshJPcKTATqnPBsU37Cqkbm/9B8IWqQ/XpUMZFMNYb+IdTvzD+cs2CE/iZYElHMChPs4XYuVwMDiWqo39XhqnOlyL/WrGXjb2vvJQLkpTMtGnihwmIraLX+Usz+EW7qAhzWYVucq6uB2xc/SqzRXcD9JVSaJyaGMlfB9ELHr1cFP68c9wHW8kmXpuq8C2JYHtYL6aqdHnCuhI6n04iOCHJAKL8YlbroC/pe1cRPvuQ5MAAAAASUVORK5CYII=)">账号审核中</h5>
      <p>尊敬的用户，当前账号未进行身份验证，身份审核通过后即可进行广告投放</p>
    </section>
    <section class="user-infor-con clearfix" style="">
      <div class="accunt-mod m-t-0">
        <p  class="identity">身份类型</p>
        <el-radio v-model="radio" label="1">企业广告主</el-radio>
      </div>
      <section class="accunt-tab" >
        <el-row class="max-inp">
          <el-col :span="12">
            <el-form label-position="top" label-width="80px">
              <el-form-item label="企业名称">
                <el-input v-model="name" placeholder="填写公司名称"></el-input>
              </el-form-item>
            </el-form>
            <div class="accunt-mod m-t-10">
              <p data-v-37ae6b32="" class="identity">营业执照</p>
              <div class="accunt-enter-upload clearFix spewidth">
                <el-upload class="upload-demo" drag action="http://api.xmadx.net/Main/Action/Upload/Upload/upload" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload-tit">营业执照</div>
                  <div data-v-37ae6b32="" class="el-upload__text">拖拽或
                    <em data-v-37ae6b32="">点击上传</em>，仅支持JPG/PNG,小于5M</div>
                </el-upload>
              </div>
            </div>
            <div class="accunt-mod">
              <p class="identity">法人身份证</p>
              <div class="accunt-enter-upload clearFix spewidth">
                <div class="upload-left">
                  <el-upload class="upload-demo" drag action="http://api.xmadx.net/Main/Action/Upload/Upload/upload" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload-tit">营业执照</div>
                    <div data-v-37ae6b32="" class="el-upload__text">拖拽或
                      <em data-v-37ae6b32="">点击上传</em>，仅支持JPG/PNG,小于5M</div>
                  </el-upload>
                </div>
                <div class="upload-right">
                  <el-upload class="upload-demo" drag action="http://api.xmadx.net/Main/Action/Upload/Upload/upload" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload-tit">营业执照</div>
                    <div data-v-37ae6b32="" class="el-upload__text">拖拽或
                      <em data-v-37ae6b32="">点击上传</em>，仅支持JPG/PNG,小于5M</div>
                  </el-upload>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="accunt-sample">
              <div data-v-37ae6b32="" class="accunt-mod m-t-0">
                <p data-v-37ae6b32="" class="identity">示例</p>
                <p data-v-37ae6b32=""><img data-v-37ae6b32="" src="data:image/png;base64,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" alt=""></p>
              </div>
              <div  class="accunt-mod "><p  class="identity">示例</p> <p  class="identity-img"><img  src="http://dsp.xmadx.com/static/img/face-card.90ef322.png" alt=""> <img  src="http://dsp.xmadx.com/static/img/back-card.058b79e.png" alt=""></p></div>
            </div>
          </el-col>
        </el-row>
        <section class="accunt-notice-txt clearFix">注意： 提交后信息无法再次修改</section>
        <div class="plan-btn accunt-btn">
            <el-button type="primary">确认提交</el-button>
        </div>
      </section>
     
    </section>
     <section class="user-infor-con" style="display:none">
          <el-form label-position="top" label-width="80px">
              <el-form-item label="企业名称">
                <el-input   disabled placeholder="填写公司名称"></el-input>
              </el-form-item>
            </el-form>
            <div  class="accunt-mod"><p  class="identity">营业执照</p> <p  class="accunt-imgbg"><img  src="http://aldpicsh-1252823355.cossh.myqcloud.com/ad_advertiser/15329170789431.jpg" alt=""></p></div>
            <div  class="accunt-mod"><p  class="identity">法人身份证</p> <p  class="accunt-imgbg accunt-float"><img  src="http://aldpicsh-1252823355.cossh.myqcloud.com/ad_advertiser/15329170832971.jpg" alt=""></p> <p  class="accunt-imgbg accunt-float"><img  src="http://aldpicsh-1252823355.cossh.myqcloud.com/ad_advertiser/15329170973773.jpg" alt=""></p></div>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      name: ""
    };
  },
  computed: {
    content() {
      return this.$store.state.content;
    }
  }
};
</script>
<style lang="less" scoped>
.user-info-tit {
  height: 48px;
  background: #fff;
  border-top: 1px solid #e4e5e7;
  border-bottom: 1px solid #e4e5e7;
  line-height: 48px;
  text-indent: 20px;
  font-size: 14px;
  color: #262626;
  font-weight: 700;
}
.user-accunt {
  height: 60px;
  margin: 20px 20px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 222, 201);
  border-image: initial;
  background: rgb(255, 252, 225);
  padding: 16px 0px 0px 19px;
  p {
    color: rgb(89, 89, 89);
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-indent: 27px;
  }
}
.accunt-notice {
  height: 20px;
  text-indent: 27px;
  font-size: 14px;
  color: rgb(38, 38, 38);
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABmElEQVQ4ja3Vy2oUURAG4K/bYZ5BjSt1KyNEF5HZ6MqAYISMIJJHEDJCFBOXErzgZaNP4C6JQQgGdSNkqcYLCi4MghfyBjIKQRenGnpIdwwZf2gO3VX1VzVV9Z+sl7dVoImxeEawF7/xHW+wiMfxrQ+NCrIzuImDeIclfI0kQziGc/iMy3hUR7gLs7iEpxgPwiq0cAMLkXwaG5CXnGYxhRmMbkEmbKPhOxWxfRWOR2Vd3KsgmC4lLfAn3n/iLl5iPuvl7SbW8BEnaypaivNUjX0Zh7C/gQ724XSN83Ywg9c4m0uj8QmrAxCuBsdYjqN4PgBZgWc4kmO3NGeD4hv25NK0N/8DYZM0h+tSUwbFENYbeI/j/3D+sg3CE3iV9fL2eTzEsJ13+rAkGhPlwf4grVMVrsV5tcZeDPaBoikXpS2Z3EF1kxHbxa9il+dwC3eQSbtZRl1lXdyO2Dn61eYK7gfpsiRRdWjhSfg+iFj06+EGLuAFruOtJFMrNgtsSxLYDubLmbItroCOpN7DQQQ/JBFYjF/cdAX8BeHGXEmBNuEtAAAAAElFTkSuQmCC);
}
.user-infor-con {
  min-width: 1080px;
  min-height: 900px;
  padding-top: 25px;
  padding-left: 30px;
  margin: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 229, 231);
  border-image: initial;
  background: rgb(255, 255, 255);
}
.accunt-mod {
  margin-bottom: 10px;
  margin-top: 30px;
  .identity {
    color: rgb(38, 38, 38);
    margin-bottom: 10px;
  }
}
.accunt-mod.m-t-0 {
  margin-top: 0px;
}
.accunt-enter-upload {
  height: 180px;
}
.spewidth {
  width: 360px;
}
.el-upload-tit {
  color: rgb(89, 89, 89);
  font-size: 14px;
  margin-bottom: 19px;
}
.upload-left,
.upload-right {
  width: 360px;
  height: 180px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
.upload-left {
  margin-bottom: 30px;
}
.accunt-sample {
  padding-top: 75px;
}
.identity-img img {
    margin-right: 20px;
    margin-bottom: 20px;
}
.accunt-notice-txt{
    width: 100%;
    height: 30px;
    border-top: 1px solid #edf1f5;
    margin-top: 20px;
    font-size: 12px;
    color: #999;
    line-height: 30px;
    margin-bottom: 40px;
    float: left;
}
.accunt-btn{
    // float: left;
    margin-bottom: 20px;
}
.plan-btn .el-button {
    height: 34px!important;
    line-height: 34px!important;
    padding: 0!important;
}
#lenBtn.el-button, .plan-btn .el-button {
    width: 152px!important;
}
.el-input__inner {
  width: 408px !important;
  height: 34px !important;
}
.accunt-imgbg{
    width: 318px;
    height: 137px;
    border: 1px dotted #edf1f5;
    border-radius: 4px;
    background: #f6f6f6;
    padding: 20px;
    margin-bottom: 20px;
    img{
          width: 318px;
    height: 138px;
    }
}
.accunt-float{
    float: left;
    margin-right: 20px;
}
</style>
