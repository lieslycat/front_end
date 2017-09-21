import {FileApi} from '../../api/file'
import * as types from '../mutation-types'

// import Vue from 'vue'

const state = {
  folders: new Map(),
  files: new Map()
}

const getters = {
  allFolderLabels: state => [...state.folders.keys()],
  allFolders: state => state.files
}

const actions = {
  getAllFolders ({commit}) {
    FileApi.listAllFolders().then(res => {
      commit(types.LIST_FOLDERS, res)
    }).catch(err => {
      console.log(err)
    })
  },
  getFilesInFolder ({commit, state}) {
    let target = event.target
    if (target.parentNode.className.match(/(?:.*\s+)*ivu-menu-opened(?:\s+.*)*/)) {
      return
    }
    let folder = state.folders.get(target.innerText.trim())
    FileApi.listFiles(folder.dictionaryId).then(files => {
      commit(types.LIST_FILES, {folderName: folder.value, files})
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
    let newFiles = new Map(state.files.entries())
    newFiles.set(folderName, files)
    state.files = newFiles
    // Vue.set(state.files, folderName, files)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
