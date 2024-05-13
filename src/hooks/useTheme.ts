// theme.ts
import { ref, watch } from 'vue'

const THEME_KEY = 'theme'
const DEFAULT_THEME = 'light'

export default function useTheme() {
  const theme = ref<string>(localStorage.getItem(THEME_KEY) || DEFAULT_THEME)

  watch(theme, (newVal) => {
    localStorage.setItem(THEME_KEY, newVal)
    applyTheme(newVal)
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function applyTheme(theme: string) {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  // Aplica el tema al cargar la aplicación
  applyTheme(theme.value)

  return {
    theme,
    toggleTheme
  }
}
