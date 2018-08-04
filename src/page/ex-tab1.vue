<template>
    <div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="448px">
            <div class="day-number-con">
                <p >计划名称</p>
                <p class="max-inp">
                    <el-input></el-input>
                </p>
                <p  style="margin-top: 15px;">每日限额</p>
                 <p class="max-inp">
                    <el-input></el-input>
                </p>
                <p  style="margin-top: 15px;"><span >投放速度：<i  class="day-color">加速投放</i></span></p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <div class="ex-view">
            <el-row>
                <el-col :span="6">
                    <div class="mod">
                        <p class="mod-tit">总曝光量</p>
                        <p class="mod-data">0</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mod">
                        <p class="mod-tit">总点击量</p>
                        <p class="mod-data">0</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mod">
                        <p class="mod-tit">平均点击率</p>
                        <p class="mod-data">0%</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mod no-bor">
                        <p class="mod-tit">总花费(元)</p>
                        <p class="mod-data">0.00</p>
                    </div>
                </el-col>
            </el-row>

        </div>
        <div class="ex-table">
            <div class="ex-search">
                <el-input placeholder="请输入内容">
                    <i class="el-icon-search el-input__icon" slot="suffix">
                    </i>
                </el-input>
            </div>
            <div class="ex-tableCon">
                <el-table :data="reporlist" style="width: 100%">
                    <el-table-column prop="datePart" label="计划名称">
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
                    <el-table-column prop="impcount" label="限额(元/天)">
                    </el-table-column>
                    <el-table-column prop="impcount" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="test(scope)" type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="ex-pagination">
            <el-pagination layout="prev, pager, next" :total="80" @current-change='chpage($event)'>
            </el-pagination>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
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
      ],
      dialogFormVisible: false
    };
  },
  methods: {
    test(a) {
      console.log(a);
      this.dialogFormVisible = true;
    },
    chpage(page) {
      console.log(page);
    }
  },
  mounted() {
    console.log(1);
  }
};
</script>
<style lang="less" scoped>
.ex-view {
  border-bottom: 1px solid #e4e5e7;
  margin: 5px -20px;
  padding: 0 16px;
  padding-bottom: 16px;
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
.no-bor {
  border-right: 0;
}
.ex-table {
  padding: 18px;
}
.ex-search {
  width: 203px;
  height: 28px;
  margin-bottom: 20px;
  float: left;
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.ex-pagination {
  margin-top: 30px;
  overflow: hidden;
  .el-pagination {
    float: right;
  }
}
.day-number-con p {
    line-height: 30px;
}
</style>
<style>
.ex-search .el-input__inner {
  height: 28px !important;
}
.ex-search .el-input__icon {
  cursor: pointer;
  line-height: 28px;
}

</style>


