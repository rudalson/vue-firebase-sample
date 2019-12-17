<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="i in 9" :key="i">
        <v-card color="red">
          <v-card-title primary-title>
            현대레저
          </v-card-title>
          <v-card-text>
             이 그리드는 어플리케이션 컨텐츠의 레이아웃에 사용됩니다.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
