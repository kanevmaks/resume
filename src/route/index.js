// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header ={
  name: {
    firstname: 'Maksim' ,
    lastname: 'Kanevskiy' ,
  },
  position: 'Junior Fullstack JS Developer' ,
  money: '600$ в місяц' ,
  address: 'Ukraine, Kremenchuk',
} 

var footer = {
  social: {
    email: {
      text: 'makskanevski12@gmail.com' ,
      href: 'mailto:makskanevski12@gmail.com'
    },

    phone: {
      text: '+380974747175' ,
      href: 'tel:+380974747175' ,
    },

    linkedin: {
      text: 'https://www.linkedin.com/in/dmaksim-test',
      href:'LinkedIn' ,
    } ,
},
    }

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page:{
    title: ' Resume | Summary ' ,
    },

    header,

    main: {
      summary: {
        title:'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.' ,
      } ,
  
      experience: {
        title: 'Other experience',
        text:' Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing bysimple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.' ,
      } ,
    },

footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

      main: {
        educations: [
          {
            name: 'Гімназія №18', 
            isEnd: true,
          },
          {
            name: 'IT-BRAINS',
            isEnd: false,
          },
        ],

        certificates: [
          {
            name: 'Certificates one',
            id: '1234',
          },
          {
            name: 'Certificates two',
            id: '3456',
          },
          {
            name: 'Certificates three',
            id: '6789',
          },
        ],
        
      },

      

    footer,
  })
})


router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page:{
      title: ' Resume | Skills' ,
    },

    header,
    
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },

        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },

        {
          name: 'Handlebars',
          point: 5,
          isTop: false,
        },

        {
          name: 'Git & Terminal',
          point: 7,
        },

        {
          name: 'React.js',
          point: 0,
        },
        
        {
          name:'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Game',
          isMain: true,
        },
        {
          name: 'Cook',
          isMain: false,
        },
        {
          name: 'Walk',
          isMain: true,
        },
      ],
    },

footer,
  })
})


router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page:{
    title: ' Resume | Work ' ,
    },

    header,

    main: {
      works: [{
        position:'Junior Fullstack Developer',
        company: {
          name:'IT-BRAINS',
          url: 'https://it-brains.com.ua/',
        },

        duration: {
          from: '10.01.2022',
          to: null,
        },

        projectAmount: 3,

        projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua/',
              about:
                'Airbnb competitor...Airbnb competitor  .',

              stackAmount: 4,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awardsAmount: 4,
              awards: [
                {
                  name: 'Background verification.......',
                },
                {
                  name: 'Preparing SEO',
                },
              ],
            },
          ],
      }]
    },

footer,
  })
})




// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
