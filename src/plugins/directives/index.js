import meDebounce from "@/plugins/directives/modules/debounce";
import meEmoji from "@/plugins/directives/modules/emoji";

// 自定义指令
const directives = {
    meDebounce,
    meEmoji
}

//批量加入自定义指令
export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    },
}
