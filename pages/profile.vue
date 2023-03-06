<template>
    <div>
        Protected Page
    </div>
</template>

<script>
    export default {
        name:'Profile',
        middleware:'auth'
    }
</script>

<style lang="scss" scoped>

</style>