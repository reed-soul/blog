<template>
    
  <div>
        <Heavy v-if="defer(1)" />    <Heavy v-if="defer(2)" />    <Heavy
      v-if="defer(3)"
    />    <Heavy v-if="defer(4)" />  
  </div>
</template>
<script>
export default {  data() {    return {      displayPriority: 0    }  },  mounted() {    this.runDisplayPriority()  },  methods: {    runDisplayPriority() {      const step = () => {        requestAnimationFrame(() => {          this.displayPriority++          if (this.displayPriority < 10) {            step()          }        })      }      step()    },    defer(priority) {      return this.displayPriority >= priority    }  }}
</script>
