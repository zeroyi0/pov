<template>
    <div class="login-container">
        <div class="login-table">
            <div class="login-logo">
                <h2>毕格医药科技</h2>
            </div>
            <div class="login-form">
                <el-form ref="login_form_ref" :model="login_form" :rules="login_rules">
                    <!-- 用户名 -->
                    <el-form-item prop="username">
                        <el-input v-model="login_form.username" prefix-icon="el-icon-user-solid" clearable></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="password">
                        <el-input type="password" @keypress.enter.native="login" v-model="login_form.password" prefix-icon="el-icon-lock" clearable show-password></el-input>
                    </el-form-item>
                    <!-- 按钮组 -->
                    <div class="login-btn-container">
                        <el-button type="primary" size="small" @click="login">登录</el-button>
                        <el-button type="info" size="small" @click="resetForm">重置</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            login_form: {
                username: '',
                password: ''
            },
            login_rules: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { min: 4, max: 16, message: '用户名长度应在4-16之间', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 20, message: '密码长度应在6-20之间', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login () {
            const that = this
            this.$refs.login_form_ref.validate(valid => {
                if (valid) {
                    that.$http.post('/auth/login/', that.login_form)
                        .then(res => {
                            if (res.status !== 200) {
                                that.$message.error(res.msg)
                                return
                            }
                            that.$message.success('登录成功！')
                            window.sessionStorage.setItem('token', res.data.token)
                            // 跳转主页
                            that.$router.push('/home')
                        })
                } else {
                    return false
                }
            })
        },
        // 重置登录表单
        // 用于取消验证规则
        resetForm () {
            this.$refs.login_form_ref.resetFields()
            this.login_form.username = ''
            this.login_form.password = ''
        },
    }
}
</script>

<style lang="less" scoped>
    .login-container {
        width: 100%;
        height: 100%;
        background: url("./../assets/img/bg.jpg") no-repeat;
        background-size: 100% 100%;

        .login-table {
            width: 400px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            position: absolute;
            left: 50%;
            right: 50%;
            top: 20%;
            transform: translate(-50%);

            .login-logo {
                img {
                    width: 40%;
                }
                h2 {
                    margin: 0;
                    text-align: center;
                    color: deepskyblue;
                }
                width: 100%;
                height: auto;
                position: relative;
                left: 50%;
                right: 50%;
                top: -20%;
                transform: translate(-50%);
                margin: 0 0 20px;
            }

            .login-btn-container {
                text-align: right;
            }

        }
    }

</style>
