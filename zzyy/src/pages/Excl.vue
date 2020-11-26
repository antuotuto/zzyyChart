<template>
    <div>
        <template>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            </el-table>
        </template>
        <input type="button" value="加载" @click="excl">
    </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          list:{},
          warehouse:{
              startDate:"",
              endDate:""
          }
        }
      },
      methods:{
          excl(){
            
            var te=this.warehouse
            debugger
              this.$axios({
                  methods:'post',
                    url:'http://192.168.10.7:8081/sales/getSalesWarehouseOutData',
                    data:this.warehouse
              }).then(response=>{
                  this.list=response.date
                  console.log(list)
              })
          }

      }
    }
  </script>

<style>


</style>