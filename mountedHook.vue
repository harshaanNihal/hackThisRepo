<template>
  <div ref="example-element">Example component.</div>
</template>

<script>
export default {
  mounted() {
    console.log(`At this point, vm.$el has been created and el has been replaced.`);
    console.log(this.$el.textContent) // Example component.
  }
}
</script>
