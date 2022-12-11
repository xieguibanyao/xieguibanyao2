<template> 
  <div ref="test" style="width:800px;height:600px;"></div>
</template>

<script>
import * as echart from 'echarts'
import {ref,onMounted } from 'vue'
export default {

  name: 'Echart1',
  setup(){
        let test=ref(null);//获取div元素，这里与vue2.x的写法不一样了
        let myChart=null;

        function pie(){
            myChart.setOption({
                 title:{
                     text:"An activity that people choose in good weather",
                     textStyle:{
                        color:"red",
                        fontStyle:"oblique",
                     },
                 },
                 series:{
                     type:'pie',
                      data:[
                           {
                             name:"Sleeping - 10",
                             value:10
                           },
                           {
                              name:"Party - 20",
                              value:20
                           },
                           {
                              name:"Playing games - 30",
                              value:30
                           },
                           {
                              name:"Studying - 10",
                              value:10
                           },
                           {
                              name:"Sport - 40",
                              value:40
                           },
                           {
                              name:"Touring - 30",
                              value:30
                           }
                           ]
                 }

            })
        }


        onMounted(()=>{
             myChart=echart.init(test.value);
             pie()
        })


        return {
            test//test变量必须要写，如果没写，就拿不到div元素
        }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>