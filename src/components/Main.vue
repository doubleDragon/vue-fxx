<template>

    <div class="main_layout">

        <div class="search_layout">

            <div class="logo"></div>
            <div class="search_box">

                <img src="../assets/search.png" class="search_icon">
                <p style="margin-left: 5px">请输入你关心的产品</p>
            </div>
        </div>

        <div class="scroll_layout">
            <Banner :listImg="listImg"></Banner>

            <div>剩下的部分</div>
        </div>



    </div>
</template>

<style lang="less" scoped>
    .main_layout {
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
                background: url("../assets/search_logo.png") no-repeat center;
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

                .search_icon {
                    width: 25px;
                    height: 25px;
                }
            }
        }

        .scroll_layout {
            position: relative;
            top: 120px;
        }
    }
</style>

<script>
    import Banner from '../components/Banner';

    export default {
        name: 'Main',
        data() {
            return {
                listImg: [{
                    url: "https://si.geilicdn.com/fxx_7abf2e74b6907e456ec25b111e13319dunadjust_.png"
                }, {
                    url: "https://si.geilicdn.com/fxx_975f61fdec1c7ccfa20896993351c2f6unadjust_.png"
                }, {
                    url: "https://si.geilicdn.com/fxx_072acfad2102eb354947f375d2003c00.jpg"
                }, {
                    url: "https://si.geilicdn.com/fxx_4b645ec68e053c9153e34da6c7b0f7c8unadjust_.png"
                }]
            }
        },
        components: {
            Banner: Banner
        }
    }

</script>
