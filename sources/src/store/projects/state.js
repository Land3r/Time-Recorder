export default () => ({
  projects: [
    {
      id: 0,
      order: 0,
      color: 'primary',
      bgcolor: 'bg-primary',
      fontcolor: 'white',
      name: 'Structure',
      activities: [
        { id: 0, name: 'Inter-contrat', label: 'Aucun client', icon: 'business' },
        { id: 1, name: 'Auto-formation', label: '', icon: 'library_books' },
        { id: 2, name: 'Formation', label: 'Formation par un tiers', icon: 'library_books' }
      ]
    },
    {
      id: 1,
      order: 1,
      color: 'secondary',
      bgcolor: 'bg-secondary',
      fontcolor: 'white',
      name: 'Bouygues Telecom',
      activities: [
        { id: 0, name: 'Les bonbons', label: 'Some test project', icon: 'business' },
        { id: 1, name: 'Test', label: 'No description', icon: 'home' }
      ]
    },
    {
      id: 2,
      order: 2,
      color: 'warning',
      bgcolor: 'bg-warning',
      fontcolor: 'white',
      name: 'Bouygues Telecom',
      activities: [
        { id: 0, name: 'BonBonBon', label: 'Some test project', icon: 'business' },
        { id: 1, name: 'Test', label: 'No description', icon: 'home' }
      ]
    }
  ]
})
