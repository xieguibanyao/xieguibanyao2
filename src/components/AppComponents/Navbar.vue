<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
    <el-menu-item index="/">Home</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Link</template>
      <a href="https://blog.csdn.net/king932?type=blog">CSDN</a>
      <p></p>
      <a href="https://github.com/xieguibanyao">Github</a>
    </el-submenu>
    <el-menu-item index="/Home">Project</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this);
        console.log(key,keyPath);
      }
    }
  }
</script>
