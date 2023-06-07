import {
  ajax
} from '@/api/ajax'

const infoMixin = {
  methods: {
    initForm(data, form = {}) {
      data.map(({
        type,
        children,
        option
      }) => {
        if (type === 'box') {
          this.initForm(children, form)
        } else {
          const {
            type,
            prop,
            initValue
          } = option
          const value = type === 'number' ? undefined : initValue
          form[prop] = value
        }
      })
      return form
    },
    // 详情
    getDetail(id) {
      this.$global.loading = true;
      return new Promise((resolve, reject) => {
        ajax({
            url: `${this.mixinConfig.detail || this.mixinConfig.url}/${id}`,
          })
          .then((res) => {
            const {
              data
            } = res;
            resolve(data)
          })
          .finally(() => {
            this.$global.loading = false;
          });
      })

    },
    // 提交
    submit(data, back = true) {
      this.$global.loading = true;
      const {
        id
      } = data
      return new Promise((resolve, reject) => {
        ajax({
            url: id ? `${this.mixinConfig.upload || this.mixinConfig.url}/${id}` : this.mixinConfig.add || this.mixinConfig.url,
            method: id ? "put" : 'post',
            data
          })
          .then((res) => {
            this.$notify.success(res.msg || '成功')
            if (back) {
              this.back();
            }
            resolve(res)
          })
          .finally(() => {
            this.$global.loading = false;
          });
      })
    },
    back() {
      this.$store
        .dispatch("tagsView/delView", this.$route)
        .then(({
          visitedViews
        }) => {
          const latestView = visitedViews.slice(-1)[0];
          if (latestView) {
            this.$router.push("list");
          }
        });
    },
  },
}
export default infoMixin
