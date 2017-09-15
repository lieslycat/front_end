<template>
  <!--<div class="layout-content">-->
    <Row>
      <Col span="7">
      <Menu theme="dark" @on-open-change="getFilesInFolder($event)">
        <Submenu :name="index+1" v-for="(folderLabel, index) in allFolderLabels">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{folderLabel}}
          </template>

          <MenuItem v-for="(file, index) in allFolders[folderLabel]" :name="'1-'+index+1">{{file.FileName}}</MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col span="17">
      <div class="layout-content-main">内容区域</div>
      </Col>
    </Row>
  <!--</div>-->
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters([
      'allFolderLabels',
      'allFolders'
    ]),
    methods: mapActions([
      'getAllFolders',
      'getFilesInFolder'
    ]),
    created () {
      this.$store.dispatch('getAllFolders')
    }
  }
</script>
