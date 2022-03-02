const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        search: '',
        searchIndex:  0,
        inputText: '',
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/01.svg',
                visible: true,
                active: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/02.svg',
                visible: true,
                active: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/03.svg',
                visible: true,
                active: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/04.svg',
                visible: true,
                active: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        activeChatFn: function ( i ) {
        this.currentIndex = i;
        },
        
        sendInputText: function (i) {
            if(this.inputText.split(" ").join("") !== '') {
                this.contacts[i].messages.push( 
                    {   
                    date: '02/03/2022 03:34:00',
                    text: this.inputText,
                    status: 'sent',
                    } 
                )
            }
            this.inputText = ''

            // PERCHE' NON VA!?!?
            // setTimeout( fucntion ( i ) {
            //     this.sendReply( i )
            // } , 1000)

            setTimeout( () => {
            this.sendReply( i ) ;
            }, 1000);
        },

        sendReply: function ( i ) {
            this.contacts[i].messages.push( 
                {   
                date: '02/03/2022 03:34:00',
                text: 'Ok',
                status: 'received',
                } 
            )
        }

    
        // Esempio: function ( i ) {
        //     this.toDos.splice(i,1)
        // },

    },

    // computed: {
    //     filteredList() {
    //       return this.postList.filter(post => {
    //         return post.title.toLowerCase().includes(this.search.toLowerCase())
    //       })
    //     }
    //   }
    // mounted() {
    //     this.startAutoplay();
    // },
})