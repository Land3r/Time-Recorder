<template>
  <q-toolbar inset>
    <q-breadcrumbs style="font-size: 16px" active-color="white">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="white"
        />
      </template>
      <q-breadcrumbs-el
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:label="item.label"
        v-bind:icon="item.icon"
        v-bind:to="item.to"
      />
    </q-breadcrumbs>
  </q-toolbar>
</template>

<style>
</style>

<script>
export default {
  name: 'Breadcrumbs',
  props: ['items']
}
</script>
