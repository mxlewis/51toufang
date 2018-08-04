<template>
  <div>
    <section class="ex-man">
      <h5>推广报表</h5>
      <div class="ex-time">
        <div class="extime-left">
          <ul class="ex-list clearFix">
            <li @click="timeCho(1)" :class="dataTime==1?'timeActive':''">今日
            </li>
            <li @click="timeCho(-1)" :class="dataTime==-1?'timeActive':''">昨日
            </li>
            <li @click="timeCho(7)" :class="dataTime==7?'timeActive':''">最近7天
            </li>
            <li @click="timeCho(30)" :class="dataTime==30?'timeActive':''">最近30天
            </li>
          </ul>
        </div>
        <div class="extime-right">
          <el-date-picker @change="chaTime" v-model="time" type="daterange" :editable='false' value-format="timestamp" :clearable="false" range-separator="~" start-placeholder="2018-08-01" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
    </section>
    <el-alert :title="content" type="warning"></el-alert>
    <section class="ex-con">
      <el-tabs type="border-card">
        <el-tab-pane label="推广计划">
          <tab1></tab1>
        </el-tab-pane>
        <el-tab-pane label="广告">
           <tab2></tab2>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
<script>
import tab1 from '@/page/ex-tab1'
import tab2 from '@/page/ex-tab2'
export default {
  data() {
    return {
      dataTime: 1,
      time: [
        new Date().setTime(new Date().getTime() - 3600 * 1000 * 24),
        new Date().getTime()
      ]
    };
  },
  components:{
    tab1,
    tab2
  },
  methods: {
    timeCho(a) {
      this.dataTime = a;
      switch (a) {
        case 1:
          this.time = [new Date().getTime(), new Date().getTime()];
          break;
        case -1:
          this.time = [
            new Date().setTime(new Date().getTime() - 3600 * 1000 * 24),
            new Date().getTime()
          ];
          break;
        case 7:
          this.time = [
            new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7),
            new Date().getTime()
          ];
          break;
        case 30:
          this.time = [
            new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 30),
            new Date().getTime()
          ];
          break;
      }
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        String(date.getDate()).length == 1 ? "0" + date.getDate() : date.getDate();
      return Y + M + D;
    },
    chaTime() {
      console.log(this.time);
      console.log(this.timestampToTime(this.time[0]));
    }
  },
  computed: {
    content() {
      return this.$store.state.content;
    },
    timeinit() {
      console.log(this.time);
    }
  }
};
</script>

<style lang='less'  scoped>
.ex-man {
  height: 98px;
  border: 1px solid #e4e5e7;
  background: #fff;
  border-left: 0;
  border-right: 0;
  padding-left: 20px;
  h5 {
    height: 53px;
    line-height: 53px;
    color: #262626;
    font-size: 14px;
    font-weight: 700;
  }
}
.extime-left {
  margin-right: 10px;
}
.extime-left,
.extime-right {
  float: left;
}
.ex-list {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  li {
    float: left;
    padding: 0 10px;
    line-height: 22px;
    cursor: pointer;
  }
}
.ex-list li:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.ex-list .timeActive,
.ex-list .timeActive:hover {
  background: #65a5f6;
  color: #fff;
}
.ex-list li:hover {
  background: #f3f4f4;
  color: #262626;
}
.ex-con {
  height: auto;
  border: 1px solid #e4e5e7;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

</style>

