<template>
    <a-form @submit="handleSubmit" >
        <h2 class="title">Login page</h2>
      <a-form-item
        label='Username'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
       
      >
        <a-input v-model="formInput.username" />
      </a-form-item>
      <a-form-item
        label='Password'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
    
      >
        <a-input type="password" v-model="formInput.password" />
      </a-form-item>
      <a-form-item
        :wrapperCol="{ span: 12, offset: 5 }"
      >
        <a-button type='primary' htmlType='submit'>
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </template>
  
  <script>
  export default {
    data () {
      return {
        formLayout: 'horizontal',
        formInput:{
            username:'',
            password:''
        }
      }
    },
    methods: {
      async handleSubmit (e) {
        e.preventDefault()
        const result = await this.$axios.post('/api/',this.formInput)
        
      },
      handleSelectChange (value) {
        console.log(value)
      },
    },
  }
  </script>

  <style scoped>
    .title{
        text-align: center;
        font-size: 3rem;
        margin: 40px 0;
    }
</style>