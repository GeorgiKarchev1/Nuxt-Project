<template>
  <div class="buttons"> 
    <UButton @click="redirectToGithub">
      <Icon name="uil:github" color="white" class="git"/>
    </UButton>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToGithub() {
      window.open('https://github.com/вашето-потребителско-име', '_blank');
    }
  }
}
</script>

<style scoped>

  
    .buttons {
      font-size: 10rem;
    }
</style>
