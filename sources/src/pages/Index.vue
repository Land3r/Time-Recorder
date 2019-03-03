<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Accueil
      </h1>
    </div>

    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
