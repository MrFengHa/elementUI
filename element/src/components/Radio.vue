<template>
  <div>
    <el-radio v-model="radio" label="男" @change="logVal">男</el-radio>
    <el-radio v-model="radio" label="女" @change="logVal">女</el-radio>

    <div style="margin-top: 10px">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: "Radio",
    data() {
      return {
        radio: "女",
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      }
    }, methods: {
      logVal(value) {
        console.log(value)
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {

        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style scoped>

</style>
