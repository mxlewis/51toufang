<template>
  <div class="maintop">
    <section class="new-adTop">编辑广告</section>
    <!-- 新建内容-->
    <section class="new-adCon clearfix">
      <div class="new-ad-left fl">
        <div class="newAd-step1 step">
          <p class="step-num">
            <i class="step-round step-active">1</i>
            <span class="step-numActive">新建广告</span>
          </p>
          <p class="step-line step-lineActive"></p>
          <p class="step-num">
            <i :class="['step-round',currentstep==2?'step-active':'']">2</i>
            <span :class="currentstep==2?'step-numActive':''">添加广告创意</span>
          </p>
        </div>
      </div>
      <div class="new-ad-right fl clearfix">
        <!-- 新建广告第二步骤-->
        <section class="new-ad-ad" v-show="stepArr[1]">
          <div class="ad-adCon">
            <div class="ad-adname max-inp">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="广告名称">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="投放类型">
                  <el-radio v-model="radio" label="1">小程序</el-radio>
                  <el-input v-model="formLabelAlign.region" placeholder="请输入小程序名称"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <!-- 定向人群-->
            <div class="ad-direction">
              <h5>定向人群</h5>
              <div class="dirmod">
                <p class="mod-lable">手机系统</p>
                <div class="mod-posLabel">
                  <el-radio-group v-model="radio2">
                    <el-radio :label="3">不限</el-radio>
                    <el-radio :label="6">android</el-radio>
                    <el-radio :label="9">ios</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="dirmod">
                <p class="mod-lable">网络类型</p>
                <div :class="['mod-posLabel',ifnetwork==true?'activeH':'']">
                  <!-- 头部-->
                  <div class="radio clearfix">
                    <el-radio-group v-model="radio3" class="fl">
                      <el-radio :label="7" @change="closenetwork">不限</el-radio>
                      <el-radio :label="8" @change="selectnetwork">选择网络</el-radio>
                    </el-radio-group>
                    <div class="openLabel fr" v-show="network">
                      <span @click="ifdownFn" v-show="!ifnetwork">展开
                        <i class="el-icon-arrow-down"></i>
                      </span>
                      <span @click="ifdownFn" v-show="ifnetwork">收起
                        <i class="el-icon-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <!-- 选择内容-->
                  <div class="openCon" v-show="ifnetwork">
                    <div>
                      <div class="ad-choosedemo">
                        <ul class="clearfix">
                          <li class="fl" v-for="item in checkedCities" :key="item">{{item}}
                            <em>x</em>
                          </li>
                        </ul>
                        <!-- 多选-->
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dirmod">
                <p class="mod-lable">性别</p>
                <div class="mod-posLabel">
                  <el-radio-group v-model="radio4">
                    <el-radio :label="3">不限</el-radio>
                    <el-radio :label="6">男</el-radio>
                    <el-radio :label="9">女</el-radio>
                  </el-radio-group>
                </div>
                <div class="ad-line"></div>
              </div>
            </div>
            <!-- 广告样式-->
            <div class="ad-style clearfix">
              <div class="ad-style-Box clearfix" style="min-height: 400px">
                <h5>广告样式</h5>
                <div class="ad-style-left fl">
                  <ul class="ad-style-list">
                    <li @click="changeadverst(0)" :class="adverstsel==0?'adActive':''">
                      <p>
                        <i :class="['ad-style-i',adverstsel==0?'adActive':'']">广告样式</i>
                        <span :class="['ad-style-span',adverstsel==0?'adActive':'']">Banner广告</span>
                      </p>
                      <p>
                        <i :class="['ad-style-i',adverstsel==0?'adActive':'']">创意样式</i>
                        <span :class="['ad-style-span',adverstsel==0?'adActive':'']">582x166px</span>
                      </p>
                      <p class="ad-ok-pos" v-show="adverstsel==0"></p>
                    </li>
                    <li @click="changeadverst(1)" :class="adverstsel==1?'adActive':''">
                      <p>
                        <i :class="['ad-style-i',adverstsel==1?'adActive':'']">广告样式</i>
                        <span :class="['ad-style-span',adverstsel==1?'adActive':'']">插屏广告</span>
                      </p>
                      <p>
                        <i :class="['ad-style-i',adverstsel==1?'adActive':'']">创意样式</i>
                        <span :class="['ad-style-span',adverstsel==1?'adActive':'']">600x500px</span>
                      </p>
                      <p class="ad-ok-pos" v-show="adverstsel==1"></p>
                    </li>
                    <li :class="adverstsel==2?'adActive':''" @click="changeadverst(2)">
                      <p>
                        <i :class="['ad-style-i',adverstsel==2?'adActive':'']">广告样式</i>
                        <span :class="['ad-style-span',adverstsel==2?'adActive':'']">悬浮窗</span>
                      </p>
                      <p>
                        <i :class="['ad-style-i',adverstsel==2?'adActive':'']">创意样式</i>
                        <span :class="['ad-style-span',adverstsel==2?'adActive':'']">200x200px</span>
                      </p>
                      <p class="ad-ok-pos" v-show="adverstsel==2"></p>
                    </li>
                  </ul>
                </div>
                <div class="ad-style-right fl">
                  <img :src="currentimg" />
                </div>
              </div>
              <!-- 投放时间及价格-->
              <div class="delivery-time">
                <p class="deliver-tit">投放时间及价格</p>
                <!-- 投放日期-->
                <div class="dirmod">
                  <p class="mod-lable">投放日期</p>
                  <div class="mod-posLabel speActive">
                    <div class="radio">
                      <el-radio v-model="radio7" label="1">长期投放</el-radio>
                      <el-radio v-model="radio7" label="2">固定日期投放</el-radio>
                    </div>
                    <div class="delvCon">
                      <template>
                        <div class="block">
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                          </el-date-picker>
                        </div>
                      </template>
                    </div>
                    <div class="delvCon" style="display: none">
                      <template>
                        <div class="block">
                          <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                          </el-date-picker>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
                <!-- 投放时间-->
                <div class="dirmod">
                  <div class="mod-lable">投放时间</div>
                  <div class="mod-posLabel timeActive">
                    <div class="radio">
                      <el-radio v-model="radio9" label="9" @change="closetime">全天投放</el-radio>
                      <el-radio v-model="radio9" label="10" @change="opentime">特定时间段</el-radio>
                    </div>
                    <!-- 特定时间段-->
                    <div class="timeBox" v-show="selecttime">
                      <template>
                        <el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                        </el-time-picker>
                        <el-time-picker is-range v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                        </el-time-picker>
                      </template>
                    </div>
                  </div>
                </div>
                <!-- 出价方式-->
                <div class="dirmod">
                  <p class="mod-lable">出价方式</p>
                  <div class="mod-posLabel">
                    <template>
                      <el-radio disabled v-model="radio8" label="选中且禁用">CPC</el-radio>
                    </template>
                  </div>
                </div>
                <!-- 出价价格-->
                <div class="dirmod">
                  <p class="mod-lable">出价价格</p>
                  <div class="max-inp">
                    <el-input v-model="formLabelAlign1.name" placeholder="请输入(建议出价0.4~100元/点击)"></el-input>
                  </div>
                  <div class="cpctip">实际出价价格在0.4~100区间且最多精确到两位小数</div>
                </div>
                <!-- 上一步，下一步-->
                <div class="plan-btn">
                  <button class="active" @click="changeStep(1,'go')">下一步</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 新建广告第三步骤-->
        <section class="new-ad-origin" v-show="stepArr[2]">
          <div class="new-ad-originCon clearfix">
            <div class="ad-origin-left fl">
              <!-- 上传预览图片-->
              <div class="new-ad-upload">
                <p class="upload-tit">上传预览图片</p>
                <div class="upload-con">
                  <div class="upload-demo">
                    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload-tit">640*1136px</div>
                      <div class="el-upload__text">拖到此处，或
                        <em>点击上传</em>，仅支持JPG/PNG，小于500kb</div>
                      <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    </el-upload>
                  </div>
                </div>
              </div>
              <!-- 上传广告图片-->
              <div class="new-ad-upload">
                <p class="upload-tit">上传广告图片</p>
                <div class="upload-con">
                  <div class="upload-demo">
                    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload-tit">200*200px</div>
                      <div class="el-upload__text">拖到此处，或
                        <em>点击上传</em>，仅支持JPG/PNG，小于100kb</div>
                      <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    </el-upload>
                  </div>
                </div>
              </div>
              <!-- 上一步，下一步-->
              <div class="plan-btn">
                <template>
                  <el-button type="text" @click="changeStep(2,'back')">上一步</el-button>
                  <el-button type="text" @click="open" style="background-color: #65a5f6;color: #fff">下一步</el-button>
                </template>
                <!--<button class="active">下一步</button>-->
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script type="es6">
export default {
  data() {
    return {
      radio: 1,
      radio2: 3,
      radio3: 7,
      radio4: 3,
      radio7: "1",
      radio8: "选中且禁用",
      radio9: "9",
      labelPosition: "top",
      currentIndex: 0,
      showplan: true,
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      formLabelAlign1: {
        name: "",
        region: "",
        type: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      checkAll: false, //多选x4
      checkedCities: [],
      cities: ["WIFI", "4G", "3G"],
      isIndeterminate: true,
      pickerOptions1: {
        //日期
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value6: "", //固定日期投放
      stepArr: [true, true, false], //控制下一步上一步
      currentstep: 0, //控制进度
      network: false, //选择网络板块
      ifnetwork: false, //控制选择网络小板块
      adverstsel: 2, //广告样式
      currentimg: "/static/image/bottom.png",
      adverstimg: [
        "/static/image/banner.png",
        "/static/image/middle.png",
        "/static/image/bottom.png"
      ],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      selecttime: false //特定时间段板块
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    changeplan(index) {
      this.currentIndex = index;
      this.showplan = !this.showplan;
    },
    handleCheckAllChange(val) {
      //多选
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      //多选
      let checkedCount = value.length;
      console.log(value);
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    open() {
      //弹窗
      this.$alert(
        "广告已经提交成功，会在一个工作日内完成审核工作",
        "已提交成功",
        {
          confirmButtonText: "确定",
          callback: action => {
            this.$router.push({ path: "/" });
          }
        }
      );
    },
    changeStep(index, string) {
      //跳转下一步和上一步
      console.log(index);
      let newstep = this.stepArr.map(item => {
        item = false;
        return item;
      });
      if (string == "back") {
        newstep[index - 1] = true;
        this.currentstep = index - 1;
      } else if (string == "go") {
        newstep[index + 1] = true;
        this.currentstep = index + 1;
      }
      this.stepArr = newstep;
      console.log(this.stepArr);
    },
    selectnetwork() {
      //关闭选择网络
      this.network = true;
      this.ifnetwork = true;
    },
    closenetwork() {
      //打开选择网络
      this.network = false;
      this.ifnetwork = false;
    },
    ifdownFn() {
      this.ifnetwork = !this.ifnetwork;
    },
    changeadverst(index) {
      //广告样式
      this.adverstsel = index;
      this.currentimg = this.adverstimg[index];
    },
    opentime() {
      //打开选择时间段
      console.log(1);
      this.selecttime = true;
    },
    closetime() {
      //关闭选择时间段
      this.selecttime = false;
    }
  },
  created(){
    console.log(this.thisRouter)
  },
  computed: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
import { MessageBox } from 'element-ui';
<style scoped>
.new-adTop {
  height: 48px;
  border-top: 1px solid #e4e5e7;
  border-bottom: 1px solid #e4e5e7;
  background: #fff;
  text-indent: 20px;
  line-height: 48px;
  color: #262626;
  font-size: 14px;
  font-weight: 700;
}
.new-adCon {
  min-height: 727px;
  min-width: 930px;
  background: #fff;
  border: 1px solid #e4e5e7;
  margin: 20px 20px 0;
  padding: 40px 0 0 40px;
}
.step {
  width: 152px;
}
.step-num {
  height: 20px;
}
i {
  font-style: normal;
}
.step-round {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #d5d5d5;
  text-align: center;
  line-height: 20px;
  color: #fff;
  margin-right: 6px;
}
.step-line {
  height: 50px;
  width: 2px;
  background: #d5d5d5;
  margin-left: 9px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.step-active {
  background: #62a7f6;
}
.step-numActive {
  color: #62a7f6;
}
.step-lineActive {
  background: #62a7f6;
}
.new-ad-plan {
  border-left: 1px solid #e4e5e7;
  height: auto;
  padding-left: 54px;
  float: left;
  width: 600px;
  margin-left: 90px;
}
.new-ad-tab {
  width: 409px;
  height: 26px;
  border-bottom: 1px solid #e4e5e7;
  margin-bottom: 10px;
}
.new-ad-tab li {
  padding: 0 14px;
  border-bottom: 2px solid transparent;
  float: left;
  height: 25px;
  cursor: pointer;
}
.new-ad-tab li.changeActive {
  border-color: #62a7f6;
  color: #62a7f6;
}
.el-form-item {
  margin-bottom: 9px !important;
}
.el-form--label-top .el-form-item__label {
  padding: 0 !important;
  font-size: 12px !important;
  color: #262626;
}
.el-form-item__content {
  line-height: 20px !important;
}
.choose-plan {
  margin-top: 20px;
}
.toufang_spead {
  margin: 18px 0 9px 0;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  height: 30px !important;
  line-height: 30px !important;
  padding: 0px 50px;
  font-size: 12px !important;
  margin-top: 30px;
}
.choose-plan-con {
  margin-bottom: 10px;
}
.choose-sel-tit {
  width: 95px;
  text-align: left;
  color: #262626;
  padding-left: 3px;
  margin-bottom: 8px;
}
.choose-sel-mod {
  padding-top: 17px;
}
.p-t-20 {
  padding-top: 15px;
}
.choose-sel-mod i {
  display: inline-block;
  padding-left: 3px;
  color: #595959;
}
.ad-adCon {
  min-width: 795px;
  border-left: 1px solid #e4e5e7;
  height: auto;
  padding-left: 50px;
}
.ad-adname {
  width: 96%;
  min-height: 160px;
  padding-bottom: 12px;
  border-bottom: 1px solid #edf1f5;
  margin-bottom: 20px;
}
.el-form--label-top .el-form-item__label {
  padding: 0 !important;
  font-size: 12px !important;
  color: #262626;
}
.el-radio .el-radio__inner {
  width: 12px !important;
  height: 12px !important;
}
.el-radio__label {
  font-size: 12px;
}
.ad-adname .el-form-item {
  margin-bottom: 5px !important;
}
.ad-adname {
  padding-bottom: 36px;
}
.ad-direction h5,
.ad-style h5 {
  font-size: 14px;
  color: #262626;
  height: 32px;
  line-height: 32px;
}
.dirmod {
  margin-bottom: 10px;
}
.mod-lable {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #262626;
}
.mod-posLabel {
  width: 710px;
  line-height: 34px;
  border: 1px solid #edf1f5;
  border-radius: 2px;
  background: #fafafa;
  padding-left: 20px;
  overflow: hidden;
  padding-right: 20px;
}
.radio {
  position: relative;
}
.mod-posLabel.activeH {
  height: 325px;
}
.radio .el-radio {
  vertical-align: middle;
  line-height: 34px !important;
}
.openCon {
  padding: 20px;
  background: #fff;
  border: 1px solid #e4e5e7;
  margin-bottom: 20px;
  height: 230px;
}
.ad-choosedemo li {
  padding: 0 12px;
  line-height: 26px;
  background: #62a7f6;
  color: #fff;
  border-radius: 15px;
  margin-right: 5px;
  float: left;
}
i,
em {
  font-style: normal;
}
.ad-choosedemo li em {
  display: inline-block;
  margin-left: 5px;
  font-size: 16px;
  cursor: pointer;
  line-height: 26px;
  vertical-align: bottom;
}
.ad-line {
  width: 96%;
  height: 1px;
  line-height: 1px;
  background: #edf1f5;
  margin-top: 30px;
  margin-bottom: 10px;
}
.ad-style {
  padding-bottom: 40px;
}
.ad-style-list li {
  width: 256px;
  height: 78px;
  border: 1px solid #edf1f5;
  background: #f6f6f6;
  padding: 18px 0 0 26px;
  margin-bottom: 20px;
  position: relative;
}
.ad-style-left {
  margin-right: 50px;
}
.ad-style-left,
.ad-style-right {
  min-height: 236px;
}
.ad-style-i {
  color: #595959;
  padding-right: 10px;
}
.ad-style-span {
  color: #262626;
}
.ad-style-list li.adActive {
  color: #fff;
  background: #62a7f6;
}
.ad-style-i.adcActive,
.ad-style-span.adcActive {
  color: #fff;
}
.ad-style-list li p {
  margin-bottom: 18px;
}
.ad-ok-pos {
  width: 31px;
  height: 28px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAACE0lEQVRIicXWS0gVcRTH8c/cUkspSRN3ElqBChHUpk1ID8L2tYg2aUUtUoIeuxDsQUJvaJPULmiZQkSPRUGPRREVWF3JhYRhWFGSkdZMi9Gwy/Xm4+b9bYY5//+c7+HM+Z//CaIo2o5mBLKrqziDaKINQRRFsBlHMDfLAdxCC4YzwWENTqIwywE8xQEMZoJDDc5hUZYDeIt9+DDemEjZ1IVG9GUZXoUro88J4dCLBiSzHEA52rEqExwGsAtPZkp8M6Bwd2dYO/q6ABewMRMcvqEJd6cL7vlkXsu9aNmv8K9jnI/j2JZacOmUwEFsSbc4NCJRmCdMtfd+UXD4TlidCIKwtS7orizxPZ3jfykUH8GL0jSMxo5wRcdri8fb3g/KP3Q7rC7K8/PspuBVOvBk4WO6jKOjwfxR/dKgv/15WHHtZVQOfYPym26GNaXzDZ+vD7rKioxM5HAyaU/VWpxAwZihM2nxpWdhRV1F8PHBu6hkSXEw1LYhSM5JTNxapwuHlTiNhWOGh72K2x6FVbVlweCxdUH3ZJxMFw6V4mNTPl0HU/nnqeoRN6OeXMChHzvxIhdw+Iq9uJ8LOPwQX5vXp/LRTAourT9xFhpyAR/TVnEmMmb2f8FhPVrFF8msw2E1TqEoF3BYLm5GpakL2ar2TEpih3hCmnU48UzYKJ4RZx0On7EHj3MBhyHsxw1mp+DSKUDzb5YPop5kdRw3AAAAAElFTkSuQmCC);
  position: absolute;
  top: 0;
  right: 0;
}
.ad-style h5 {
  height: 52px;
  line-height: 52px;
}
.ad-style-right {
  width: 240px;
  height: 300px;
  /*background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAADpCAYAAADxl8OHAAAH2klEQ…/SyLIsAr4JfBt4A3gN2F35Ilu3Q+AT4EPgj8Bf8jxfeen8H338RquJOqczAAAAAElFTkSuQmCC) no-repeat;*/
  background-size: 180px 330px;
  padding: 39px 11px;
}
.ad-style-right img {
  width: 157px;
  height: 252px;
}
.delivery-time .deliver-tit {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  color: #262626;
}
.mod-posLabel.speActive {
  height: auto;
}
.delvCon {
  margin-bottom: 10px;
}
.cpctip {
  color: #f56c6c;
  font-size: 12px;
}
.plan-btn {
  margin-top: 40px;
}
.plan-btn button:nth-of-type(1) {
  margin-right: 20px;
}
.plan-btn button {
  width: 152px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: #65a5f6;
  border: 1px solid #65a5f6;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
}
.plan-btn button.active {
  background-color: #65a5f6;
  color: #fff;
}
.ad-origin-left {
  float: left;
  border-left: 1px solid #e4e5e7;
  padding-left: 50px;
}
.new-ad-upload {
  margin-bottom: 10px;
}
.upload-tit {
  height: 30px;
  line-height: 30px;
  color: #262626;
}
.ad-origin-left .upload-tit {
  margin-top: -8px;
}
.el-upload-tit {
  color: #595959;
  font-size: 14px;
  margin-bottom: 19px;
}
.openLabel span {
  cursor: pointer;
}
</style>
<style>
.el-input__icon {
  line-height: 36px !important;
}
.delvCon .el-input__inner {
  height: 24px !important;
  line-height: 24px !important;
  width: 220px !important;
}
.el-range-editor.el-input__inner {
  padding: 3px 3px 3px 10px;
}
.el-date-editor .el-range-input,
.el-range-separator {
  font-size: 12px !important;
  color: #999 !important;
  line-height: 15px !important;
}
.el-date-editor .el-range__icon {
  line-height: 14px !important;
}
.el-upload-dragger .el-upload__text {
  color: #999 !important;
  font-size: 12px !important;
}
.el-button {
  line-height: 11px !important;
}
.timeBox .el-date-editor--timerange.el-input__inner {
  width: 200px !important;
}
.timeBox .el-input__inner {
  height: 26px !important;
  line-height: 26px !important;
}
</style>
