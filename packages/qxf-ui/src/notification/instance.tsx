import { createVNode, render } from 'vue'
import { NotificationConfig, NotificationInstance } from './interface'
import Notification from './notification'

export function createNotification() {
  let instance: NotificationInstance
  const info = (config: NotificationConfig) => {
    if (!instance) {
      // 不存在的情况
      const body = document.body
      const vm = createVNode(Notification, {
        onReady(_instance: NotificationInstance) {
          instance = _instance
          instance.add(config)
        },
      })
      if (config.appContext)
        vm.appContext = config.appContext

      render(vm, body)
    }
    else {
      instance.add(config)
    }
  }
  return {
    info,
  }
}
