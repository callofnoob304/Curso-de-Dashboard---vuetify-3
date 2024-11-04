<template>
  <v-app theme="dark">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Inicio</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

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
        <v-menu>
          <template #activator="{props}">
            <v-btn v-bind="props" icon class="mr-2">
              <v-badge dot color="info">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card min-width="200px">
            <v-card-title>Mensagens não lidas</v-card-title>
            <v-divider></v-divider>
            <v-list :lines="false" density="compact" nav>
              <v-list-item append-icon="mdi-email-open">
                <v-list-item-title>Mensagens de teste 1</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item append-icon="mdi-email-open">
                <v-list-item-title>Mensagens de teste 2</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item append-icon="mdi-email-open">
                <v-list-item-title>Mensagens de teste 3</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-menu>
          <template #activator="{props}">
            <v-avatar v-bind="props">
              <v-img 
              cover
              src="https://thumbs.dreamstime.com/b/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"
              ></v-img>
            </v-avatar>
          </template>
          
          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-heart-outline">
                <v-list-item-title>Meus favoritos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="mb-6" v-ripple>Dashboard</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Últimos usuários</v-card-title>

            <v-card-title>
              <v-btn variant="tonal" size="small" @click="dialog = true" :ripple="false">Adicionar usuário</v-btn>

              <v-dialog 
              v-model="dialog"
              width="600px"
              persistent
              >
                <v-card>
                  <v-card-title>Adiconar usuário</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field label="Nome" variant="outlined"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field 
                        label="Email" 
                        variant="outlined"
                        :rules="emailRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    
                    <v-select 
                    label="Cargo"
                    variant="outlined"
                    :items="['Admin', 'Gerente', 'Convidado']"
                    ></v-select>
                  </v-card-text>

                  <v-card-actions class="text-end">
                    <v-btn variant="tonal" color="error" @click="dialog = false">Cancelar</v-btn>
                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>

          <v-table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano</td>
                <td>Fulano@gmail.com</td>
                <td>
                  <v-chip color="primary" variant="outlined" size="small">Admin</v-chip>
                </td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Ciclano</td>
                <td>Ciclano@gmail.com</td>
                <td>
                  <v-chip color="secondary" variant="outlined" size="small">Gerente</v-chip>
                </td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Beltrano</td>
                <td>Beltrano@hotmail.com</td>
                <td>
                  <v-chip color="warning" variant="outlined" size="small">Convidado</v-chip>
                </td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img
              class="align-end text-white"
              max-height="204"
              src="https://images.tcdn.com.br/img/img_prod/1132945/arranjo_de_orquidea_rosa_vaso_de_ceramica_preto_zigzag_6025_2_867ed999e85df5bcfbcfb87d61c9cc1c.jpg"
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
      dialog: false,
      emailRules: [
        value => {
          if (value) return true;

          return 'O email é obrigatório';
        },
        value => {
          if (value.includes('@')) return true

          return 'Email inválido';
        }
      ]
    }
  },
}
</script>
