<template>
  <section>
    <div class="white-side-content" :class="{ 'show-content': isContentVisible }">
      <img class="img" src="../assets/draham.png" alt="Image" id="me">
      <div class="text">
        <h1>About me</h1>
        <p>Hello, I'm Georgi Karchev, 17 years old from Plovdiv. Programming is my passion, and i want to develop it professionally. My goal is to create something unique and personal in the field of software development. I actively search opportunities for learning, practice, and connecting with new people who share similar interests.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Whitesidecontent',
  data() {
    return {
      isContentVisible: false,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = 200; // Adjust this value based on when you want the animation to trigger
      this.isContentVisible = scrollPosition > triggerPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* Add styles for the initial state and the animated state */
.white-side-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 44rem;
  padding-left: 0.5rem;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

/* Apply styles when the .show-content class is present */
.white-side-content.show-content {
  opacity: 1;
  transform: translateY(0);
}

.text { 
  font-size: 1.2rem;
  padding-left: 0.5rem;
}

.img {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

h1 { 
  display: flex;
  justify-content: center;
}

/* Media query */
@media (max-width: 768px) {
  .white-side-content {
    display: none;
  }
}

@media (min-width: 974px) {
  .text { 
    font-size: 1.3rem;
    width: 50%;
  }
}


@media (min-width: 882px) {
  .text { 

  }
}




@media (min-width: 1268px) {
  .text { 
    font-size: 1.6rem;
    padding-left: 2rem;
  }
  .white-side-content {
    padding-left: 2rem;
  }
}
</style>
