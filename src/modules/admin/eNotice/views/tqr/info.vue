<template>
  <div class="info">
    <el-form ref="form" :model="form" :rules="rules" label-width="140px">
      <FormProT :list="list" :form="form" :form-list="formList" />
      <el-form-item>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        <btn-return />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import infoMixin from "@/mixin/infoMixin";
import { mapGetters } from "vuex";
import {
  rulesT,
  change,
  blurName,
  blurCode18,
  fnGenerateMixinZd,
  blurPhoneNotRequired,
  blurMobileNotRequired,
} from "tqr";

const mixinZd = fnGenerateMixinZd(
  ["expertProfessionalZd", "expertTypeZd", "areaCodeZd"],
  {
    mapGetters,
  }
);

export default {
  name: "Info",
  mixins: [infoMixin, mixinZd],
  props: {
    read: rulesT.Boolean,
  },
  data() {
    return {
      mixinConfig: {
        url: "/expertInfo",
      },
      form: {},
      formList: [],
      rules: {
        name: blurName,
        idCard: blurCode18,
        contactPhone: blurPhoneNotRequired,
        mobile: blurMobileNotRequired,
        typeList: change,
        professionalList: change,
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const isRead = this.read;
      this.formList = [
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "姓名",
              type: "input",
              option: {
                prop: "name",
                isRead,
                initValue: "",
                maxlength: 9,
              },
            },
            {
              label: "身份证号码",
              type: "input",
              option: {
                prop: "idCard",
                isRead,
                initValue: "",
                maxlength: 18,
              },
            },
            {
              label: "性别",
              type: "select",
              option: {
                prop: "cc",
                isRead,
                initValue: "",
              },
            },
          ],
        },

        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "年龄",
              type: "input",
              option: {
                prop: "age",
                isRead,
                initValue: "",
              },
            },
            {
              label: "专业",
              type: "input",
              option: {
                prop: "major",
                isRead,
                initValue: "",
              },
            },
            {
              label: "学历",
              type: "input",
              option: {
                prop: "eduBackground",
                isRead,
                initValue: "",
              },
            },
          ],
        },
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "联系电话",
              type: "input",
              option: {
                prop: "contactPhone",
                isRead,
                initValue: "",
                maxlength: 13,
              },
            },
            {
              label: "手机号码",
              type: "input",
              option: {
                prop: "mobile",
                isRead,
                initValue: "",
                maxlength: 11,
              },
            },
            {
              label: "所在地区",
              type: "cascader",
              option: {
                prop: "areaCode",
                isRead,
                initValue: "",
                listName: "areaCodeZd",
              },
            },
          ],
        },

        {
          label: "住址",
          type: "input",
          option: {
            type: "textarea",
            rows: 3,
            prop: "address",
            isRead,
            initValue: "",
            style: { width: "820px" },
          },
        },
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "电子邮箱",
              type: "input",
              option: {
                prop: "email",
                isRead,
                initValue: "",
              },
            },
            {
              label: "开户行",
              type: "input",
              option: {
                prop: "accountBank",
                isRead,
                initValue: "",
              },
            },
            {
              label: "账号",
              type: "input",
              option: {
                prop: "bankAccount",
                isRead,
                initValue: "",
              },
            },
          ],
        },
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "专家类别",
              type: "select",
              option: {
                prop: "typeList",
                isRead,
                initValue: [],
                listName: "expertProfessionalZd",
                multiple: true,
              },
            },
            {
              label: "专业类别",
              type: "select",
              option: {
                prop: "professionalList",
                isRead,
                initValue: [],
                listName: "expertTypeZd",
                multiple: true,
              },
            },
            {
              label: "是否属于一类专家",
              type: "switch",
              option: {
                prop: "isFirst",
                isRead,
                initValue: false,
              },
            },
          ],
        },
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "工作单位",
              type: "input",
              option: {
                prop: "workOrg",
                isRead,
                initValue: "",
              },
            },
            {
              label: "工作经验(年)",
              type: "input",
              option: {
                prop: "workYear",
                isRead,
                initValue: "",
              },
            },
          ],
        },
        {
          type: "box",
          className: "flex flex-mid",
          children: [
            {
              label: "职称",
              type: "input",
              option: {
                prop: "title",
                isRead,
                initValue: "",
              },
            },
            {
              label: "职务",
              type: "input",
              option: {
                prop: "duty",
                isRead,
                initValue: "",
              },
            },
          ],
        },
      ];
      this.form = this.initForm(this.formList);
    },
    handleConfirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const data = { ...this.form };
          this.submit(data);
        } else {
          this.$notify.warning("必填项未填写完整，请检查！");
          return false;
        }
      });
    },
  },
};
</script>
