<template>
    <div>
        <div class="ex-ad">
            <div class="ex-setting">
                <div class="ex-setSel">
                    <span>推广计划：</span>
                    <el-select v-model="value" placeholder="请选择" size="mini">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="ex-setSearch ex-search">
                    <el-input placeholder="请输入内容">
                        <i class="el-icon-search el-input__icon" slot="suffix">
                        </i>
                    </el-input>
                </div>
            </div>
            <div class="ex-adTable">
                <el-table :data="reporlist" style="width: 100%">
                    <el-table-column prop="datePart" label="广告名称" width="180px">
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
                    <el-table-column prop="impcount" label="状态">
                    </el-table-column>
                    <el-table-column prop="impcount" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="linkedu" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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
  methods:{
      linkedu(){
      this.$router.push({name:'modifyAd',params:{id:1}})
  }
  }
};
</script>
<style lang="less" scoped>
.ex-ad {
  padding: 0 8px;
  margin-bottom: 20px;
  padding-top: 5px;
}
.ex-setting {
  height: 30px;
}
.ex-setSel {
  margin-right: 10px;
  width: 190px;
  span {
    font-size: 12px;
    color: #262626;
  }
}
.ex-search {
  width: 203px;
  height: 28px;
  margin-bottom: 20px;
  float: left;
}
.ex-setSearch,
.ex-setSel {
  float: left;
}
.ex-pagination {
  margin-top: 30px;
  overflow: hidden;
  .el-pagination {
    float: right;
  }
}
</style>
<style>
.ex-setSel .el-select .el-input__inner {
  width: 125px !important;
  height: 28px !important;
}
.ex-search .el-input__inner {
  height: 28px !important;
}
</style>



