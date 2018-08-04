<template>
  <div class="wrap">
    <!--通知条-->
    <el-alert :title="content" type="warning">
    </el-alert>
    <!-- 主题部分-->
    <div class="content_wrap">
      <!-- 最新数据-->
      <div class="new_data">
        <p class="data_title">最新数据
          <span>（当日数据仅供参考，请以隔天数据为准）</span>
        </p>
        <el-row>
          <el-col :span="6">
            <div class="mod">
              <p class="mod-tit">今日花费</p>
              <p class="mod-data">0
                <i>元</i>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mod">
              <p class="mod-tit">现金账户</p>
              <p class="mod-data">0.00
                <i>元</i>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mod">
              <p class="mod-tit">虚拟账户</p>
              <p class="mod-data">0.00
                <i>元</i>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mod">
              <p class="mod-tit">当前投放广告数</p>
              <p class="mod-data">0
                <i>个</i>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 广告趋势-->
      <section class="home-chartBox">
        <h5 class="chart-tit clearfix">
          <span class="">广告趋势</span>
          <span class="home-view-time fr clearfix">
            <ul class="home-time-list  fl clearfix">
              <li :class="currentIndex=='today'?'timeActive':'' " @click="selectFn('today')">今日</li>
              <li :class="currentIndex=='yesterday'?'timeActive':'' " @click="selectFn('yesterday')">昨日</li>
              <li :class="currentIndex=='sevenday'?'timeActive':'' " @click="selectFn('sevenday')">最近7天</li>
              <li :class="currentIndex=='monthday'?'timeActive':'' " @click="selectFn('monthday')">最近30天</li>
            </ul>
            <span class="extime-right m-t-1 fr">
              <template>
                <div class="block">
                  <!--<p>组件值：{{ value13 }}</p>-->
                  <el-date-picker v-model="value13" type="daterange" :clearable="false" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
                  </el-date-picker>
                </div>
              </template>
            </span>
          </span>
        </h5>
        <!-- 曝光量-->
        <!--<div class="home-chart-sel">-->
        <!--<template>-->
        <!--<el-select v-model="value" placeholder="请选择">-->
        <!--<el-option-->
        <!--v-for="item in options"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</template>-->
        <!--</div>-->
        <!-- 表格-->
        <div id="home-chart">
          <div id="myChart" :style="{width: '1660px', height: '371px'}"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="es6">
// 引入基本模板

let echarts = require("echarts/lib/echarts");
// 引入提示框和title组件
//require('echarts/lib/component/tooltip')
//require('echarts/lib/component/title')
export default {
  mounted() {
    this.drawLine();
  },
  data() {
    return {
      currentIndex: "today",
      value13: [],
      option: {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "曝光量",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "点击量",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "点击率",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "点击均价",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
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
      value: ""
    };
  },
  computed: {
    content() {
      return this.$store.state.content;
    }
  },
  created: function() {
    let current = changeDate("today");
    this.value13 = current;
  },
  methods: {
    selectFn(date) {
      this.currentIndex = date;
      let current = changeDate(date);
      this.value13 = current;
    },
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
};

//  时间戳转换
function changeDate(a) {
  let arr = new Array(2);
  const end = new Date();
  const start = new Date();

  //结束时间换算
  var end_day;
  if (a == "yesterday") {
    end_day = end.setDate(end.getDate() - 1);
  }
  end_day = end.getDate();
  const end_year = end.getFullYear();
  const end_month = end.getMonth() + 1;

  //开始时间换算
  if (a == "sevenday") {
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
  } else if (a == "monthday") {
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
  } else if (a == "yesterday") {
    start.setDate(end_day);
  }

  const start_year = start.getFullYear();
  const start_month = start.getMonth() + 1;
  const start_day = start.getDate();
  arr[0] = [start_year, start_month, start_day].map(formatNumber).join("/");
  arr[1] = [end_year, end_month, end_day].map(formatNumber).join("/");
  console.log(arr);
  return arr;
}

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  min-width: 1080px;
}
.notice {
  background-color: #fdf6ec;
  color: #e6a23c;
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  text-align: start;
}
.content_wrap {
  min-width: 1080px;
  padding: 20px;
}
.new_data {
  height: 150px;
  border: 1px solid #e4e5e7;
  background: #fff;
  margin-bottom: 20px;
}
.data_title {
  color: #262626;
  font-size: 14px;
  height: 52px;
  line-height: 52px;
  text-indent: 15px;
  text-align: start;
}
.data_title span {
  color: #999;
  font-size: 12px;
}
.mod {
  height: 80px;
  border-right: 1px solid #e8ecf1;
  padding-left: 30px;
  font-size: 12px;
}
.mod-tit {
  color: #999;
  height: 37px;
  line-height: 37px;
}
.mod-data {
  font-size: 32px;
  color: #262626;
}
.mod-data i {
  color: #999;
  font-size: 12px;
  font-style: normal;
  margin-left: 5px;
}
/*表格*/
.home-chartBox {
  border: 1px solid #e4e5e7;
  background: #fff;
  padding: 0 40px 20px 20px;
}
.chart-tit {
  height: 53px;
  line-height: 53px;
  font-size: 14px;
  color: #262626;
}
.home-view-time {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  background: #fff;
}
.home-time-list li {
  height: 20px;
  line-height: 20px;
  color: #262626;
  font-size: 12px;
  cursor: pointer;
  margin-right: 20px;
  border-bottom: 2px solid transparent;
  float: left;
}
.home-time-list .timeActive {
  border-color: #65a5f6;
  color: #65a5f6;
}
.m-t-1 {
  margin-top: -5px;
}
.extime-right .el-input__inner {
  height: 24px !important;
  width: 225px !important;
  line-height: 18px;
}
/*不生效*/
.extime-right .el-input__icon {
  line-height: 16px !important;
  color: #999;
}

</style>
