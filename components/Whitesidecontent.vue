<template>
  <section>
  <div class="white-side-content">
    <div class="content-image">
      <img src="/assets/draham.png" alt="Image">
    </div>
    <div class="text">
      <p>Your text goes here</p>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Whitesidecontent',
};
</script>

<style scoped>
.white-side-content {
  display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-content: flex-start;
}

.content-image {
  min-width: 30%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
}



.text {
  padding-top: 30rem;
}


</style>
