<template>
  <div id="login">
    <van-form @submit="onSubmit" class="login-form">
      <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Row,Col,Cell,Form,Button,Field } from 'vant'
export default {
  name:'Login',
  components:{
    [Row.name]: Row,
    [Col.name]: Col,
    [Cell.name]: Cell,
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
  },
  data(){
    return{
      username: '',
      password: ''
    }

  },
  methods:{
    onSubmit(){

    }
  },
  created:{

  }
}
</script>
<style lang="less" scoped>
  .login-form{
    margin-top: 10px;
  }

</style>