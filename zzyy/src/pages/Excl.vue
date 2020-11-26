<template>
  <div>
    <form>
      <input
        type="text"
        value=""
        v-model="warehouse.type"
        placeholder="请输入上传类型"
      />
      <input type="file" @change="getFile($event)" />
      <button @click="submitForm($event)">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warehouse: {
        type: "",
      },
    };
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("type", this.warehouse.type);
      formData.append("file", this.file);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      };

      this.$axios({
        method: "post",
        url: "http://192.168.10.7:8081/sales/getExcleWarehousing",
        data: formData,
        headers: config,
      })
        .then((response) => {
          alert("上传完成");
        })
        .catch((err) => {
          alert(err);
        });
    },

    
  },
};
</script>