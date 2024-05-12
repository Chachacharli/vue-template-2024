import { defineStore } from 'pinia'

interface AppState {
  darkmode: boolean
  isToggle: boolean
  sidenav: string
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkmode: false,
    isToggle: false,
    sidenav: ''
  }),
  actions: {
    // Aquí puedes definir acciones para modificar el estado si es necesario
  }
})
