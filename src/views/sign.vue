<template>
  <v-container grid-list-md>
    <v-layout align-center justify-center>
      <v-flex xs12 sm5 class="hidden-xs-only">
        <v-img src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder-vfl2oGV4v.png"/>
      </v-flex>
      <v-flex xs12 sm5>
        <sign-in v-if="type" @changeType="type = !type"></sign-in>
        <sign-up v-else @changeType="type = !type"></sign-up>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignIn from '@/components/auth/signIn'
import SignUp from '@/components/auth/signUp'

export default {
  components: {
    SignIn, SignUp
  },
  data () {
    return {
      type: true,
      email: '',
      password: ''
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    async signInWithEmail () {
      await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    },
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    }
  }
}
</script>
