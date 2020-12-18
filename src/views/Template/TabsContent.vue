<template>

<div :isContent="$route.params.isContent">
<br>
   <div class="container-fluid ">
     <div class="card">
       <div class="card-header">
         <h2>Weather Test</h2>
       </div>
       <div class="card-body"> 
          <slot name="content"/>
       </div>
     </div>
   </div>
   </div>
</template>
<script>
export default {
}
</script>