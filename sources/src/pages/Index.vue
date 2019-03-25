<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Accueil
      </h1>
    </div>
    <i18n>
    </i18n>
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        :title="$t('homepage.step1.title')"
        icon="settings"
        :done="step > 1"
      >
        {{$t('homepage.step1.details')}}
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="$t('homepage.step2.title')"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        {{$t('homepage.step2.details')}}

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        :title="$t('homepage.step3.title')"
        icon="add_comment"
      >
        {{$t('homepage.step3.details')}}
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data: function () {
    return {
      step: 1
    }
  }
}
</script>
