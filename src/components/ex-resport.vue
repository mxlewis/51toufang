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
    <div class="ex-resportCon">
      <section class="ex-repTable">
        <div class="ex-adTable">
          <el-table :data="reporlist" style="width: 100%">
            <el-table-column prop="datePart" label="时间">
            </el-table-column>
            <el-table-column prop="click_avg_cos" label="曝光量">
            </el-table-column>
            <el-table-column prop="cos" label="点击量">
            </el-table-column>
            <el-table-column prop="ctr" label="点击率">
            </el-table-column>
            <el-table-column prop="clickcount" label="点击均价">
            </el-table-column>
            <el-table-column prop="impcount" label="花费">
            </el-table-column>
          </el-table>
        </div>
      </section>
      <div class="ex-pagination">
        <el-pagination layout="prev, pager, next" :total="80" @current-change='chpage($event)'>
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTime: 1,
      time: [
        new Date().setTime(new Date().getTime() - 3600 * 1000 * 24),
        new Date().getTime()
      ],
      reporlist: [
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "00:00 - 00:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "01:00 - 01:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "02:00 - 02:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "03:00 - 03:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "04:00 - 04:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "05:00 - 05:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "06:00 - 06:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "07:00 - 07:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "08:00 - 08:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "09:00 - 09:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "10:00 - 10:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "11:00 - 11:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "12:00 - 12:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "13:00 - 13:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "14:00 - 14:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "15:00 - 15:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "16:00 - 16:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "17:00 - 17:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "18:00 - 18:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "19:00 - 19:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "20:00 - 20:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "21:00 - 21:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "22:00 - 22:59"
        },
        {
          impcount: "0",
          clickcount: "0",
          ctr: "0%",
          cos: "0",
          click_avg_cos: "0",
          datePart: "23:00 - 23:59"
        }
      ]
    };
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
    },
    chpage(page){
      console.log(page)
    }

  },
  computed: {
    content() {
      return this.$store.state.content;
    }
  }
};
</script>
<style lang="less" scoped>

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

//
.ex-resportCon {
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #e4e5e7;
  padding-bottom: 20px;
  background: #fff;
  margin-right: 20px;
  min-width: 1080px;
}
.ex-repTable {
  padding: 0 20px;
}
.ex-pagination{
  margin-top: 30px;
  overflow: hidden;
  .el-pagination{
    float: right;
  }

}
</style>
