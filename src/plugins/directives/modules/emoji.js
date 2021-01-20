/**
 * @Author  DuebassLei
 * @Date  2020/12/18
 * @Version 1.0
 * @Description 自定义表单验证
 */

//不能输入表情和特殊字符，只能输入数字或字母等。

let findEle = (parent, type) => {
    return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el, type) => {
    const e = document.createEvent('HTMLEvents')
    e.initEvent(type, true, true)
    el.dispatchEvent(e)
}

//根据正则表达式，设计自定义处理表单输入规则的指令，下面以禁止输入表情和特殊字符为例。
const meEmoji = {
    bind: function (el, binding, vnode) {
        // 正则规则可根据需求自定义
        var regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g
        let $inp = findEle(el, 'input')
        el.$inp = $inp
        $inp.handle = function () {
            let val = $inp.value
            $inp.value = val.replace(regRule, '')

            trigger($inp, 'input')
        }
        $inp.addEventListener('keyup', $inp.handle)
    },
    unbind: function (el) {
        el.$inp.removeEventListener('keyup', el.$inp.handle)
    },
}

export default meEmoji
