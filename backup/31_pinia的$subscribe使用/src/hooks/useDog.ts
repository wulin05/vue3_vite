import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  // 与dog相关数据
  let dogList = reactive([
    // 通过onMounted钩子,在组件挂载完成后,调用getDog方法,获取url,这样,这边就不需要给默认值了。
    // 'https://images.dog.ceo//breeds//pembroke//n02113023_3840.jpg',
  ])

  // 与dog相关方法
  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // console.log('******', result.data.message)
      dogList.unshift(result.data.message)
    } catch (error) {
      alert(error.message)
    }
  }

  // ###### 生命周期钩子: 组件挂载完成后(组件中导入了hooks),所以这边的声明周期也会被执行, 这样dogList就有了初值
  onMounted(() => {
    getDog()
  })

  // 向外部提供东西
  return { dogList, getDog }
}


