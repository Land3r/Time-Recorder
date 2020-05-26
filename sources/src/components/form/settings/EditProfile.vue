<template>
  <q-card>
    <h3>{{$t('settingspage.user.title')}}</h3>
    <div class="q-pa-md">
      <div class="row">
        <div class="col q-pr-sm">
          <q-input
            v-model="form.username"
            :label="$t('settingspage.user.usernamelabel')"
            @blur="$v.form.username.$touch"
            :error="$v.form.username.$error"
          />
        </div>
        <div class="col q-pl-sm">
          <q-select
            v-model="form.lang"
            :options="langOptions"
            :label="$t('settingspage.user.langlabel')"
            @blur="$v.form.lang.$touch"
            :error="$v.form.lang.$error"
          >
            <template v-slot:selected-item="scope">
              {{$t(scope.opt.label)}}
            </template>
            <template v-slot:prepend>
              <img
                height="60%"
                :src="getFlagIcon(form.lang.icon)"
              />
            </template>
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
              >
                <q-item-section avatar>
                  <q-img :src="getFlagIcon(scope.opt.icon)" />
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="$t(scope.opt.label)" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <div class="row">
        <div class="col q-pr-sm">
          <q-input
            v-model="form.dateFormat"
            :label="$t('settingspage.user.dateformat.label')"
            @blur="$v.form.dateFormat.$touch"
            :error="$v.form.dateFormat.$error"
            :hint="$t('settingspage.user.dateformat.details')"
          />
        </div>
        <div class="col q-pl-sm">
        </div>
      </div>
    </div>
    <br />
    <center>
      <q-btn color="positive" @click="submit" :disable="JSON.stringify(form) === JSON.stringify({username: this.username, lang: this.lang, dateFormat: this.dateFormat})">{{$t('buttons.save')}}</q-btn>
    </center>
    <br />
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
import { LangOptions } from '../../../data/langs'
import { getLangOption } from '../../../helpers/langs'

export default {
  name: 'EditProfileForm',
  data: function () {
    return {
      form: {
        username: '',
        lang: '',
        dateFormat: ''
      },
      langOptions: LangOptions
    }
  },
  validations: {
    form: {
      username: { required, minLength: minLength(3) },
      lang: { required },
      dateFormat: { required }
    }
  },
  methods: {
    getFlagIcon: function (flag) {
      return `../../../../assets/icons/flags/${flag}.png`
    },
    changeLanguage: async function (lang) {
      try {
        await import(`quasar/lang/${lang}`)
          .then(isolang => {
            // Change quasar lang once ressources are loaded.
            this.$q.lang.set(isolang.default)
            // Change vue i18n language.
            this.$i18n.locale = lang
            // Change vuex language value.
            this.setLang(lang)
          })
      } catch (err) {
        console.error(`Lang ${lang} was not found`)
      }
    },
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const username = this.form.username
        const lang = this.form.lang.value
        const dateFormat = this.form.dateFormat

        this.setUsername(username)
        this.changeLanguage(lang)
        this.setDateFormat(dateFormat)
        this.$q.notify({
          message: this.$t('settingspage.user.success'),
          color: 'positive'
        })
      }
    },
    reset () {
      this.form = {
        username: '',
        lang: '',
        dateFormat: ''
      }
    },
    ...mapActions('settings', [
      'setUsername',
      'setLang',
      'setDateFormat'
    ])
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    },
    ...mapState('settings', [
      'username',
      'lang',
      'dateFormat'
    ])
  },
  created: function () {
    this.form.username = this.username
    this.form.lang = getLangOption(this.lang)
    this.form.dateFormat = this.dateFormat
  }
}
</script>
