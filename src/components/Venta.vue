<template lang="pug">
v-card(class="card-shadow")
    v-card-title
        v-icon mdi-cart
        | Carro de Compra
    v-divider
    v-card-text
        v-table
            thead
                tr(style='background-color: #ddd')
                    th(:colspan='2').text-center
                        | Producto
                tr(style='background-color: #ddd')
                    th.text-center
                        | Tipo
                    th.text-center(class='fixed-column-150')
                        | Detalle
                    th.text-center
                        | Cantidad Máxima
                    th.text-center
                        | Precio Producto
                    th.text-center(class='fixed-column-200')
                        | Unidades
                    th.text-center(class='fixed-column-150')
                        | Sub Total
            tbody
                tr(v-for='item in productos' :key='item.name')
                    td.text-center {{ item.tipo }}
                    td {{ item.name }}
                    td.text-right {{ this.addThousandPoint(item.cant_max) }}
                    td.text-right ${{ this.addThousandPoint(item.precio) }}
                    td.text-center
                        v-text-field(class='inputCantidad' variant='outlined' hide-details=true density='compact' v-model='item.unidades' placeholder='0' type='number' :min="0" :max="item.cant_max")
                            template(v-slot:append='')
                                v-btn(color="success" size="x-small" icon="mdi-plus" v-on:click="item.unidades += 1")
                            template(v-slot:prepend='')
                                v-btn(color="error" size="x-small" icon="mdi-minus" v-on:click="item.unidades -= 1")
                    td.text-right ${{ this.addThousandPoint(item.precio * item.unidades) }}
    v-divider
    v-card-actions.pa-8
        v-spacer
        b TOTAL A PAGAR: ${{calculoTotal}}
    v-divider
    v-card-actions
        v-spacer
        v-dialog(v-model='dialog' width='500')
            template(v-slot:activator='{ on, attrs }')
                v-btn(color="success" variant="flat" class="ml-16" v-bind='attrs' v-on='on' @click='dialog = true')
                    | COMPRAR
            v-card
                v-card-title.text-h5.grey.lighten-2
                    | Resumen Compra
                v-divider
                v-card-text
                    | Resumen de la compra
                v-divider
                v-card-actions
                    v-spacer
                    v-btn(color='success' variant="flat" text='' @click='dialog = false')
                        | COMPRAR
</template>

<script>
    export default {
        name: 'Venta',
        data () {
            return {
                total: 0,
                dialog: false,
                productos: [
                    {
                        tipo: 'PH',
                        name: 'PH DOBLE HOJA 22 - 27 M DE 48 ROLLOS POR MANGA',
                        cant_max: 4,
                        precio: 6300,
                        unidades: 0,
                    },
                    {
                        tipo: 'PH',
                        name: 'PH DOBLE HOJA 22 - 25 M DE 48 ROLLOS POR MANGA',
                        cant_max: 6,
                        precio: 10150,
                        unidades: 0,
                    },
                ],
            }
        },
        methods: {
            addThousandPoint(number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            },
        },
        computed: {
            calculoTotal () {
                let total = 0
                for (let producto of this.productos) {
                    total += producto.unidades * producto.precio
                }
                return this.addThousandPoint(total)
            }
        },
    }
</script>

<style scoped>
 .fixed-column-200 {
    min-width: 200px;
 }
 .fixed-column-150 {
    min-width: 150px;
 }
.inputCantidad :deep(input[type="number"]) {
    -moz-appearance: textfield;
    width: 44px;
    height: 44px;
    padding: 14px;
    margin: 0 2px;
    border-radius: 4px;
    text-align: center;
}
.inputCantidad :deep(input::-webkit-outer-spin-button),
.inputCantidad :deep(input::-webkit-inner-spin-button) {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>