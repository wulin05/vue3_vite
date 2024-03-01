// 定义一个接口PersonInter,用于限制person对象的具体属性
export interface PersonInter {   // 分别暴露
  id: string,
  name: string,
  age: number
}

// 一个自定义类型: 泛型
// export type Persons = Array<PersonInter>
// 或下面的写法
export type Persons = PersonInter[]