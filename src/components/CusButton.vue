<template>
  <button
    class="cusbutton"
    :class="{'is-disabled':disabled}"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "cusbutton",
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.cusbutton {
  display: inline-block;
  width: 100%;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #20af0e;
  border-color: #20af0e;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  color: white;
}

.is-disabled,
.is-disabled:focus,
.is-disabled:hover {
  background-color: #aaa;
  border-color: #aaa;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
