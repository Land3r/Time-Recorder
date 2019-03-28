import { uid } from 'quasar'

class RecordFactory {
  static Create ({
    id,
    startedAt,
    endedAt,
    comment,
    segments,
    ...rest
  }) {
    if (rest !== null && JSON.stringify(rest) !== '{}') {
      console.error(`Unknown properties ${JSON.stringify(rest)} for RecordFactory.Create`)
    }
    return {
      id: id ?? uid(),
      startedAt: startedAt ?? Date.now(),
      endedAt: endedAt ?? null,
      comment: comment ?? '',
      segments: segments ?? []
    }
  }

  static Edit (record, {
    startedAt,
    endedAt,
    comment,
    segments,
    ...rest
  }) {
    if (rest !== null && JSON.stringify(rest) !== '{}') {
      console.error(`Unknown properties ${JSON.stringify(rest)} for RecordFactory.Edit`)
    }
    return {
      startedAt: startedAt ?? record.startedAt,
      endedAt: endedAt ?? record.endedAt,
      comment: comment ?? record.comment,
      segments: segments ?? record.segments
    }
  }
}

export { RecordFactory }
