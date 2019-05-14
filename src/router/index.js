import Vue from 'vue'
import VueRouter from 'vue-router'
import Styleguide from '@/pages/styleguide/styleguide'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')
const AboutUs = () => import('@/pages/about-us/about-us')
const Treatments = () => import('@/pages/treatments/treatments')
const NewPatients = () => import('@/pages/new-patients/new-patients')
const HalvorsenDifference = () => import('@/pages/halvorsen-difference/halvorsen-difference')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: false,
      list: true,
      meta: [
        {
          path: '/#welcome',
          name: 'Welcome',
          anchor: 'welcome'
        },
        {
          path: '/#doctor',
          name: 'About The Doctor',
          anchor: 'doctor'
        },
        {
          path: '/#treatments',
          name: 'Treatments',
          anchor: 'treatments'
        },
        {
          path: '/#facebook',
          name: 'Facebook',
          anchor: 'facebook'
        },
        {
          path: '/#testimonials',
          name: 'Testimonials',
          anchor: 'testimonials'
        }
      ],
      component: Home
    },
    {
      path: '/about-us',
      name: 'about us',
      navigation: true,
      list: true,
      meta: [
        {
          path: '/about-us#doctor',
          name: 'Meet Dr. Halvorsen',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
          anchor: 'doctor',
          background: null,
          icon: null
        },
        {
          path: '/about-us#team',
          name: 'Meet the Team',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
          anchor: 'team',
          background: null,
          icon: null
        },
        {
          path: '/about-us#gallery',
          name: 'In the Community',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
          anchor: 'gallery',
          background: null,
          icon: null
        },
        {
          path: '/about-us#facebook',
          name: 'Facebook',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
          anchor: 'facebook',
          background: null,
          icon: null
        },
        {
          path: '/about-us#map',
          name: 'Map & Direction',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
          anchor: 'map',
          background: 'https://d2h72j3eibsl5m.cloudfront.net/Home_MapBG.jpg',
          icon: 'Location'
        }
      ],
      component: AboutUs
    },
    {
      path: '/treatments',
      name: 'treatments',
      navigation: true,
      list: true,
      meta: [
        {
          path: '/treatments#invisalign',
          name: 'Invisalign',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'invisalign',
          background: null,
          icon: null
        },
        {
          path: '/treatments#braces',
          name: 'Braces',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'braces',
          background: null,
          icon: null
        },
        {
          path: '/treatments#early',
          name: 'Early Intervention',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'early',
          background: null,
          icon: null
        },
        {
          path: '/treatments#adult',
          name: 'Adult Treatment',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'adult',
          background: null,
          icon: null
        },
        {
          path: '/treatments#life',
          name: 'Life with Braces',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'life',
          background: null,
          icon: null
        },
        {
          path: '/treatments#faq',
          name: 'FAQ',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide4.jpg',
          anchor: 'faq',
          background: null,
          icon: null
        }
      ],
      component: Treatments
    },
    {
      path: '/new-patients',
      name: 'new patients',
      navigation: true,
      list: true,
      meta: [
        {
          path: '/new-patients#first',
          name: 'First Appointment',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/NewPatients_Hero.jpg',
          anchor: 'first',
          background: null,
          icon: null
        },
        {
          path: '/new-patients#financial',
          name: 'Financial Info',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/NewPatients_Hero.jpg',
          anchor: 'financial',
          background: null,
          icon: null
        },
        {
          path: '/new-patients#consultation',
          name: 'Free Consultation',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/NewPatients_Hero.jpg',
          anchor: 'consultation',
          background: null,
          icon: null
        },
        {
          path: '/new-patients#contact',
          name: 'Contact',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/NewPatients_Hero.jpg',
          anchor: 'contact',
          background: null,
          icon: null
        }
      ],
      component: NewPatients
    },
    {
      path: '/halvorsen-difference',
      name: 'halvorsen difference',
      navigation: true,
      list: true,
      meta: [
        {
          path: '/halvorsen-difference#apart',
          name: 'What Sets Us Apart',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide3.jpg',
          anchor: 'apart',
          background: null,
          icon: null
        },
        {
          path: '/halvorsen-difference#reviews',
          name: 'Reviews',
          image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide3.jpg',
          anchor: 'reviews',
          background: null,
          icon: null
        }
        // {
        //   path: '/halvorsen-difference#before',
        //   name: 'Before and Afters',
        //   image: 'https://d2h72j3eibsl5m.cloudfront.net/Comm_Slide1.jpg',
        //   anchor: 'before',
        //   background: null,
        //   icon: null
        // }
      ],
      component: HalvorsenDifference
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      list: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      list: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
