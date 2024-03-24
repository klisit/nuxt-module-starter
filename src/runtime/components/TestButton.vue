<template>
  <div>xxx {{ text }}</div>
</template>

<script>
export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'df'
    }
  }
})
</script>
