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
        :key="item.id"
        :label="item.label"
        :icon="item.icon"
        :to="item.to"
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
