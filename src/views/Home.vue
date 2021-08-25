<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  methods:{
    getData(){
      axios.get('http://101.200.49.102:19000/api/v1/datacenter/simian/publish/details2/error')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>

</style>
