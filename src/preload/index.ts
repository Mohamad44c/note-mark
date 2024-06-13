import { contextBridge } from 'electron/renderer'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWindow')

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO:
  })
} catch (error) {
  console.error(error)
}
