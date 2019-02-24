<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      <v-scrollin :speed="60" :misses="1">
        Sorry, nothing here...
      </v-scrollin>
      <strong>(404)</strong>
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Go back</q-btn>
  </div>
</template>

<script>

import VSCrollin from 'vue-scrollin'

export default {
  name: 'Error404',
  components: {
    'v-scrollin': VSCrollin
  }
}
</script>
