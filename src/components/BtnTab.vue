<template>
     <li class="nav-item d-none d-sm-inline-block">
          <router-link class="nav-link" :to="{name:'About'}">{{appName}}</router-link>
    </li>
</template>
<script>
export default {
    props:['appName']
}
</script>