<template>
  <div class="aboutus">
  <div class="title">
   <el-divider content-position="center">王兴宇的self page</el-divider>
   <p><el-tag>JNU</el-tag><el-tag>Undergraduate</el-tag></p>
  </div>
  <el-card class="box-card" style="margin-bottom: 20px;">
   <div class="text item">
   <el-row :gutter="110">
    <el-col :span="8">
    <div class="grid-content bg-purple">
     <h2>教育信息 Education Information</h2>
     <h3>大学 高中 初中 小学</h3>
     <h4>- 2020.8~2024.8 Jinan University Master</h4>
     <h4>- 2017.9~2020.6 Shazhong High School</h4>
     <h4>- 2014.9~2017.6 Chenyang Middle School</h4>
     <h4>- 2018.9~2014.6 Chenyang Primary School</h4>
     <h3>大学学习 University Study Experience</h3>
     <h4>- 2020.8~2022.8 20CST Monitor</h4>
     <h4>- 2022.2~2022.3 MIT Learning SPOC of Machine Learning</h4>
     <h4>- 2022.6~2022.10 Inclement weather machine recognition report</h4>
     <h4>- 2021.9~2022.9 Tutorial system of International College of Jinan University</h4>
    </div>
    </el-col>
    <el-col :span="8">
    <div class="grid-content bg-purple">
      <h2>技能 Skill</h2>
      <h3>专业技能 Professional Skill</h3>
      <h4>- 计算机语言：Python，C，JAVA ，HTML</h4>
      <h4>- 深度学习框架：Pytorch</h4>
      <h4>- 机器学习，深度学习中网络的运行</h4>
      <h3>实习 Internship experience</h3>
      <h4>- 2022.7~2022.8 在华坤道威担任软件测试师</h4>
      <h3>语言技能 Language Skill</h3>
      <h4> - English 熟练</h4>
    </div>
    </el-col>
    <el-col :span="8">
    <div class="grid-content bg-purple">
      <h2>兴趣爱好 Hobby</h2>
      <h3>游戏 Playing</h3>
      <h4>- 计算机极客协会部长 Director of the Computer Geeks Association</h4>
      <h4>- 王者荣耀，绝地求生，炉石传说</h4>
      <h3>阅读 Reading</h3>
      <h4>- 《论语》</h4>
      <h5>- 在现在社会中，所谓的孔孟、老庄已经离人们越来越远，圣贤与经典也逐渐模糊，纷繁世界的庸俗烦琐和思想的高贵纯粹似乎缺少了一些必要的链接。而于丹教授以白话诠释经典，以经典诠释智慧，把两千多年前的论语用一个现代人对社会，对生活，对人生的感悟演绎出来，灰色的孔子一旦链接了这个多彩的世界，催生而出的是一种纯粹的积极的态度，是道德品性、情感智慧的升华。读于丹说论语，让我领略到的就是这样一种智慧，是对自己的得失缺憾的正确对待，是对身边朋友的理智看待，是一种心态，一种融入在现在社会中的理性道德。</h5>
      <h4>- 《资本论》</h4>
      <h5> - 马克思在《资本论》中指出: “如果整个过程从其结果的角度,从产品的角度加以考察,那么劳动资料和劳动对象表现为生产资料,劳动本身则表现为生产劳动。”他接着说,“这个从简单劳动过程的观点得出的生产劳动的定义对于资本主义生产过程是绝对不够的。马克思指出,“随着劳动过程本身的协作性质的发展,生产劳动和它的承担者即生产工人的概念也就必然扩大。为了从事生产劳动,现在不定要亲自动手,只要成为总体工人的一个器官,完成他所属的某一种职能就够了。”马克思又同时指出,“但是,另一方面,生产劳动的概念缩小了。资本主义生产不仅是商品的生产,他实质上是剩余价值的生产。”上面论述表明:马克思关于生产劳动范畴的内涵也是随其研究问题的发展而不断扩大的,生产劳动这一概念的含义不是固定不变的。在社会化大生产总体劳动中,生产劳动的范围不只是直接生产物质产品的劳动,还包括不一定要自己动手的科研、管理工作等。</h5>
    </div>
    </el-col>
   </el-row>
   </div>
   <div class='topmask square'></div><div class='topmask circular'></div>
  </el-card>
  </div>
 </template>
 <script>
 export default {
  name: 'aboutus'
 }
 </script>
 <style>
  .aboutus .grid-content.line{
  border-right: 1px solid #ddd;
  height: 150px;
  }
  .aboutus .el-card__header{
  background: #545c64;
  }
  .aboutus .el-card__body{
  padding: 50px 20px;
  }
  .aboutus .el-timeline-item__wrapper{
  top: -8px;
  }
  .aboutus .title p .el-tag{
  margin: 0px 5px;
  cursor: pointer;
  }
 </style>
 <style scoped>
  .aboutus{
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
  }
  .intro{
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  }
  .text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
  }
  .box-card{
  position: relative;
  }
  .item {
  display: inline-block;
  margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
  display: table;
  content: "";
  }
  .clearfix:after {
  clear: both
  }
  .clearfix span{
  color: #fff;
  font-weight: bold;
  }
  .title p{
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
  text-align: center;
  }
  .grid-content .large{
  font-size: 16px;
  color: #409eff;
  font-weight: bold;
  }
  .topmask{
  width: 100px;
  height: 100px;
  background-color: rgba(68,138,255,0.2);
  transform: rotate(45deg);
  position: absolute;
  }
  .square{
  border-radius: 5px;
  top: 0px;
  }
  .circular{
  border-radius: 50%;
  top:80px;
  left: 80%;
  background-color: rgba(255, 208, 75,0.2);
  }
 </style>