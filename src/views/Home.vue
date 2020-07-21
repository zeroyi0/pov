<template>
    <h2>这里是主页</h2>
</template>

<script>
    export default {
        name: "Home",
        created () {
            this.$http.get('/auth/info')
                .then(res => {
                    console.log(res)
                })
        }
    }
</script>

<style scoped>

</style>
