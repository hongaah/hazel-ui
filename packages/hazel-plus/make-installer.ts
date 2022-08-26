import { App } from 'vue'

export const makeInstaller = (
  components: Parameters<App['use']>['0'][] = []
) => {
  const install = (app: App) => {
    components.forEach(c => app.use(c))
  }
  return {
    install,
  }
}
