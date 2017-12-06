<template>

    <div class="home_layout">

        <div class="search_layout">

            <div class="logo"></div>
            <div class="search_box">

                <img src="../../assets/search.png">
                <p style="margin-left: 5px">请输入你关心的产品</p>
            </div>
        </div>

        <div class="scroll_layout">
            <Banner :listImg="listImg"></Banner>


            <section class="survey_new_box">

                <h2 class="title">最新评测</h2>

                <ul class="ul0-box">

                    <li v-for="li_item in li_survey_new_photos" class="li-box">
                        <div class="item">
                            <img :src="li_item.src" alt="">
                            <p class="text">{{li_item.label}}</p>
                        </div>
                    </li>
                </ul>

                <ul class="ul1-box">
                    <li class="li-box" v-for="li_item in li_survey_new_articles">
                        <div class="item">
                            <b class="b">报告</b>{{li_item.label}}
                        </div>
                    </li>
                </ul>

                <div class="more-box">
                    <p>更多评测报告</p>
                    <img src="../../assets/arrow_gray.png">
                </div>
            </section>

        </div>



    </div>
</template>

<style lang="less" scoped>

    .home_layout {
        background: white;

        .search_layout {
            display: flex;
            padding: 30px;
            width: 100%;
            box-sizing: border-box;
            position: fixed;

            .logo {
                width: 93.96px;
                height: 60px;
                background: url("../../assets/search_logo.png") no-repeat center;
                background-size: contain;
            }
            .search_box {
                flex: 1;
                display: flex;
                background: #f4f4f4;
                border-radius: 30px;
                margin-left: 30px;
                padding: 0 20px;
                align-items: center;

                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }

        .scroll_layout {
            position: relative;
            top: 120px;
            color: #000;

            &.active{
                color: #333
            }

            .survey_new_box {
                border-top: 15px solid #f6f5f5;

                .title {
                    font-size: 30px;
                    letter-spacing: 0.5px;
                    padding: 30px 40px;
                    color: #464646;
                }

                .ul0-box {
                    overflow-x: scroll;
                    overflow-y: hidden;
                    display: flex;

                    li:first-child {
                        margin-left: 40px;
                    }

                    .li-box {
                        width: 180px;
                        flex: 0 0 auto;
                        margin-right: 30px;

                        .item {
                            text-align: center;

                            img {
                                width: 180px;
                                height:128px;
                                object-fit: contain;
                                border: 2px solid #e8e8e8;
                                box-shadow: 0 3px 8px 4px rgba(0, 0, 0, 0.03);
                                border-radius: 8px;
                            }

                            .text {
                                margin-top: 10px;
                                font-size: 14px;
                                font-weight: 500;
                            }
                        }
                    }
                }
                .ul1-box {

                    li:first-child{
                        margin-top: 20px;
                    }

                    .li-box {
                        padding:10px 40px;

                        .item {
                            display: flex;
                            text-align: center;
                            align-items: center;
                            font-size: 28px;

                            .b {
                                color: #e2001e;
                                padding: 0 5px;
                                font-weight: normal;
                                border: 1.5px solid #e2001e;
                                border-radius: 6px;
                                margin-right: 20px;
                                font-size: 10px;
                            }
                        }
                    }
                }

                .more-box {
                    border-top: 1px solid #e8e8e8;
                    margin: 10px 40px 0 40px;
                    display: flex;
                    padding: 30px 0;
                    align-items: center;
                    justify-content: center;

                    img{
                        width: 10px;
                        height: 20px;
                        margin-left: 10px;
                    }
                    p {
                        font-size: 28px;
                        color: #464646;
                        font-weight: 500;
                    }
                }
            }


        }
    }
</style>

<script>
    import Banner from '../common/Banner.vue';

    export default {
        name: 'Home',
        data() {
            return {
                listImg: [
                    {
                        url: "https://si.geilicdn.com/fxx_7abf2e74b6907e456ec25b111e13319dunadjust_.png"
                    }, {
                        url: "https://si.geilicdn.com/fxx_975f61fdec1c7ccfa20896993351c2f6unadjust_.png"
                    }, {
                        url: "https://si.geilicdn.com/fxx_072acfad2102eb354947f375d2003c00.jpg"
                    }, {
                        url: "https://si.geilicdn.com/fxx_4b645ec68e053c9153e34da6c7b0f7c8unadjust_.png"
                    }
                ],
                nav_items: [
                    {
                        text: '首页',
                        icon_normal: require('../../assets/bt_shouye_normal.png'),
                        icon_selected: require('../../assets/bt_shouye_selected.png'),
                        index: 0
                    },
                    {
                        text: '品类',
                        icon_normal: require('../../assets/bt_bangdan_normal.png'),
                        icon_selected: require('../../assets/bt_bangdan_selected.png'),
                        index: 1
                    },
                    {
                        text: '我的',
                        icon_normal: require('../../assets/bt_wode_normal.png'),
                        icon_selected: require('../../assets/bt_wode_selected.png'),
                        index: 2
                    }
                ],
                li_survey_new_photos: [
                    {
                    src: "https://si.geilicdn.com/fxx_02e3022876a859229a6e7acf2cb3ff80unadjust_.png?w=160&amp;h=160&amp;zm=3",
                    label: '打底裤'
                    },
                    {
                        src: "https://si.geilicdn.com/fxx_02e3022876a859229a6e7acf2cb3ff80unadjust_.png?w=160&amp;h=160&amp;zm=3",
                        label: '打底裤'
                    },
                    {
                        src: "https://si.geilicdn.com/fxx_02e3022876a859229a6e7acf2cb3ff80unadjust_.png?w=160&amp;h=160&amp;zm=3",
                        label: '打底裤'
                    },
                    {
                        src: "https://si.geilicdn.com/fxx_02e3022876a859229a6e7acf2cb3ff80unadjust_.png?w=160&amp;h=160&amp;zm=3",
                        label: '打底裤'
                    },
                    {
                        src: "https://si.geilicdn.com/fxx_02e3022876a859229a6e7acf2cb3ff80unadjust_.png?w=160&amp;h=160&amp;zm=3",
                        label: '打底裤'
                    },
                ],
                li_survey_new_articles: [
                    {
                        label: '儿童洗手液检出禁用成分，你还敢给孩子用吗0'
                    },
                    {
                        label: '儿童洗手液检出禁用成分，你还敢给孩子用吗1'
                    }
                ]
            }
        },
        components: {
            Banner: Banner
        }
    }

</script>
