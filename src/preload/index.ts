import { GetNotes, ReadNote } from '@shared/types'
import { ipcRenderer } from 'electron'
import { contextBridge } from 'electron/renderer'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWindow')

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args)
  })
} catch (error) {
  console.error(error)
}
