<template lang="pug">
v-container(class='background fill-height ma-0' fluid)
    v-row(justify='space-around' align='center' no-gutters class='fill-height')
        v-col(cols='12' sm='8' md='6' lg='4')
            v-card
                v-row(align='center')
                    v-col(cols='6' class="pr-0")
                        div(class="px-5")
                            v-img(
                                src="https://www.energie.cl/sites/default/files/2021-04/logo_fpc.png"
                                )
                    v-col(cols='6' class="pl-0")
                        v-img(
                            src="http://www.singular.cl/wp-content/uploads/15-logo-FPC.jpg"
                            )
            v-card(class="mt-2")
                v-card-item(class="text-center")
                    v-card-title(class="pt-4 pb-8")
                        h2(class="title-login")
                            span.text-uppercase
                                | sistema venta interna
                    v-card-subtitle.text-uppercase
                        | para iniciar sesión
                v-card-text
                    v-form(ref="form", v-model="valid", lazy-validation="")
                        v-text-field(
                            prepend-inner-icon="mdi-account"
                            variant="outlined"
                            v-model="rut",
                            :rules="rutRules",
                            label="Ingrese su RUT",
                            placeholder="12345678-9"
                            required=""
                            :readonly="this.rutReadOnly"
                        )
                        div(v-show='toggle')
                            v-card-subtitle.text-uppercase.text-center
                                | Ingrese Código de Activación 
                            v-container(class='fill-height ma-0' fluid)
                                v-row(justify='space-around' align='center' no-gutters class='fill-height')
                                    VOtpInput(
                                        ref="otpInput"
                                        input-classes="otp-input"
                                        separator=""
                                        :num-inputs="6"
                                        :should-auto-focus="true"
                                        :is-input-num="true"
                                        :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                                        :placeholder="['*', '*', '*', '*', '*', '*']"
                                        @on-change="handleOnChange"
                                        @on-complete="handleOnComplete"
                                    )
                        div(class="fill-height text-center pt-8 pb-4")
                            v-btn.mr-4(v-show='!toggle', :disabled="!valid", color="success", @click="validate" size="large").text-uppercase
                                | activar mi ingreso
                            v-btn.mr-4(v-show="toggle", color="success", @click="validate" size="large").text-uppercase
                                | activar mi ingreso
            v-container(class='fill-height' fluid)
                v-row(justify='space-around' align='center' no-gutters class='fill-height')
                    span.text-center &copy;{{year}} - Todos los derechos reservados.
</template>

<script>
import { validateRUT } from 'validar-rut'
import VOtpInput from 'vue3-otp-input'

export default {
    name: 'Login',
    data: () => ({
        year: new Date().getFullYear(),
        toggle: false,
        valid: true,
        rut: '',
        rutReadOnly: false,
        rutRules: [
            v => !!v || 'RUT es requerido',
            v => validateRUT(v) && v.length > 8 || 'RUT es invalido',
        ],
    }),
    methods: {
        validate () {
            // this.$refs.form.validate()
            this.toggle = true
            this.rutReadOnly = true
            this.$router.push({name:"Venta"})
            console.log('debería hacer un push router')
        },
    },
    components: {
        VOtpInput,
    },
    setup() {
        const otpInput = null

        const handleOnComplete = (value) => {
            console.log('OTP completed: ', value);
        };

        const handleOnChange = (value) => {
            console.log('OTP changed: ', value);
        };

        const clearInput = () => {
            otpInput.value.clearInput()
        }

        return { handleOnComplete, handleOnChange, clearInput, otpInput };
    },
};
</script>

<style scoped>
    input {
        font-size: 20px !important;
    }
    
    .background {
        /* background-color: antiquewhite; */
        background-color: #83ae48;
    }

    .title-login {
    font-size: 1.9rem;
    font-weight: 400;
    }

    .opt-container {
        display: flex; 
        flex-direction: row
    }
</style>