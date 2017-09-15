import axios from 'axios'
import HttpInterface from './httpinterface'
export default {
  listAllFolders () {
    return new Promise((resolve, reject) => {
      axios.get(HttpInterface.FILE.LIST_FOLDERS)
        .then(res => {
          resolve(res.data)
        }, err => {
          reject(err)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  listFiles (folderId) {
    return new Promise((resolve, reject) => {
      axios.get(HttpInterface.FILE.LIST_FILES, {params: {folderId: folderId}})
        .then(res => {
          resolve(res.data)
        }, err => {
          reject(err)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
