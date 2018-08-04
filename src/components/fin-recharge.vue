<template>
  <div>
    <section class="rec-tit">充值</section>
    <el-alert :title="content" type="warning"></el-alert>
    <div class="rec-view">
      <el-row>
        <el-col :span="6">
          <div class="mod p-t-20">
            <p class="mod-tit">日限额</p>
            <p class="mod-data">60.00
              <i class="rec-edit"> 元
                <em @click="dialogVisible = true"></em>
              </i>
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="mod p-t-20">
            <p class="mod-tit">现金账户</p>
            <p class="mod-data">0.00
              <i> 元</i>
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="mod p-t-20">
            <p class="mod-tit">虚拟账户</p>
            <p class="mod-data">0.00
              <i> 元</i>
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="mod no-bor p-t-20">
            <p class="mod-tit">总金额</p>
            <p class="mod-data">0
              <i> 元</i>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
    <section class="rec-step">
      <h3 class="rec-step-tit">充值流程
        <i>（目前仅支持线下支付，支付流程如下）</i>
      </h3>
      <div class="rec-step-list clearFix">
        <ul class="clearFix">
          <li><img src="data:image/png;base64,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" alt="">
            <p>联系客服</p>
            <em></em>
          </li>
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABkCAYAAAAG2CffAAAJXElEQVR4nO2de6xUxR3HP3Mec+RIfVCjGJuqRSiU3prYgta+Yo1pqYY2N8FAChSsSNKHWCWlNT6CYgSiIto24RErIgVDQ6oRbU0ssQ+rUk0sUgiIqC0RjEFQLnLmnDnTP2avhSv33r139zx2PZ9/d3bmt9+dnfnN78z+fqKrq4sS4wOXAhOBccAI4NTaa+8Cu4DNwGPA00Cct4FhGNbVzsvYjsEyBJgNzAMC4FFgObAFKzBYwTuAi4HfARGwCFgGfJCzvf0iGp3RgZRNMgUipQQwGVgMHAIWBFK+A1wOjAdGceyM3gG8AGyMlDoNuAkYCvwcWBdIaZpmXC+4Xn1ztTRCR0pdACwFxgLzAyljYC5wbp1d7AbuipTygVuBrcCcQMqXmmJgL7SM0JFSpwMLgBnASun7fxFCzMfO3sGwwxhzq4rjrwNXAw8CNwVSvt2Qob1Qr9BOFoPXQ6SUHyl1PbATGOm57uRAyhFCiLUMXmSAUUKItYGUIzzXnQyMBHZGSl1fm+2FUMiMjpSaACwBAkeI23zfHw/MAtyGjPkoGlgRx/Hm1JibsRvmzwIpn2zWAKVcOiKlRgH3AJcAiwMpjwC/BE5uyIj+OQjcGSl1Anaj3ARcH0i5o9GOS7V0REqdFCm1GOuevSd9/9pAyqnAQrIXmdoYCwMpp0rfvxZ4D9gSKbU4UuqkHMbPVuhIKSdS6irsOnyp67qzAimHCyFWAudlOXYvnCeEWBlIOdx13VnYw9DOSKmrIqUy1SKzpSNS6mKsu/ZpIcRC6ftjgZkUuAH3IAV+q+J4qzHmF8CbWHfw2YF0UtgaHSl1FvaENgn4TSDlAeAG4BMNDZQd7wN3R0qdAvwIWA/MC6TcU8+bcxe6ttHcANwIPOP7/h8dIa6j/gNH0exOjbk3juNvA98A7gDuqW3YvZKr0JFSncDdgHJd91ee604CvtZQx8Xx10Tr9VrrnwASuCGQckNvjfMSugO4F/iSEOJe6ftnA9MB0UinJcAAD6k4fsMYcx3wT+C6QMotPRtmLfQw4DbgGmCN9P29QoifAicOprMS02WMuV/F8XDg+9gI4i2BlPu7G2QltIcNX94ObPM973HHcWYDZw+kkxbkjTRNl8VJcgUwBrgZWBZImWQh9Dex7tqprusu81x3AvDlQRjdyvwj0fpJrfVsbJh2ThiGf67njfUIfS5wF/AdIcQy6funA1MaMrf1Wavi+G1jzGzgCWBuGIa7+3pDX0KfgA2kzwWelL7/hhBiFlDfs5v257AxZoWK47OBCdjJuCAMw+O6g70JPR54CNC+5/3BcZwfAGdlZXGLsydN01VxknwPG32cHobhCz0bHe843AlscoR4JpDygOM4N1KJ3BdnOY5zYyDlAUeIZ4BNhw8f7uzZqOeMvhzY4Lnur13XvYb2c9eypktrvTzR+sdAZxiGG7tfOFro0cCLnuuurkW2yhL8aTVSrfWKROtpwBfDMNwO/xfaBf7uOM5e3/O+hd0IKwbPkThJ/pSm6XDgK2EY6u5ZOw04x/e8z1GJ3AxOqGl5DlZbRFdXlwB2+J633XGcK4q0rt1I0/TxOElGA6M84ELgTMdxhhVsV9vhOM7F2JtWFzpAp+u6L2MDRRXNZVhN204HuMh1nFYPa5aWmrYXecAYIcShog1qV4QQZwJDPeylwepgkh1nANLD+tBDCjamnRkC1ekvN3K/iP7yPsGarYLXDkCS5j26xXdg9Cdheodh5LDMr1AD9sBimnmZvC/+tU8w/28Cnc9n6xfpwqJLDOeekq1BkVL5Lh3rtpVHZAClYf22fDzbXIXeub//Nnnz2sF8xslV6LigNbkvTE42VV5HTuTqdczsyHO0+gi9NvQ6Pq7k7nV8nKmEzolK6JzIdTOc9lg5v9fVE7P38XIV+n2V52jlopxTrA2phM6JSuicKCwxyokeOA18zZG20bdWoTChb/mq4bOnDf74u2aryC3E2QwKE3rP++C7gxfqwJHWERkKFPq+F1tLqEapNsOcqITOicKWjlHDYGg/iXdeeae1PIu+KEzoH36hf69j9hMO+w7nZFDGFCb05r3wn/f63hA/SHIyJgcKE/r32yuvoyIDKqFzIleh/RJ+rXnZlOtHH1nCP2/kZVOuQk8eY2ggvNF0XGFtyoPc73W8vE/w8BbBawcp7MKjK+AzJ8PUDsP5Z2RvRKRUdYEmD6oLNDniYDPSli5VexvxAaAdbG6gfQUb087sA971gG3GGE8IcU6x9rQnxpi3gMQBntNpWqI/PLQXNW2fc4ANWuvzgRL+8aHl2V/TdoMDPA+8labpgNL5VvRPTdO3gOcdbB7OO+IkGYdNqF3RHHbWNL0jDEPT7UevBl6Pk+TfQJ9pfCvq4khNy9ex2n54YNHAjDRNL9Nar8JmC68YHKnWelWappcBM8Iw1HBsUGk7cGWi9Uyt9VKg1NXKSkqX1nppovVM4MruDGFw/EyOncBqR4iHfd//PLboV0X/PBvH8SupMVOBaWEYHpPcu0qZ2Th1pcysksAOnqYkgT2aKq3xR2lqWuOeVIm6M07UfTQeNq//Aj7eqedvApZnlXr+aKpiCjWq8iCN0V0e5E1jzBwKLA/yIVXBmxzL7NUMGQOs0lovjJQ6lNqZ0OdOXDJ2p8bMiZQ6pLVeCKwCxvQl8kCoipK1WlGynvQos7dI+v4Y4CrKc98vBR5QcbzNGDOPViuzdzS1YowzgDuB/7quu9Rz3RnYUqhFsinR+kGt9RzgU9hyrA8GUg44almKUqiBlGkg5QPYSsZPa61XRErtNcZcDbya5di98Kox5upIqb1a6xXA08DIQMoHBiPyQKiK+zZIKZaO3uhRrvp23/fH0eblqgvZmGoftAO4PzVmSaTUaK31JOCpJg7zlNZ6UqTU6NSYJcB9QEczRR4IhXkAgZRxIOU91CrRJ1o/Eim1yxgzBWjkJ73DGDMlUmpXovUj2AfOIwMplwRSxs2wfTAUsnQcj0ipC7Du4Fhgfk2UudRfs3Y3cFeklA/cCmzFumsvNcXAXij1Gt0bkVICmAwsBg4BCwIp38GWlhoPjMJmcAcbptwBvABsjJQ6DRtVG4rd8NYFUmZ+Ays3oTNiCLYS6DxseY1HgWeBLdgbVQIreAf2meZ3sRvdImAZOd6ODcP6HjiVVehufGw1+onAOGAEx87oXcBm4DGsT5z7Glyv0P8DK2UALu0y0+UAAAAASUVORK5CYII=" alt="">
            <p>
              银行打款
              <el-popover placement="top-start" width="200" trigger="hover">
                <div class="bank-mess">
                  <h3 class="bank-mess-tit">银行信息</h3>
                  <div class="bank-mess-con">
                    <p>卡号：
                      <em>11050166540000000117</em>
                    </p>
                    <p>银行：
                      <em>建设银行</em>
                    </p>
                    <p>开户支行：
                      <em>中国建设银行北京静安庄支行</em>
                    </p>
                  </div>
                </div>
                <i class="rec-notice" slot="reference"></i>
              </el-popover>
            </p>
            <em></em>
          </li>
          <li><img src="data:image/png;base64,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" alt="">
            <p>客服确认到账</p>
            <em></em>
          </li>
          <li><img src="data:image/png;base64,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" alt="">
            <p>账号充值</p>
          </li>
        </ul>
      </div>
    </section>
    <el-dialog title="每日限额" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
      <p class="inpBox">
        <el-input placeholder="请输入" style="width:80%;"></el-input>
        <span style="float:right"> 元/天</span>
      </p>
      <p class="day-color">每日限额必须大于当日消耗50元</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
.rec-tit {
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
.rec-view {
  margin: 20px 20px 0;
  height: 118px;
  border: 1px solid #e4e5e7;
  background: #fff;
}
.mod {
  height: 80px;
  border-right: 1px solid #e8ecf1;
  padding-left: 30px;
  font-size: 12px;
}
.no-bor {
  border-right: 0;
}
.p-t-20 {
  margin-top: 20px;
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
}
.rec-edit em {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAqklEQVQokZXQO4oCQRRA0aM0LsENGLsD0czIwMwPwgQijJGZ4DrEQHNxkok0EjE0HlfhEox6MLAaGun2U9GjOJcqXqG1ib04PSxwQr/4Bl5hgAvWz4IeliigjF/Uohe4jVLA/xhlvdBN4SOuiPGNn8egG/6c4Aa2GGMNxU9wOug84HoWToJquJyn8C4LQ4QWDhiGTUzycBI08ee+7xm+8nASVMK8xxTnPAw3rwIqBfFjF40AAAAASUVORK5CYII=);
  margin-left: 5px;
  cursor: pointer;
}
.rec-step {
  padding: 20px;
  margin: 20px;
  height: 235px;
  border: 1px solid #e4e5e7;
  background: #fff;
}
.rec-step-tit {
  font-size: 14px;
  color: #262626;
}
.rec-step-list {
  padding-top: 40px;
  ul {
    padding-left: 44px;
    min-width: 1137px;
    li {
      float: left;
      width: 214px;
      margin-right: 70px;
      position: relative;
      em {
        display: inline-block;
        width: 53px;
        height: 11px;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAALCAYAAADflsWtAAAAc0lEQVRIidXRsQ3CQBAEwDFyC5bcDsQuhDLcDZFb8BdEDQgnhGAf0r+s2+SSDXZ03fR4SZA7Fjwj5UvbLdUyomCIlPu2W6pl/tyCq4OPZUHxBywTiiAsG4oALCOKA1hWFDuwzCh+wLKj+ALr8T5tTv2suG1SwxpbTvo0QwAAAABJRU5ErkJggg==);
        position: absolute;
        right: 0;
        top: 45px;
      }
      p {
        padding-top: 10px;
        font-size: 12px;
        color: #262626;
        position: relative;
        width: 100px;
        text-align: center;
      }
    }
  }
}
.rec-notice {
  display: inline-block;
  width: 12px;
  height: 14px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA2ElEQVQokY3QMUpDURQE0OPj4Q4s5NtauAW1kCCmUbuIbkAtor2QVQQLswIDFkErLeyyBm0sFAyIriCKYPHvh68kxIHhwb0zw7szt335LTCPY+xjIWYf6OMCn5BiUWCIRbSwHGzFbBgaOZKv0cFtBKzE+4gzNHGD1Ywj3NfEsFEzwB0aOMw4wJ7Z6OIqYQmv/zCMUKSZst/4ypFeREKF5wniAu9J2fPpn+VLsI4T9BN62FRWNw1NbKGXMcYuBso6z/FQ+0Y7Ancwro4eYR1vYXwKDmK2Vt34A8d6LaAR33WxAAAAAElFTkSuQmCC);
  position: relative;
  top: 3px;
  cursor: pointer;
}
.el-input__inner {
  width: 408px !important;
  height: 34px !important;
}
.inpBox {
  display: flex;
  align-items: center;
  width: 100%;
  span {
    margin-left: 45px;
  }
}
.day-color {
  line-height: 30px;
  color: #9999;
}
.el-dialog__headerbtn .el-dialog__close {
  display: none;
}
.bank-mess-tit {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #e4e5e7;
  font-size: 12px;
  color: #262626;
  margin-left: -12px;
  margin-right: -12px;
  text-indent: 20px;
  margin-top: -12px;
}
.bank-mess-con {
  p {
    line-height: 30px;
    color: #262626;
    font-size: 12px;
  }
}
</style>
