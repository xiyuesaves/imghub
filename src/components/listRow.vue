<template>
    <div class="list-row" @click="emit" :class="{ 'select': select }">
        <span class="iconfont" :class="'icon-' + icon" :style="{ color: color }"></span>
        <div class="text of-ele">
            {{ text }}
        </div>
        <div class="value">
            {{ showValue(value) }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        },
        list: {
            type: Array,
            default() {
                return []
            }
        },
        select: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        showValue(value) {
            return parseInt(value).toLocaleString('en-US')
        },
        emit(){
            this.$emit("click",0)
        }
    }
}
</script>

<style lang="scss" scoped>
.list-row {

    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 16px;
    font-size: 12px;
    line-height: 30px;
    opacity: 0.8;

    &.select {
        opacity: 1;
    }

    &.select::after {
        content: "";
        display: block;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 4px;
        opacity: 0.1;
        position: absolute;
        width: 95%;
        height: 100%;
        background-color: #ffffff;
    }

    .iconfont {
        margin-right: 8px;
        font-size: 20px;
    }

    .value {
        font-size: 12px;
        opacity: 0.6;
    }


}

.list-item {
    padding-left: 20px;
}
</style>