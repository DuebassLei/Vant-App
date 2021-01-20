/**
 * @Author  DuebassLei
 * @Date  2020/12/18
 * @Version 1.0
 * @Description 自定义防抖函数
 */

/**
 *需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次
 *方法：1.定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
 *     2.将事件绑定在 click 方法上。
 * */

const meDebounce = {
    inserted: function (el, binding) {
        let timer
        el.addEventListener('keyup', () => {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                binding.value()
            }, 1000)
        })
    },
}
export default meDebounce
