import file from '../../api/file'
import * as types from '../mutation-types'

const state = {
  folders: new Map()
  // files: []
}

const getters = {
  allFolderLabels: state => [...state.folders.keys()],
  allFolders: state => state.folders
  // filesInFolder: state => state.files
}

const actions = {
  getAllFolders ({commit}) {
    file.listAllFolders().then(res => {
      commit(types.LIST_FOLDERS, res)
    }).catch(err => {
      console.log(err)
    })
  },
  getFilesInFolder ({commit}, {folderName, folderId}) {
    file.listFiles(folderId).then(files => {
      commit(types.LIST_FILES, {folderName, files})
    })
  }
}

const mutations = {
  [types.LIST_FOLDERS] (state, folders) {
    let gen = function* () {
      for (let folder of folders) {
        yield [folder.value, folder]
      }
    }
    state.folders = new Map([...gen()])
  },
  [types.LIST_FILES] (state, {folderName, files}) {
    state.folders[folderName] = files
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
