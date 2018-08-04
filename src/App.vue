<template>
  <div id="app">
    <div class="header">
      <div class="headerBox">
        <div class="header-left"></div>
        <div class="header-right">
          <div class="badge notice" style="display:none">
            <el-badge :hidden="false" is-dot :value="1"></el-badge>
          </div>
          <div class="header-help" style="display:none"></div>
          <div class="header-userCenter">
            <i class="header-userpic"></i>
            <i class="el-icon-caret-bottom pos"></i>
            <div class="user-layer">
              <h5>
                <i class="user-icon"></i>
                <span>hi,18611369660</span>
              </h5>
              <div class="header-btn">
                <button type="button" class="el-button el-button--default">

                  <span @click="linkUser">个人中心</span>
                </button>
                <button type="button" class="el-button el-button--default">

                  <span>退出登录</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <div class="pagehome">
        <router-view/>
      </div>
    </div>
    <div class="sidebar">
      <el-menu :default-active="nav" class="wi-menu" router @open="handleOpen" @close="handleClose" text-color="#303133" active-text-color="#62a7f6">
        <el-menu-item index="/">
          <i class="el-icon-star-on"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>推广</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/new-ad">新建广告</el-menu-item>
            <el-menu-item index="/extension-manage">推广管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>报表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/ex-resport">推广报表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>财务</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/fin-recharge">充值</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/per-info">个人资料</el-menu-item>
            <el-menu-item index="/per-modpassword">修改密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: "/"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    thisPath() {
      return this.$route.path;
    },
    linkUser() {
      this.$router.push("per-info");
    }
  },
  mounted() {
    if (this.thisPath() == "/modify-ad") {
      this.nav = "/extension-manage";
    } else {
      this.nav = this.thisPath();
    }
  },
  watch: {
    $route(to, from) {
      if (this.thisPath() == "/modify-ad") {
        this.nav = "/extension-manage";
      } else {
        this.nav = this.thisPath();
      }
    }
  }
};
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}
body {
  background: #f5f7f9;
  font-size: 12px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  .el-badge__content {
    border: 0 !important;
    background-color: #ea3323 !important;
  }
  .el-badge__content.is-dot {
    right: -15px !important;
    top: -21px !important;
    position: absolute !important;
  }
  .el-button {
    padding: 7px 11px;
    font-size: 12px;
  }
  .headerBox {
    width: 100%;
    height: 50px;
    min-width: 1280px;
    background: #65a5f6;
    line-height: 50px;
    position: relative;
    .header-left {
      width: 100px;
      height: 60px;
      background: url(http://dsp.xmadx.com/static/img/logo.2442e4b.svg) 50%
        no-repeat;
      background-size: 100%;
      position: absolute;
      top: 53%;
      transform: translateY(-50%);
      left: 16px;
    }
    .header-right {
      width: 150px;
      position: absolute;
      right: 7px;
      height: 50px;
      div {
        float: left;
        cursor: pointer;
      }
      .notice {
        width: 12px;
        height: 14px;
        margin-top: 18px;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAApUlEQVQokY2SMQrCQBBF/6ZK0CbaSEpLwd7CE9h4BRsPJN5OCwUjEhuP8Czc1XVi4j5YWHb+Y2ZgBcicCXAAjkBl6zZcADs+7IFBlzADzrSpgbkVcj9CF6fQKQibnnBgCyjTi6X+s5D0FooEIY+FrCcYcHFwlCCMJUl++yZh6QYYOuAqqUroIEkXB0wlldFjaUKPrzvtv1RHY9xs/ZewAu7+rG39CTmKVXT8gU6LAAAAAElFTkSuQmCC);
      }
      .badge {
        margin-right: 26px;
        width: 16px;
        padding-top: 17px;
      }
      .header-help {
        width: 14px;
        height: 14px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA60lEQVQokZ2SPUoEQRSEP9bFcKPZXFYjEy8iqBtvYmJmoKGBodfwAiayeJHZRAUNDAwEGQbxZ5P5TFpsnz0GFhQ0VfWaR3ehkrFSz9Ra/Uisk1bl2XxoT23sR6NO4+Cu2oXgk9oGrUtZvtZrg7mvTtQNdaa+ZX6rVgPgEBjxjQvgAbgFboAGOM/8EXA8BHb4jVNgJZ03gefgb5Nerg9zdV19DPryr8FaXVPvCt7LALgurApwBRwAk4J3PwQuga2COQNWey9Vx4X/Uj1STwp6q47z1sQCvKrvQetS9kflpv6jcrHkC3WZuLBQ8k96iAwvXspWuAAAAABJRU5ErkJggg==);
        margin-right: 29px;
        margin-top: 17px;
      }
      .header-userCenter {
        width: 50px;
        height: 50px;
        padding-top: 2px;
        position: relative;
        margin-left: 70px;
        i {
          display: inline-block;
        }
        .header-userpic {
          width: 14px;
          height: 16px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAA3klEQVQokZXQMUpDQRSF4ZNgExAU7VREFK1cggtyB9Zi6wIstFSwjfsQkhSpRES0jIIiiuBn8wLJJD58P9xiZs4Pc26QYjZxiRe84Qb7Za6UVvFollfsTWbbmeYwyUZmWUpyNHlRirtzpDE7deKgRuxPnYqOi+jP6fiM9brlBMs4xQBDnGGtzLVQ87u/KTseJLlIMkzyXs0wyXn1NtNxBd053Uq6VTZBB71/SGN66ATHDaQxJy3cJdluuJv7Fr6TLDQUv9pJbhtKSdILtnCFB4zwU/UY4XOi1weecI2tXwPGpRI0/NcBAAAAAElFTkSuQmCC);
        }
        .pos {
          position: absolute;
          top: 19px;
          right: 16px;
          color: white;
        }
        &:hover .user-layer {
          display: block;
        }
        .user-layer {
          display: none;
          position: absolute;
          width: 178px;
          height: 97px;
          background-repeat: no-repeat;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAABhCAYAAAByIPvpAAAC/0lEQVR4nO3Yv2pkZRyH8eec2Yz4Z4bEYiwFL8AL8AYCsdImlyB2SWXKha1sRGzWynTaWFnkElLZSyDgBAIpIuo4mSWZPX8s5oysC7vssruZyZfnAy/DgSl+xXNe3vMWSK+u6BZA261bH0B6FSXQm06nXwLtYDD4HqiBZrVjSS+uBN46PT39rG3bqmma+cnJyadAHzdJ3REF0D8+Pv6krut/2k5VVX8cHR19DGxgzFpzBbBxeHj40Xw+/719ys3NzW8HBwcfAPcwZq2pAri3u7v7/vX19a9PR7x0dXV1NBqN3gN6tzXU8rdgceYp+f9XqPSkYmtrq392dvbDYDD4/Hl/vLy8/GY0Gt0HKl7fTcbyVqTp1n+3JAXQ29vbG85ms4dN0/z5rLdMWgdN0/w1m80e7u/vD1ns+MVyF+5PJpNvh8PhF6/prZHeuMlk8t3m5uZXwLxgcSB/p67rs7IsN1c8m/TCmqb5u9frfQg8Wp6J+0asu6Zrtg+Uyw+7W/mylN6AHlB4Q6G7rqALWbrzDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRDFkRSqAF2rquJ6seRnoZXbMt0C5Dri8uLn5Z7VjSyzk/P/8ZqOlCboD59vb2g/F4/FNVVdPVjic9X1VV0/F4/OPOzs7XwBxoChbHiz7wLjAA3gY2gGJlk0rP1gKPgUfAFTAD5gWLYEsW8fa71cOQtZ5aFseJebce0+3IsIh2GXT5xLO0btpuNd1qgfZfhGh2peKbNpIAAAAASUVORK5CYII=);
          left: -139px;
          top: 36px;
          color: #262626;
          h5 {
            height: 26px;
            border-bottom: 1px solid #edf1f5;
            margin: 14px 8px 0 7px;
            line-height: 26px;
            margin-bottom: 5px;
            .user-icon {
              display: inline-block;
              width: 12px;
              height: 12px;
              background-repeat: no-repeat;
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAs0lEQVQokY3PMUrEQBQG4C9DSGOjvVtZ5QB6AysPsAdYSBVcBIvNDSwkhSn1GNbbydrqBbQWtlzYbdRiRx0wgfzNY+Z9b3iTVVUlJsMMC0zwgis8/YDgL9e4xwkKnGKJsz489z8FLvvwUQ+Gwz78OIB/71Nc4zk5f+HB/h8gT5qfuMUFjvGKVVxjneIaNzhIhs9j3aBBl2OKbmBf8YE7fIQ4NSZNQDkSlwEt3rEbQFu8of0GjWIc1DHVixAAAAAASUVORK5CYII=);
            }
          }
          .header-btn {
            margin-left: 8px;
          }
          .el-button + .el-button {
            margin-left: 0 !important;
          }
        }
      }
    }
  }
}
.contentBox {
  margin-top: 50px;
  .pagehome {
    min-width: 1080px;
    margin-left: 160px;
  }
}
.sidebar {
  width: 160px;
  height: 100%;
  background: #fff;
  border-right: 1px solid #e4e5e7;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  overflow: hidden;
}
.wi-menu {
  border-right: none;
}
.el-menu-item {
  border-left: 3px solid transparent;
}
.el-menu-item.is-active {
  border-left: 3px solid #409eff;
  box-sizing: border-box;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  min-width: 160px;
  width: 100%;
  text-align: center;
}
.max-inp .el-form-item__content,
.max-inp .el-input,
.max-inp .el-input__inner,
.max-inp .el-select {
  width: 408px !important;
  height: 34px !important;
}
.el-form--label-top .el-form-item__label {
  padding: 0 !important;
  font-size: 12px !important;
  color: #262626;
  height: 30px;
}
.el-form--label-top .el-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0 0 10px;
}
.el-input__inner,
.el-select-dropdown__item {
  font-size: 12px !important;
}
.el-form-item {
  margin-bottom: 10px;
}
.extime-right .el-input__inner {
  height: 24px !important;
  width: 220px !important;
  line-height: 18px;
}
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  border-color: #409eff;
}
.el-date-editor .el-range-input,
.el-date-editor .el-range-separator {
  line-height: 18px !important;
  font-size: 12px !important;
}
.el-date-editor .el-range__icon {
  line-height: 18px !important;
  float: right !important;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
  display: inline;
}
.fr {
  float: right;
  display: inline;
}
li {
  list-style: none;
}
</style>
