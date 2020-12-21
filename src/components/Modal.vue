<template>
   <div class="modal fade" :id="idm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
                <slot name="h-modal"></slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="b-modal"></slot>
          </div>
          <div class="modal-footer">
            <slot name="f-modal"></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'modalComp', 
    props:['title','idm'],
    data() {
        return { 
              
        }
    },
    methods: {
    },
}
</script>
<style>


</style>