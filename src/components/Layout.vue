<template lang="pug">
v-layout(class="fill-height")
    v-app-bar(class='app-header-svi')
        template(v-slot:prepend)
            v-app-bar-nav-icon(@click.stop="drawer = !drawer")
        v-app-bar-title
            b Venta Interna
        v-spacer
        v-toolbar-items
            v-menu(v-model='menu' :close-on-content-click='false' location='end')
                template(v-slot:activator='{ props }')
                    v-btn(height='auto' v-bind='props')
                        v-icon.hidden-md-and-up mdi-account
                        v-row.hidden-sm-and-down
                            v-col(cols="12").pa-0
                                span
                                    | Jorge Gutiérrez
                            v-col(cols="12").pa-0
                                small(style='display: block;')
                                    | Forestal y Papelera Concepción
                v-card(min-width='150')
                    v-list
                        v-list-item(title='Jorge Gutiérrez' subtitle='Forestal y Papelera Concepción')
                    v-divider
                    v-card-actions
                        v-spacer
                        v-btn(color='primary' text='Salir' @click='menu = false' to='/')
    v-navigation-drawer(class='app-nav-svi prominent' v-model="drawer")
        v-list(:lines='false' nav='')
            v-list-item(v-for='(item, i) in items' :key='i' :to='item.to' :value='item' active-color='primary')
                template(v-slot:prepend='')
                    v-icon(:icon='item.icon' style="margin-inline-end: 16px;")
                v-list-item-title(v-text='item.text').text-uppercase
            v-divider
    v-main
        v-container(class='fluid')
            slot
</template>

<script>
    export default {
        name: 'Layout',
        data: () => ({
            drawer: false,
            group: null,
            items: [
                { text: 'Carro de Compra', icon: 'mdi-cart', to: '/venta' },
                { text: 'Stock Disponible', icon: 'mdi-store', to: '/stock' },
                { text: 'Historial de Compras', icon: 'mdi-history', to: '/history' },
            ],
            fav: true,
            menu: false,
            message: false,
            hints: true,
        }),
        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>

<style scoped>
    .app-header-svi {
        background-color: #498002;
        color: white;
    }

    .v-btn .v-icon {
        --v-icon-size-multiplier: 1.2;
    }
</style>