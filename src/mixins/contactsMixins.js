
export default {
    data() {
      return {
        messages: [{
            id: 1,
            img:'.././src/assets/img1.jpg',
            MessageText: 'hellO i need support !!',
            CreatedDate: '01/17/2016 08:44',
            CreatedByUserId: 8889,
            CreatedByUserName: 'nora',
            ToUserId: 1111,
          },
          {
            id: 2,
            img:'.././src/assets/img2.jpg',            
            MessageText: 'hello i am nada,can i help you ?',
            CreatedDate: '01/17/2016 09:44',
            CreatedByUserId: 1111,
            CreatedByUserName: 'nada',
            ToUserId: 8889,            
          },
          {
            id: 3,
            img:'.././src/assets/img3.jpg',            
            MessageText: 'i need help too my network is very slow',
            CreatedDate: '01/18/2016 08:44',
            CreatedByUserId: 45478,
            CreatedByUserName: 'shery',
            ToUserId: 1111,            
            
          },
          {
            id: 4,
            img:'.././src/assets/img1.jpg',            
            MessageText: 'i have problem with my ID number',
            CreatedDate: '01/19/2016 09:44',
            CreatedByUserId: 8889,
            CreatedByUserName: 'nora',
            ToUserId: 1111,
            
          }, {
            id: 5,
            img:'.././src/assets/img2.jpg',            
            MessageText: 'hello i am nada , can i help you ?',
            CreatedDate: '01/20/2016 09:44',
            CreatedByUserId: 1111,
            CreatedByUserName: 'nada',
            ToUserId: 45478,            
            
          },
          {
            id: 6,
            img:'.././src/assets/img2.jpg',            
            MessageText: 'Hi nada please call me when you have time',
            CreatedDate: '01/19/2016 09:44',
            CreatedByUserId: 774,
            CreatedByUserName: 'sarah',
            ToUserId: 1111,
            
          }, {
            id: 7,
            img:'.././src/assets/img2.jpg',            
            MessageText: 'Hi sara, give me 2 min',
            CreatedDate: '01/20/2016 09:44',
            CreatedByUserId: 1111,
            CreatedByUserName: 'nada',
            ToUserId: 774,            
            
          },
        ],
  
      }
    },
    methods: {
      friendsOnly: function(){
        return this.messages.filter(a => a.CreatedByUserId != 1111).
        filter((item, index, self) =>
        index === self.findIndex((t) => (
          t.CreatedByUserId === item.CreatedByUserId
        )));            
           
       },
       myMessages:function(id){
         console.log(this.messages);
          return this.messages.filter(a => (a.CreatedByUserId == 1111 && a.ToUserId == id ) || 
          (a.CreatedByUserId == id  && a.ToUserId == 1111));        
        }
    },
    computed:{
    //  friendsOnly: function(){
    //   return this.messages.filter(a => a.CreatedByUserId != 1111).
    //   filter((item, index, self) =>
    //   index === self.findIndex((t) => (
    //     t.CreatedByUserId === item.CreatedByUserId
    //   )));            
         
    //  },
    //  myMessages:function(){
    //     return this.messages.filter(a => (a.CreatedByUserId == 1111 && a.ToUserId == this.$route.params.name ) || 
    //     (a.CreatedByUserId == this.$route.params.name  && a.ToUserId == 1111));        
    //   }
    },
    watch :{
      messages: function(val){
        this.messages = val;
         console.log(val);
      } 
    }

  }