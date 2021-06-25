<template>
  <div id="app">
    <header>
      深圳天气
    </header>
    <main v-if="weather.city">
      <!-- 定位以及更新时间 -->
      <header>
        <div class="area">
          <i class="iconfont icon-dingwei">{{weather.city}}</i>
          <span @click="showAreaNav">切换</span>
        </div>
        <div class="reporttime">
          {{weather.reporttime.slice(-8,-3)}}更新
        </div>
      </header>
      <!-- 天气信息 （温度、湿度、风向风力） -->
      <article>
        <div class="temperature">
          {{weather.temperature}}
        </div>
        <div class="wind">
          <i class="iconfont icon-fengxiang"></i>
          {{weather.winddirection}}风
          {{weather.windpower.slice(-1)}}级
        </div>
        <div class="humidity">
          <i class="iconfont icon-IOTtubiao_huabanfuben"></i>
          相对湿度 {{weather.humidity}}%
        </div>
      </article>
    </main>
    <!-- 选择区域的对话框 -->
    <nav v-if="visibility">
      <ul>
        <li class="area-item" v-for="item in Object.keys(areaCode)" :key="item" @click="changeArea(item)">
          {{item}}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      // 默认南山区
      area: '南山区',
      // 天气信息
      weather: {},
      // 区域对应的编码
      areaCode: {
        '罗湖区': 440303,
        '福田区': 440304,
        '南山区': 440305,
        '宝安区': 440306,
        '龙岗区': 440307,
        '盐田区': 440308,
        '龙华区': 440309,
        '坪山区': 440310,
        '光明区': 440311
      },
      // 控制选择框的显示/隐藏
      visibility: false
    }
  },
  methods: {
    // 获取当前选中地区的天气
    async getAreaWeather() {
      const res = await this.$http.get('weatherInfo', {
        params: {
          key: '6c495fc6eeae6b603d48436aa7eb25f7',
          city: this.areaCode[this.area]
        }
      })
      if (res.status === 200) {
        this.$set(this, 'weather', res.data.lives[0])
      }
    },
    // 显示选择框
    showAreaNav() {
      this.visibility = true;
    },
    // 改变选择的区
    changeArea(area) {
      this.area = area
      this.getAreaWeather()
      this.visibility = false
    }
  },
  created() {
    this.getAreaWeather()
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}

body {
  padding: 100px;
}
#app{
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
}
#app>header {
  height: 70px;
  padding-left: 20px;
  line-height: 70px;
  font-size: 30px;
  color: #fff;
  background: cornflowerblue;
}
/* 定位以及更新时间 */
main>header {
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
}
.area {
  display: inline-block;
}
.area i {
  font-size: 26px;
}
.area span {
  padding: 0 5px;
  margin-left: 5px;
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
  border-radius: 10px;
  cursor: pointer;
}
.area span:hover {
  background-color: #fafafa;
}
.reporttime {
  display: inline-block;
  margin-left: 70px;
  color: #777;
}
/* 天气详情信息 */
article {
  height: 150px;
  padding-left: 50px;
}
article div {
  float: left;
}
.temperature {
  position: relative;
  width: 250px;
  height: 150px;
  font-size: 100px;
}
.temperature::after {
  position: absolute;
  top: 20px;
  left: 110px;
  display: block;
  content: '℃';
  font-size: 30px;
}
.wind {
  margin-top: 60px;
  font-size: 18px;
}
.humidity {
  font-size: 18px;
}

/* 选择区域的对话框 */
nav {
  position: absolute;
  top: 130px;
  left: 40px;
  width: 100px;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: #fff;
}
nav li {
  height: 30px;
  padding: 5px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
nav li:hover {
  color: cornflowerblue;
  background-color: #fafafa;
}
</style>
