<template>
  <div class="contacts">
    <div class="all-contact"> 
        <div class="contact-item" v-for="message in friendsOnly()" v-bind:key="message.id">
         <router-link :to="{ name: 'chat', params: { name:message.CreatedByUserId } }">
            <div class="contact-image">
          <img :src="message.img">
          </div>
          <span class="name">{{message.CreatedByUserName}}</span>
          </router-link>
      </div>

    </div>
  </div>
</template>

<style>
a:hover{
  text-decoration: unset;
}
.all-contact{
  display:flex;
  flex-direction: row;
  margin-top: 100px;
}
.contact-item{
  flex-grow: 3;
}
.all-contact .contact-image{
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: solid 5px #fcfafa;
    border-radius: 50%;
    margin: auto;
    box-shadow: 6px 8px 0px 0px #efebeb;
}
.all-contact .name{
  font-size: 25px;
  color:black;
  display: block;
  text-align: center;
  margin-top: 10px;
}
.all-contact a:hover .name{
  font-size: 35px;
  color:gray;

}


</style>


<script>
import contactsMixins from './../mixins/contactsMixins'

export default {
  name: 'chat',
  data() {
    return {
      their_name: this.$route.params.name
    }
  },
  mixins:[contactsMixins]

}
</script>