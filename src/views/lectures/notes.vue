<template>
  <v-container fluid grid-list-md>
    <v-layout>
        <v-flex xs5>
            <v-text-field v-model="title" label="title"></v-text-field>
        </v-flex>
        <v-flex xs5>
            <v-text-field v-model="content" label="content"></v-text-field>
        </v-flex>
        <v-flex xs2>
            <v-btn color="success" @click="post">post</v-btn>
        </v-flex>
    </v-layout>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <template v-slot:item="props">
        <v-flex
          xs12
          sm6
          md4
          lg3
        >
          <v-card>
            <v-card-title><h4>{{ props.item.title }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                {{ props.item.content }}
            </v-card-text>
            <v-card-action>
                <v-spacer></v-spacer>
                <v-btn @click="put(props.item)">put</v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [],
    title: '',
    content: ''
  }),
  mounted () {
    this.items.push({
      title: '수양레저',
      content: '수양레저는 볼락 루어낚시와 감성돔 흘림낚시 포인트 제약을 해소하기 위해 모든 선외기에 전동윈치를 설치해 어떤 포인트에서든 돌 닷을 내리기만 하면 낚시가 가능합니다.'
    })
    this.items.push({
      title: '경신레저',
      content: '수상레져 자격증 1,2급 있으신분 한하여 1척당 1만원 할인하여드립니다. 출조시 자격증 지참확인후 할인하여 드립니다.'
    })
  },
  methods: {
    post () {
      this.items.push({
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
    },
    get () {

    },
    put () {

    },
    del () {

    }
  }
}
</script>
