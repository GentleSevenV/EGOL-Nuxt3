<template>
    <div class="container">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>
<style lang="less">
.container {
    position: relative;
}
</style>