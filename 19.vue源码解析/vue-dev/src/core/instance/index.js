import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    // vue 必须通过 new 的方式去实例化， es5 实现class的一种方式
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 之所以使用es5， 不使用es6， es6往原型上去挂方法很难写， 拆分到不同文件下，有利于文件的管理
// 很多mixin 的方法, 每一个mixin 就是在vue的 原型上混入了一些方法
// 在vue的原型上挂载了一个_init方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
