export const SystemEventType = {
  SLEEP: 'sleep',
  RESUME: 'resume',
  SHUTDOWN: 'shutdown',
  LOCK: 'lock',
  UNLOCK: 'unlock',
  AC: 'ac',
  BATTERY: 'battery'
}

export const SystemEventTypeOptions = [
  {
    name: SystemEventType.SLEEP,
    icon: 'brightness_3'
  },
  {
    name: SystemEventType.RESUME,
    icon: 'brightness_5'
  },
  {
    name: SystemEventType.SHUTDOWN,
    icon: 'exit_to_app'
  },
  {
    name: SystemEventType.LOCK,
    icon: 'lock'
  },
  {
    name: SystemEventType.UNLOCK,
    icon: 'lock_open'
  },
  {
    name: SystemEventType.AC,
    icon: 'battery_charging_full'
  },
  {
    name: SystemEventType.BATTERY,
    icon: 'battery_std'
  }
]
