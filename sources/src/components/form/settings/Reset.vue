<template>
  <q-card>
    <h3>{{$t('settingspage.reset.title')}}</h3>
    <br />
    <center>
      <q-btn color="negative" @click="confirmResetStateDialogShown = true">{{$t('settingspage.reset.buttonlabel')}}</q-btn>
    </center>
    <br />
    <q-dialog v-model="confirmResetStateDialogShown" persistent transition-show="scale" transition-hide="scale">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-mx-sm">{{$t('settingspage.reset.popup.message')}}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('buttons.cancel')" v-close-dialog />
          <q-btn flat :label="$t('settingspage.reset.buttonlabel')" color="negative" @click="resetStateBtn()" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ResetForm',
  components: {

  },
  data: function () {
    return {
      'confirmResetStateDialogShown': false
    }
  },
  methods: {
    resetStateBtn: function () {
      this.resetState()
      this.$q.notify({
        message: this.$t('settingspage.reset.success'),
        color: 'positive'
      })
    },
    ...mapActions([
      'resetState'
    ])
  }
}
</script>
