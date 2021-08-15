<template>
  <div v-if="Object.keys(paramInfo).length" class="param-info">
    <table class="info-size" v-for="table in paramInfo.sizes">
      <tr v-for="row in table">
        <td v-for="col in row">{{ col }}</td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="item in paramInfo.infos">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  data() {
    return {};
  },
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    console.log(this.paramInfo);
  },
  components: {},
};
</script>

<style lang="less" scoped>
.param-info {
  padding: 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 90vw;
    border-collapse: collapse;
    tr {
      height: 42px;
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }
    .info-param-key {
      width: 23vw;
    }
    .param-value {
      color: #eb4868;
    }
  }
}
</style>
