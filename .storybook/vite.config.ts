import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  viteFinal: async (config) => {
    config.css = {
      ...config.css,
      preprocessorOptions: {
        ...config.css?.preprocessorOptions,
        scss: {
          ...config.css?.preprocessorOptions?.scss,
          api: 'modern-compiler'
        }
      }
    }
    return config
  }
}

export default config
