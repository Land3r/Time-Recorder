export default {
  buttons: {
    save: 'Sauvegarder',
    apply: 'Appliquer',
    ok: 'Ok',
    edit: 'Modifier',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    delete: 'Supprimer'
  },
  langs: {
    fr: 'Français',
    en: 'Anglais'
  },
  homepage: {
    step1: {
      title: 'Démarrer un enregistrement',
      details: 'Avant de démarrer, vous devez démarrer un enregistrement'
    },
    step2: {
      title: 'Sélectionner un projet',
      details: ''
    },
    step3: {
      title: 'Sélectionner une activitée',
      details: ''
    }
  },
  settingspage: {
    title: 'Paramètres',
    user: {
      expansiontitle: 'Utilisateur',
      title: 'Profil utilisateur',
      usernamelabel: 'Nom d\'utilisateur',
      langlabel: 'Langue',
      dateformat: {
        label: 'Format des dates',
        details: 'Vous pouvez utiliser n\'importe quel format de date supporté par Quasar (https://v1.quasar-framework.org/quasar-utils/date-utils#Format-for-display)'
      },
      success: 'Profil utilisateur mis à jour.'
    },
    objective: {
      expansiontitle: 'Objectifs',
      title: 'Objectif',
      objectivetypelabel: 'Type d\'objectif',
      objectivevaluelabel: 'Valeur (en heures)',
      success: 'Objectifs mis à jour.'
    },
    defaultactivities: {
      expansiontitle: 'Activités',
      title: 'Activités par defaut',
      noactivities: {
        label: 'Pas d\'activités pour le moment.',
        sublabel: 'Les activités par defaut peuvent être ajoutées au nouveau projets'
      }
    },
    recorder: {
      expansiontitle: 'Enregisteur',
      title: 'Enregisteur',
      systemevents: {
        title: 'Surveiller les événements systèmes',
        sleep: {
          title: 'Mise en veille',
          details: 'Surveiller la mise en veille de l\'ordinateur'
        },
        resume: {
          title: 'Reprise',
          details: 'Surveiller la reprise de l\'ordinateur'
        },
        shutdown: {
          title: 'Arrêt',
          details: 'Surveiller l\'arrêt de l\'ordinateur'
        },
        lock: {
          title: 'Verouillage',
          details: 'Surveiller le verouillage de la session'
        },
        unlock: {
          title: 'Déverouillage',
          details: 'Surveiller le déverouillage de la session'
        },
        ac: {
          title: 'Secteur',
          details: 'Surveiller le passage sur secteur de l\'ordinateur'
        },
        battery: {
          title: 'Batterie',
          details: 'Surveiller le passage sur batterie de l\'ordinateur'
        }
      },
      success: 'Evenements système surveillés mis à jour.'
    },
    importexport: {
      expansiontitle: 'Import / Export',
      import: {
        title: 'Import',
        buttonlabel: 'Import',
        success: 'Données importées avec succès.'
      },
      export: {
        title: 'Export',
        buttonlabel: 'Export',
        success: 'Données exportées.'
      }
    },
    reset: {
      expansiontitle: 'Reset',
      title: 'Reset',
      buttonlabel: 'Reset',
      popup: {
        message: 'Etes vous sur de vouloir réinitialiser l\'etat de l\'application'
      },
      success: 'L\'application a été réinitialisée.'
    }
  }
}
