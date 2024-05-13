import { useI18n } from 'vue-i18n'
import { computed, type Ref } from 'vue'

interface LocalizationHook {
  locale: Ref<string>
  changeLocale: (newLocale: string) => void
  translate: (key: string) => string
  availableLocales: Ref<string[]>
}

export function useLocalization(): LocalizationHook {
  const { locale, t } = useI18n()

  // Función para cambiar el idioma de la aplicación y guardarlo en localStorage
  const changeLocale = (newLocale: string) => {
    locale.value = newLocale
    localStorage.setItem('appLocale', newLocale)
  }

  // Traducción de una cadena específica
  const translate = (key: string) => {
    return t(key)
  }

  // Proporcionar una lista de idiomas disponibles
  const availableLocales = computed(() => {
    // Aquí puedes devolver una lista de idiomas disponibles
    // Esto depende de cómo hayas configurado VueI18n en tu proyecto
    return ['en', 'es', 'fr'] // Por ejemplo, una lista de códigos de idioma
  })

  // Obtener el idioma guardado en localStorage o usar el idioma por defecto
  if (localStorage.getItem('appLocale')) {
    locale.value = localStorage.getItem('appLocale')!
  }

  return {
    locale,
    changeLocale,
    translate,
    availableLocales
  }
}
