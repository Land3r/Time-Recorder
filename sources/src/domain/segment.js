import { uid } from 'quasar'

class SegmentFactory {
  static Create ({
    id,
    startedAt,
    endedAt,
    project,
    color,
    icon,
    activity,
    comment
  }) {
    return {
      id: id ?? uid(),
      startedAt: startedAt ?? Date.now(),
      endedAt: endedAt ?? null,
      project: project ?? { name: null, id: null },
      color: color ?? 'primary',
      icon: icon ?? 'business',
      activity: activity ?? { name: null, id: null },
      comment: comment ?? ''
    }
  }

  static Edit (segment, {
    startedAt,
    endedAt,
    project,
    color,
    icon,
    activity,
    comment
  }) {
    return {
      startedAt: startedAt ?? segment.startedAt,
      endedAt: endedAt ?? segment.endedAt,
      project: project ?? segment.project,
      color: color ?? segment.color,
      icon: icon ?? segment.icon,
      activity: activity ?? segment.activity,
      comment: comment ?? segment.comment
    }
  }
}

export { SegmentFactory }
