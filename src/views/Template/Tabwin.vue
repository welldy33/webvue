<template>
    <div class="nav navbar navbar-expand-lg navbar-white navbar-light border-bottom p-0" :data-widget="[SD?'assss':'navtabs']">
        <router-link class="nav-link bg-danger" data-widget="iframe-close" :to="{name:'About'}">Close</router-link>
        <router-link class="nav-link bg-light" to="#" data-widget="iframe-scrollleft"><i class="fas fa-angle-double-left"></i></router-link>
        <ul class="navbar-nav" role="tablist"></ul>
        <router-link class="nav-link bg-light" to="#" data-widget="iframe-scrollright"><i class="fas fa-angle-double-right"></i></router-link>
        <router-link class="nav-link bg-light" to="#" data-widget="iframe-fullscreen"><i class="fas fa-expand"></i></router-link>
    </div>
</template>
<script>
export default {
    props:['SD']    
}
</script>