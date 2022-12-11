var app = new Vue({
  el: "#app",
  data: {
      city: "",
      forecasts: []
  },
  methods: {
      srch: function (c) {
          var that = this;
          axiOS.get("Http://wthrcdn.etouch.cn/weather_mini?city=" + c).then(function (message) {
              that.city = c;
              that.forecasts = message.data.data.forecast;
          })
      }

  }
})