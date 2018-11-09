<template>
    <div id="opera">
        <div class="header-line">
            <a class="name" href="">番剧</a>
            <div class="bill-tab">
                <div v-for="item in dataList" v-bind:key="item">
                    <div class="tab-item" @click="selectTab(item)">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="opera-content">
            <div class="opera-list" v-for="item in operaList" v-bind:key="item.ep_id">
                <img class="opera-img" :src="item.square_cover" :alt="item.title">
                <div class="opera-text">
                    <a>{{item.title}}</a>
                    <div class="opera-update">
                        <span>更新至<a>{{item.bgmcount}}话</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            feeling: '', // sou
            operaList: '', // 番剧列表
            dataList: ['一','二',"三",'四','五','六','日']
        }
    },
    methods: {
        /**
         * @method addLine 添加日期选中样式
         * @param { array } e 
         * @return { undefined }
         */
        selectTab: function (e) {
            console.log(e);
        },
        analysis: function () {
            let app_key = 'jyylqTaZRfLa1zV3';
            let config = {
                withCredentials: false, // 默认的
            }
            axios.get('/bilibili/api/timeline_v2_global').then((res) =>{
                console.log(res);
                this.operaList = (res.status === 200) ? res.data.result : '';
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
        this.analysis();
    }
}
</script>
<style scoped>
    .header-line {
        display: flex;
        display: -webkit-flex;
        align-items: center;
    }
    .bill-tab {
        display: flex;
        display: -webkit-flex;
        font-size: 16px;
    }
    .tab-item {
        margin-left: 20px;
        padding: 0 10px;
    }
    .tab-item:hover {
        color: #00a1d6;
        cursor: pointer;
    }
    .on {
        border-bottom: 1px solid #00a1d6;
    }
    .name { 
        color: #000;
        font-size: 24px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        color: #00a1d6;
    }
    #opera {
        width: 1024px;
        margin: 40px auto;
        font-size: 12px;
    }
    .opera-content {
        display: flex;
        display: -webkit-flex;
        flex-flow: row wrap;
    }
    .opera-list {
        display: flex;
        display: -webkit-flex;
        padding: 20px;
    }
    .opera-img {
        width: 72px;
        height: 72px;
        border-radius: 10px;
        margin-right: 12px;
    }
    .opera-text {
        position: relative;
        width: 96px;
        overflow: hidden;
        word-break: break-all;
    }
    /* operat-text a*/
    .opera-update {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #aaa;
    }
    .opera-update a {
        padding: 0 10px;
        border-radius: 9px;
        margin-left: 5px;
        background: #ff8eb3;
        color: #fff;
    }
    .opera-text>a {
        display: block;
        height: 36px;
        line-height: 18px;
        overflow: hidden;
    }
</style>
