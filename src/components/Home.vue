<template>
  <div>
    <h1> This is Page for project about World Weather Forecast</h1>
    <!-- 准备一个容用来存放音乐播放器 -->
    <div id="aplayer"></div>
      <router-link id="SecondPart" to="/Home/SecondPart">------------MAP------------ </router-link>
      <router-link id="ThirdPart" to="/Home/ThirdPart"> ------------Weather forecast------------</router-link> 
      <router-link id="FirstPart" to="/Home/FirstPart">------------Visualization------------ </router-link>
      <hr>
      <router-view/>
  </div>
</template>
<script>
import APlayer from "APlayer"; // 引入音乐插件
import "APlayer/dist/APlayer.min.css"; // 引入音乐插件的样式
export default {
  name: "App",
  data() {
    return {
      audio: [ // 歌曲列表
        {
          name: "Windy Hill", // 歌曲名字
          artist: "钢琴-羽肿", // 歌曲演唱者
          url: // 歌曲地址（这里用外链地址）
            "http://music.163.com/song/media/outer/url?id=1947208581.mp3",
          cover: "http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg", // 歌曲头像
          lrc: "", // 歌词
          theme: "rgb(127, 218, 180)", // 播放这首歌曲时的主题色
        },
        {
          name: "女儿情",
          artist: "古筝-付娜",
          url:
            "https://tyst.migu.cn/public/product9th/product45/2022/06/0209/2021%E5%B9%B408%E6%9C%8831%E6%97%A512%E7%82%B950%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C185%E9%A6%96049526/%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC/Mp3_64_22_16/6005663HX6A093325.mp3",
          cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
          lrc: "",
          theme: "rgb(61, 162, 230)",
        },
        {
          name: "故郷の原風景",
          artist: "陶笛-犹豫的泥巴",
          url:
            "https://sharefs.ali.kugou.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
          cover: "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
          lrc: "",
          theme: "#baf",
        },
      ],
      info: {
        fixed: false, // 不开启吸底模式
        listFolded: true, // 折叠歌曲列表
        autoplay: true, // 开启自动播放
        preload: "auto", // 自动预加载歌曲
        loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "list", //  播放模式，list列表播放, random随机播放
      },
    };
  },
  mounted() {
    // 初始化播放器
    this.initAudio();
  },
  methods: {
    initAudio() {
      // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        audio: this.audio, // 音乐信息
        ...this.info, // 其他配置信息
      });
    },
  },
};
</script>
