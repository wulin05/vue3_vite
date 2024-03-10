<template>
  <div class="container-fluid" wraper>
    <h1 class="title">
      Vue3 组件间通信
    </h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <!-- 导航区 -->
        <router-link active-class="active" class="list-group-item" to="/props">1.props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">2.自定义事件</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3.mitt事件总线(消息订阅和发布)</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">4.v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5.$attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">6.ref-parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">7.provide-inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8.pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9.slot</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 占位一个展示区 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">

</script>

<style>

</style>