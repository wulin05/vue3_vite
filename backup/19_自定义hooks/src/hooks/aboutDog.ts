import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  // 与dog相关数据
  let dogList = reactive([
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

  // 生命周期钩子: 就不用预先给dogList列表一个默认值了,在挂载完成后执行getDog函数获取dog的url
  onMounted(() => {
    getDog()
  })

  // 向外部提供东西
  return { dogList, getDog }
}


