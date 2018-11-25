
<template>
  <div name="chat">  
    <div class="chat-messages container">
      <div class="col-12 message-Item" v-for="message in myMessages($route.params.name)" v-bind:key="message.id">
        <div class="message" :class="{left:message.CreatedByUserId === MyId}">
          <span class="name">{{message.CreatedByUserName}}</span>
          <span class="date">{{message.CreatedDate}}</span>
          <span class="text">{{message.MessageText}}</span>
        </div>
      </div>
    </div>
    <div class="add-text container">
      <div class="input-group">
        <input type="text" v-model="textData" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" @click="addMessage()" type="button">Send</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import contactsMixins from './../mixins/contactsMixins'

  export default {
    name: 'chat',
    mixins:[contactsMixins],
    data() {
      return {
        to_id: this.$route.params.name,
        MyId: 1111,
        Myname: 'nada',
        textData: '',
      }
    },
    methods: {
      scrollToBottom() {
        var element = document.getElementsByClassName("chat-messages")[0];
        element.scrollTop = element.scrollHeight;
      },
      todayDate() {
        var currentdate = new Date();
        var datetime = (currentdate.getMonth() + 1) + "/" +
          currentdate.getDate() + "/" +
          currentdate.getFullYear() +" "+ 
          + currentdate.getHours() + ":" +
          currentdate.getMinutes() + ":" +
          currentdate.getSeconds();
        return datetime;
  
      },
      addMessage() {
        if (this.textData.length > 0) {
          let newMessaage = {
            id: this.MyId,
            img:'.././src/assets/img2.jpg',            
            MessageText: this.textData,
            CreatedDate: this.todayDate(),
            CreatedByUserId: this.MyId,
            CreatedByUserName: this.Myname,
            ToUserId:this.to_id,            

          }
          this.messages.push(newMessaage);
          this.textData = "";
          setTimeout(() => {
            this.scrollToBottom();
          }, 200);
        }
      }
    }
  }
</script>

<style>
  .chat-messages {
    margin-top: 30px;
    max-height: calc(100vh - 235px);
    overflow-y: scroll;
  }
  
  .chat-messages .message-Item .message {
    width: 50%;
    border: solid 1px #b6afaf;
    padding: 16px;
    border-radius: 9px;
    margin: 20px;
    background-color: #f5dce9;
    float: left;
    text-align: left;
  }
  
  .chat-messages .message-Item .message.left {
    float: right;
    text-align: left;
    background-color: #b3f3b8;
  }
  
  .chat-messages .message-Item .message .name {
    text-align: left;
    font-size: 18px;
    color: #898181;
  }
  
  .chat-messages .message-Item .message .date {
    float: right;
    text-align: right;
    color: gray;
  }
  
  .chat-messages .message-Item .message .text {
    display: block;
    word-wrap: break-word;
  }
  
   ::-webkit-scrollbar {
    width: 10px;
  }
  
   ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
   ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  .add-text {
    margin-top: 43px;
  }
  
  @media only screen and (max-width: 450px) {
    .chat-messages .message-Item .message {
      width: 88%;
      margin: 20px 0px;
    }
    .chat-messages .message-Item .message .date {
      float: none;
      text-align: right;
      margin-left: 9px;
    }
  }
</style>
