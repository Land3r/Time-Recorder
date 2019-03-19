export default () => ({
  isRecording: false,
  currentRecord: null,
  currentSegment: null,
  records: [
    {
      id: 'd20ff5a9-7907-4f68-b797-aa7fdbc82597',
      startedAt: 1552559240859,
      endedAt: 1554559240859,
      segments: [
        {
          id: 'aa7ec278-18e5-4a24-a479-aac98468279a',
          startedAt: 1552559240859,
          endedAt: 1552569240859,
          project: 'Test',
          color: 'primary',
          icon: 'business',
          activity: 'My awesome activity',
          comment: 'Travail avec Levy sur ReactJS'
        },
        {
          id: 'aa7ec278-18e5-4a24-a479-fds98468279a',
          startedAt: 1552569240859,
          endedAt: 155299240859,
          project: 'Test',
          color: 'secondary',
          icon: 'business',
          activity: 'My awesome activity',
          comment: 'none'
        }
      ]
    }
  ]
})
