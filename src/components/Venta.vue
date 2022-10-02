<template lang="pug">
v-card
    v-card-title
        v-icon mdi-cart
        | Carro de Compra
    v-divider
    v-card-text
        v-table
            thead
                tr
                    th.text-left
                        | Tipo Producto
                    th.text-left
                        | Detalle
                    th.text-right
                        | Cantidad Máxima
                    th.text-right
                        | Precio
                    th.text-right
                        | Unidades
            tbody
                tr(v-for='item in desserts' :key='item.name')
                    td {{ item.tipo }}
                    td {{ item.name }}
                    td.text-right {{ item.cant_max }}
                    td.text-right ${{ item.precio }}
                    td.text-right {{ item.unidades }}
</template>

<script>
    export default {
        name: 'Venta',
        data () {
            return {
                desserts: [
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
    }
</script>