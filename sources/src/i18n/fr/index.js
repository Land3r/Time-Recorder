export default {
  buttons: {
    save: 'Sauvegarder',
    apply: 'Appliquer',
    ok: 'Ok',
    edit: 'Modifier',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    delete: 'Supprimer',
    ignore: 'Ignorer',
    back: 'Precedent',
    next: 'Suivant'
  },
  langs: {
    fr: 'Français',
    en: 'Anglais'
  },
  common: {
    noresults: 'Pas de résultats',
    optional: 'Optionnel'
  },
  layout: {
    'poweredbyquasar': 'Propulsé par Quasar {version}',
    'exitlabel': 'Quitter',
    'madewithlove': 'Fait avec 💗',
    'confirmquitmessage': 'Un enregistrement est en cours. Voulez vous vraiment quitter ?',
    'quitlabel': 'Quitter',
    'quitandsavelabel': 'Sauvegarder et Quitter'
  },
  form: {
    activity: {
      create: {
        title: 'Créer une activité',
        namelabel: 'Nom',
        labellabel: 'Label',
        iconlabel: 'Icône'
      },
      edit: {
        title: 'Modifier une activité',
        namelabel: 'Nom',
        labellabel: 'Label',
        iconlabel: 'Icône'
      },
      delete: 'Voulez vous vraiment supprimer l\'activité <strong>{name}</strong> ?'
    }
  },
  homepage: {
    errorisrecording: 'Un enregistrement est déjà en cours',
    title: 'Accueil',
    step1: {
      title: 'Démarrer un enregistrement',
      details: 'Avant de démarrer, vous devez démarrer un enregistrement',
      buttonlabel: 'Démarrer l\'enregistrement',
      commentlabel: 'Commentaire'
    },
    step2: {
      title: 'Sélectionner un projet',
      details: 'Vous pouvez choisir un projet / activité de suite, ou le définir plus tard',
      projectlabel: 'Projet'
    },
    step3: {
      title: 'Sélectionner une activitée',
      details: '',
      activitylabel: 'Activité',
      successactivity: 'Enregistreur démarré sur {project}: {activity}.',
      successnoactivity: 'Enregistreur démarré.'
    }
  },
  recorderpage: {
    title: 'Enregistreur',
    nosegment: 'Activité non précisé',
    activity: {
      projects: {
        title: 'Projets'
      },
      activities: {
        title: 'Activités',
        selectprojectfirst: 'Sélectionnez un projet avant de pouvoir choisr une activité.'
      },
      menu: {
        changeActivitylabel: 'Changer d\'activité',
        editActivityLabel: 'Modifier activité courante',
        cancelActivityLabel: 'Annuler activité courante'
      },
      messages: {
        startSegmentWithNoRecordTitle: 'Démarrer un enregistrement ?',
        startSegmentWithNoRecordMessage: 'Aucun enregistrement n\'est pour l\'instant demarré. Voulez vous démarrer un enregistrement sur l\'activité {project}: {activity} ?'
      }
    }
  },
  projectspage: {
    title: 'Projets'
  },
  graphicspage: {
    title: 'Graphiques'
  },
  recordspage: {
    title: 'Enregistrements'
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
