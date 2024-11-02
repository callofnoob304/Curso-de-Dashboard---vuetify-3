<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Users</v-list-item>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item 
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Clientes"
            ></v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Faturamento</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Meu App</v-app-bar-title>
      
      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
          <v-avatar>
            <v-img 
            cover
            src="https://thumbs.dreamstime.com/b/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"
            ></v-img>
          </v-avatar>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="">Dashboard</h1>

        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-white"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" 
              cover
              >
                <v-card-title>
                  Top 10 flores do mundo
                </v-card-title>
              </v-img>
              <v-card-subtitle
              class="pt-3"
              >
                Holanda
              </v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus doloremque quia quam repellat officia in beatae, quasi dolore odio. Debitis sint sed ea unde? Quos, iste omnis. Dignissimos, repudiandae!</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                variant="outlined"
                color="primary"
                >
                  Ver mais
                </v-btn>
                <v-btn
                variant="tonal"
                color="primary"
                >
                  Comprar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-white"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" 
              cover
              >
                <v-card-title>
                  Top 10 flores do mundo
                </v-card-title>
              </v-img>
              <v-card-subtitle
              class="pt-3"
              >
                Holanda
              </v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus doloremque quia quam repellat officia in beatae, quasi dolore odio. Debitis sint sed ea unde? Quos, iste omnis. Dignissimos, repudiandae!</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                variant="outlined"
                color="primary"
                >
                  Ver mais
                </v-btn>
                <v-btn
                variant="tonal"
                color="primary"
                >
                  Comprar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-white"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" 
              cover
              >
                <v-card-title>
                  Top 10 flores do mundo
                </v-card-title>
              </v-img>
              <v-card-subtitle
              class="pt-3"
              >
                Holanda
              </v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus doloremque quia quam repellat officia in beatae, quasi dolore odio. Debitis sint sed ea unde? Quos, iste omnis. Dignissimos, repudiandae!</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                variant="outlined"
                color="primary"
                >
                  Ver mais
                </v-btn>
                <v-btn
                variant="tonal"
                color="primary"
                >
                  Comprar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-white"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" 
              cover
              >
                <v-card-title>
                  Top 10 flores do mundo
                </v-card-title>
              </v-img>
              <v-card-subtitle
              class="pt-3"
              >
                Holanda
              </v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus doloremque quia quam repellat officia in beatae, quasi dolore odio. Debitis sint sed ea unde? Quos, iste omnis. Dignissimos, repudiandae!</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                variant="outlined"
                color="primary"
                >
                  Ver mais
                </v-btn>
                <v-btn
                variant="tonal"
                color="primary"
                >
                  Comprar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
    }
  },
}
</script>
