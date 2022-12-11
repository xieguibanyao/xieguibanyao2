<template>
  <div  id="he-plugin-standard"></div>
</template>
<script >
 
export default {
  created(){
    window.WIDGET = {
    "CONFIG": {
    "layout": "2",
    "width": 600,
    "height":500,
    "background": "2",
    "dataColor": "000000",
    "key": "49710d3f6b1b4d4490347dc45dd0179d"
  }
      
    };
    (function (d) {
      var c = d.createElement('link')
      c.rel = 'stylesheet'
      c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=2.0'
      var s = d.createElement('script')
      s.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"'
      var sn = d.getElementsByTagName('script')[0]
      sn.parentNode.insertBefore(c, sn)
      sn.parentNode.insertBefore(s, sn)
      s.onload=()=>{
        //自动宽度
        setTimeout(() => {
          document.getElementById("he-plugin-standard").style.width  = "100%";
        }, 100);
      }
    })(document)
 
  }
};
</script>
