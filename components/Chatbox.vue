<template>
  <v-container>
    <div>
      <!-- Login section -->
      <v-card v-if="!name" id="logincard">
        <p class="text-h3 text-center py-3 body-1">Join Chat</p>
        <label class="pl-4" for="username">Enter a Username</label>
        <br />
        <v-card-actions>
          <v-text-field
            class="mt-4"
            type="text"
            v-model="userName"
            placeholder="Username"
            @keyup.enter="updateUsername"
            outlined
          ></v-text-field>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            depressed
            color="primary"
            class="button"
            @click="updateUsername"
            >Join Chat</v-btn
          >
        </v-card-actions>
      </v-card>

      <div v-else class="message-body">
        <h1 class="mb-4 text-center text-h3">ChatBox</h1>
        <h4 class="my-4">Welcome {{ name }}!</h4>
        <div class="card">
          <div class="cardbody">
            <div
              v-for="message in messages"
              :key="message.time"
              class="grey lighten-3 my-4 pa-2"
            >
              <span class="mgtext text-uppercase">{{ message.username }}</span>
              <p class="message">{{ message.text }}</p>
              <p class="caption grey--text">
                {{ new Date(message.time).toDateString() }} ,
                {{
                  new Date(message.time).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="inputcard">
          <v-text-field
            outlined
            class="mt-4"
            v-model="showMessage"
            type="text"
            placeholder="Type..."
            @keyup.enter="sendMessage"
          ></v-text-field>
          <v-btn depressed color="primary" class="mx-4" @click="sendMessage"
            >Send</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      name: null,
      showMessage: '',
      messages: [],
    }
  },
  async mounted() {
    const messageRef = this.$fire.firestore.collection('newchat')
    try {
      await messageRef.orderBy('time').onSnapshot((snapshot) => {
        const changes = snapshot.docChanges()

        changes.forEach((change) => {
          console.log(change.doc.id, ' => ', change.doc.data())
          this.messages.push({
            time: change.doc.data().time,
            id: change.doc.id,
            text: change.doc.data().text,
            username: change.doc.data().username,
          })
        })
      })
    } catch (e) {
      console.log(e.message)
      //   return
    }
  },
  methods: {
    updateUsername() {
      this.name = this.userName
      this.userName = ''
    },
    async sendMessage() {
      const messageRef = this.$fire.firestore.collection('newchat')
      try {
        if (this.showMessage) {
          await messageRef.add({
            text: this.showMessage,
            username: this.name,
            time: new Date().getTime(),
          })
        }

        this.showMessage = ''
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>

<style scoped>
#logincard {
  width: 40%;
  margin: auto;
  margin-top: 100px;
}
.message-body {
  /* height: 80vh; */
  margin: auto;
}
.mgtext {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}

.card {
  width: 100%;
  min-height: 75vh;
  margin: auto;
}
.cardbody {
  min-height: 50vh;
  overflow-x: scroll;
}
.inputcard {
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 768px) {
  #logincard {
    width: 100%;
  }
}
</style>
