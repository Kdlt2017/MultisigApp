<template>
    <body class="vertical-layout vertical-compact-menu 1-column  bg-full-screen-image menu-expanded blank-page blank-page"
    data-open="click" data-menu="vertical-compact-menu" data-col="1-column">
    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
               
                <!--/ Demo fullscreen-overlay -->
                <section id="account-login" class="flexbox-container">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <!-- image -->
                        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0 text-center d-none d-md-block">
                            <div class="border-grey border-lighten-3 m-0 box-shadow-0 card-account-left height-450">
                                <img src="./../assets/images/pages/account-login.png"
                                    class="card-account-img width-200" alt="card-account-img">
                            </div>
                        </div>
                        <!-- login form -->
                        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0">
                            <div
                                class="card border-grey border-lighten-3 m-0 box-shadow-0 card-account-right height-450">
                                <div class="card-content">
                                    <div class="card-body p-3">
                                        <p class="text-center h5 text-capitalize">Welcome to Crypto ICO!</p>
                                        <p class="mb-3 text-center">Create An account</p>
                                        <form class="form-horizontal form-signin" v-on:submit.prevent="createAccount"
                                            action="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/index.html">
                                            <fieldset class="form-label-group">
                                                <input v-model="username" type="text" class="form-control" id="user-name"
                                                    placeholder="Your Username" required="" autofocus="">
                                                <label for="user-name">Username</label>
                                            </fieldset>
                                            <fieldset class="form-label-group">
                                                <input v-model="email" type="email" class="form-control" id="user-email"
                                                    placeholder="Your E-mail" required="" autofocus="">
                                                <label for="user-email">Email</label>
                                            </fieldset>
                                            <fieldset class="form-label-group">
                                                <input v-model="password" type="password" class="form-control" id="user-password"
                                                    placeholder="Enter Password" required="" autofocus="">
                                                <label for="user-password">Password</label>
                                            </fieldset>
                                            <fieldset class="form-label-group">
                                                <input v-model="confirmPassword" type="password" class="form-control" id="user-confirm-password"
                                                    placeholder="Confirm your Password" required="" autofocus="">
                                                <label for="user-confirm-password">Confirm Password</label>
                                            </fieldset>
                                            
                                            <button type="submit" class="btn-gradient-primary btn-block my-1">Register</button>
                                            <p class="text-center"><a class="card-link"><router-link to="/">Log In</router-link></a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
    
</body>
</template>

<script>
import bus from '../main.js'
import axios from 'axios'
import { ValidationProvider } from 'vee-validate'

export default {
    data () {
        return {
            user: [],
            id: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        createAccount() {
            if(this.password==this.confirmPassword){
            axios.post("/api/router/register",{
               // id: this.id,
                username: this.username,
                email: this.email,
                password: this.password
            } )
            .then((res) => {
                this.username = ''
            })
            .catch((err) =>
                console.log(err))
            }
        }
    }
}
</script>

<style scoped>

</style>