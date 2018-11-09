<template>
    <div>
        <input type="text" placeholder="请输入文本" v-model="feeling" @input="analysis()">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            feeling: '' // sou
        }
    },
    methods: {
        analysis: function () {
            let app_key = 'jyylqTaZRfLa1zV3';
            let config = {
                withCredentials: false, // 默认的
            }
            axios.get('/api/api/timeline_v2_global').then((res) =>{
                console.log(res)
            })
            // axios.get('https://api.ai.qq.com/fcgi-bin/nlp/nlp_textpolar', {
            //     params: {
            //         appid: '2109650076', // 应用标识
            //         time_stamp: '', // 请求时间戳
            //         nonce_str: '', // 随机字符串
            //         sign: '', // 签名信息
            //         text: this.feeling // 待分析文本
            //     }
            // }, config)
            // .then((res) => {
            //     console.log(res);
            // })
        }
    },
    created: function () {

    }
}
</script>
<style lang="stylus" scoped>

</style>

