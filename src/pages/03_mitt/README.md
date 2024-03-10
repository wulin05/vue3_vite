## 需要安装 mitt ： npm i mitt

## 本节 主要相关的文件还有： utils--->emitter.ts、 main.ts


### 在03_mitt目录是实现 Child1.vue组件给 Child2.vue传递数据

#### 但其实，只要任意组件能摸到(其实,只要导入：import emitter from '@/utils/emitter') emitter, 
#### 那么就能实现任意组件间通信.....