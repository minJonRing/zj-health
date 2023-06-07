<template>
  <div class="box">
    <ListProT
      ref="list"
      :list="list"
      :mixinConfig="mixinConfig"
      :searchParam="searchParam"
      :tableParam="tableParam"
      :noBtns="noBtns"
      :otherBtns="otherBtns"
      :selection="selection"
      @getData="getData"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rulesT } from "tqr";

export default {
  name: "List",
  props: {
    noBtns: rulesT.Array,
    otherBtns: rulesT.Array,
    selection: rulesT.Array,
  },
  data() {
    return {
      mixinConfig: {
        url: "1",
      },
      list: {},
      // 查询条件
      searchParam: [],
      // 表格表头、数据显示
      tableParam: [],
    };
  },
  computed: {
    ...mapGetters([]),
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.searchParam = [
        {
          label: "姓名",
          type: "input",
          option: {
            prop: "name",
            initValue: "",
          },
        },
        {
          label: "身份证号码",
          type: "input",
          option: {
            prop: "idCard",
            initValue: "",
          },
        },
      ];
      this.tableParam = [
        { label: "姓名", prop: "name" },
        { label: "身份证号码", prop: "idCard", width: "200px" },
        { label: "年龄", prop: "age", width: "100px" },
        { label: "联系电话", prop: "contactPhone", width: "100px" },
        {
          label: "是否属于一类专家",
          prop: "isFirst",
          width: "140px",
          render: (h, { param }) => {
            return param ? (
              <el-tag>是</el-tag>
            ) : (
              <el-tag type="info">否</el-tag>
            );
          },
        },
      ];
    },
    getData(data) {
      this.$emit("getData", data);
    },
  },
};
</script>
