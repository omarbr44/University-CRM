<script setup>
  import IconSearch from '../Icon/Search.vue';
  
</script>

<template>
  <div class="search-box">
    <IconSearch />

    <input
      class="search-input"
      aria-describedby="Search"
      placeholder="Search for any product"
    />
  </div>
</template>

<style scoped>
  .search-box {
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border: 1px solid #f2f2f2;
    border-radius: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

/*   @media (min-width: 1440px) {
    .search-box {
      padding: 6px 1rem;
      width: auto;
    }
  } */

  .search-input {
    border: none;
    background: inherit;
    width: 100%;
    outline: none;
    font-weight: 500;
  }
</style>
