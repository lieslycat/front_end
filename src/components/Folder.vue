<template>
  <div class="layout-content">
    <Row>
      <Col span="5">
      <Menu active-name="1-2" width="auto" :open-names="['1']">
        <Submenu name="1" v-for="folderLabel in allFolderLabels" @click.stop="getFilesInFolder(allFolders[folderLabel].folderId)">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{folderLabel}}
          </template>

          <MenuItem v-for="file in allFolders[folderLabel]" :name="'1-'+$index+1">{{file.FileName}}</MenuItem>
          <!--<MenuItem name="1-2">选项 2</MenuItem>-->
          <!--<MenuItem name="1-3">选项 3</MenuItem>-->
        </Submenu>
        <!--<Submenu name="2">-->
          <!--<template slot="title">-->
            <!--<Icon type="ios-keypad"></Icon>-->
            <!--导航二-->
          <!--</template>-->
          <!--<MenuItem name="2-1">选项 1</MenuItem>-->
          <!--<MenuItem name="2-2">选项 2</MenuItem>-->
        <!--</Submenu>-->
        <!--<Submenu name="3">-->
          <!--<template slot="title">-->
            <!--<Icon type="ios-analytics"></Icon>-->
            <!--导航三-->
          <!--</template>-->
          <!--<MenuItem name="3-1">选项 1</MenuItem>-->
          <!--<MenuItem name="3-2">选项 2</MenuItem>-->
        <!--</Submenu>-->
      </Menu>
      </Col>
      <Col span="19">
      <div class="layout-content-main">内容区域</div>
      </Col>
    </Row>
  </div>
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
