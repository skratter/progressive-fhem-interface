<template>
    <div
        class="grid-item tile"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        @click="clickIcon()"
    >
        <div class="switch-area">
            <v-icon class="white--text icon">
                {{ icon }}
            </v-icon>
        </div>
        <div class="text-area">
            <div class="white--text">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        icon: { type: String, required: true },
        route: { type: String, required: true }
    },
    data: () => {
        return {
            colorTop: 'rgba(0,200,255,0.6)',
            colorBottom: 'rgba(0,0,200,0.6)'
        }
    },
    computed: {

    },
    watch: {

    },
    created () {

    },
    methods: {
        clickIcon () {
            this.$router.push({ name: this.route })
        }
    }
}
</script>

<style lang="scss" scoped>
.tile {
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
}
.switch-area {
    position: relative;
    line-height: 120px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    .icon {
        margin-top: -10px;
        font-size: 4rem;
    }
}
.text-area {
    position: absolute;
    bottom: 2px;
    left: 10px;
    font-size: 1rem;
}
</style>
