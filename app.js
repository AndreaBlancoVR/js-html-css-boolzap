const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 1,
        search: '',
        searchIndex:  0,
        messageHoverIndex: false,
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
                        status: 'sent',
                        messageWindow: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        messageWindow: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        messageWindow: false,
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
                        status: 'sent',
                        messageWindow: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        messageWindow: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        messageWindow: false,
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
                        status: 'received',
                        messageWindow: false,

                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        messageWindow: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        messageWindow: false,
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
                        status: 'sent',
                        messageWindow: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        messageWindow: false,
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
                const newMessage = this.createMessage( this.inputText, 'sent');
                this.contacts[i].messages.push( newMessage )

                // const d = new Date();
                // this.contacts[i].messages.push( 
                //     {   
                //     date: `${ d. getDate() }/${ d. getMonth() }/${ d. getFullYear() } ${ d. getHours() }:${ d. getMinutes() }:${ d. getSeconds() }`,
                //     text: this.inputText,
                //     status: 'sent',
                //     } 
                // )
            }
            this.inputText = ''

            // PERCHE' NON VA!?!? Ok ora so perchè non va
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
                messageWindow: false,
                } 
            )
        },

        createMessage: function(text , status) {
            const d = new Date ();

            const newMessage = {
                date: `${ d. getDate() }/${ d. getMonth()+1 }/${ d. getFullYear() } ${ d. getHours() }:${ d. getMinutes() }:${ d. getSeconds() }`,
                text: text,
                status: status,
                messageWindow: false,
            }

            return newMessage
        },

        getHours: function ( date ) {
            const ora = date.split(' ')[1];
            // return ora.splice(6, 8);  NON RIESCO A FARLO FUNZIONARE :\
            return ora.substring(0,5);
        },

        // messageHoverFn: function () {
        //     // console.log(this.messageHoverIndex)
        //     const toggle = this.messageHoverIndex
        //     this.messageHoverIndex = !toggle 
        //     // console.log(this.messageHoverIndex)
        // },

        messageWindowFn: function (el) {
            // const messageWindow = this.el.messageWindow
            // this.el.messageWindow = !messageWindow
            console.log(el.messageWindow)
            el.messageWindow = !el.messageWindow
            console.log(el.messageWindow)
        },
        // Esempio: function ( i ) {
        //     this.toDos.splice(i,1)
        // },

        deleteMessageFn: function (el, i) {
            this.contacts[this.currentIndex].messages.splice(i, 1);
        },

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