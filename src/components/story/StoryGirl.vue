<template>
    <div id="story-card">
        <van-nav-bar safe-area-inset-top @click-left="handleBack">
            <template #left>
                <span class="iconfont icon-return" style="color: rgb(254,67,101)"></span>
            </template>
        </van-nav-bar>
        <story-girl-card v-for="(item,index) in storyData" :key="index" :data="item" class="story-girl-card"/>
    </div>
</template>

<script>
    import StoryGirlCard from "./StoryGirlCard"
    export default {
        name: "StoryGirl",
        components: {StoryGirlCard},
        data(){
            return{
                storyData:[
                    {
                        story:'对于一段关系的生疏，确实挺让人难过的。一想到，我们从无话不说的人，变成了相遇也不打招呼的人，纵然心里很酸，但最终，也只能安慰自己一句，没关系，都过去了。有一句话说：我们都不擅长遗忘，我们擅长的，只是嘴硬。其实，有关于他的一切，你都保留在了心底。你记得你们一起走过的路、说过的话和看过的风景，记得他来时的笑容，也记得他去时的背影🍃\n',
                    },
                    {
                        story:'成年人的世界，多了一点伪装，多了一点无奈。在他人面前的时候，我们不敢流露出自己的狼狈，于是只好戴上面具，假装开心，假装一切都好。因为这个世界，每个人都很忙，不会有人时时刻刻在意你的感受，所以尽管心里委屈、心酸、难受，你也会把这些情绪偷偷藏起来，只对别人展现出轻松、愉快的样子。因为这个世界，能和你感同身受的人少之又少，不会有人真正理解你的悲伤和迷茫，所以无论你有多想找人倾诉，也只会话到嘴边，再悄悄咽回心里🍃\n' +
                            '\n',
                    },
                    {
                        story:'在我们过往的经历中，似乎总会有那么一个人，突然地闯进我们的生活，带给过我们感动和欢喜，却又在某一个时刻，猝不及防地从我们身边抽离，留下了一地的回忆。两个人刚刚分开的时候，在每一个似曾相识的场景，你总是不由自主地想起他。你会盯着一样东西久久地发呆，也会因为看到某个背影，而伤心落泪。你也曾试过，屏蔽掉所有与他相关的东西。直到最后，你不得不承认，用心爱过的人，就连忘记都需要格外的用力。世间有一种无奈是，有些人，你越是想要忘记，就越是忘不了，有些情，你越是想要放下，却怎么都放不下🍃\n' +
                            '\n',
                    },
                    {
                        story:'一个人的路，偶尔会有一些辛苦，但你还能忍耐下去。你曾独自加班到深夜，也见过这城市三四点的星光，你把所有的心酸都打碎了咽进肚里，然后微笑着告诉家里人“我在外面真的挺好的”。有一句话说：“生活在这世上，没有人不辛苦，只是有些人选择不说而已。”那些奋斗、打拼的时光，有时会让人崩溃大哭，但更多的是一种充实和坚定。因为知道自己没有在虚度时光，因为知道自己每努力一步，都会离自己的目标更近一点🍃\n',
                    },
                    {
                        story:'很多时候，我们会为失去的感情而惋惜，甚至会在心中被思念的苦涩填满时，一遍遍地问自己，如果不能相守，当初又何须相遇？直到后来途经了许多人，看过很多从深爱到分离的故事，才终于懂得，不是每一个相爱过的人，都能陪你走完余生。可是纵使世间聚散无常，你也会希望，有那么一个人的出现，也许并不是一见倾心，但却可以久处不厌。哪怕经历了风雨和坎坷，也舍不得放开彼此的手🍃\n' +
                            '\n',
                    },

                ]
            }
        },
        methods:{
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
.story-girl-card{
    color: rgb(62, 62, 62);
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 10px 10px;
    background-position: center center;
}
.iconfont{
    font-size: 32px;
}
</style>