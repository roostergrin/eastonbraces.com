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
      navigation: true,
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
          name: 'Check Us Out on Facebook',
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
      meta: [
        {
          path: '/about-us#doctor',
          name: 'Meet Dr. Halvorsen',
          anchor: 'doctor'
        },
        {
          path: '/about-us#team',
          name: 'Meet the Team',
          anchor: 'team'
        },
        {
          path: '/about-us#gallery',
          name: 'Community Involbement Gallery',
          anchor: 'gallery'
        },
        {
          path: '/about-us#map',
          name: 'Map & Direction',
          anchor: 'map'
        }
      ],
      component: AboutUs
    },
    {
      path: '/treatments',
      name: 'treatments',
      navigation: true,
      meta: [
        {
          path: '/treatments#invisalign',
          name: 'Invisalign/Clear Aligners',
          anchor: 'invisalign'
        },
        {
          path: '/treatments#braces',
          name: 'Braces',
          anchor: 'braces'
        },
        {
          path: '/treatments#early',
          name: 'Early Treatment',
          anchor: 'early'
        },
        {
          path: '/treatments#adult',
          name: 'Adult Treatment',
          anchor: 'adult'
        },
        {
          path: '/treatments#life',
          name: 'Life with Braces',
          anchor: 'life'
        },
        {
          path: '/treatments#faq',
          name: 'FAQ',
          anchor: 'faq'
        }
      ],
      component: Treatments
    },
    {
      path: '/new-patients',
      name: 'new patients',
      navigation: true,
      meta: [
        {
          path: '/new-patients#first',
          name: 'Your First Appointment',
          anchor: 'first'
        },
        {
          path: '/new-patients#financial',
          name: 'Financial Info',
          anchor: 'financial'
        },
        {
          path: '/new-patients#consultation',
          name: 'Schedule a Free Consultation',
          anchor: 'consultation'
        },
        {
          path: '/new-patients#contact',
          name: 'Contact Us',
          anchor: 'contact'
        }
      ],
      component: NewPatients
    },
    {
      path: '/halvorsen-difference',
      name: 'halvorsen difference',
      navigation: true,
      meta: [
        {
          path: '/halvorsen-difference#apart',
          name: 'What Sets Us Apart',
          anchor: 'apart'
        },
        {
          path: '/halvorsen-difference#reviews',
          name: 'Reviews',
          anchor: 'reviews'
        },
        {
          path: '/halvorsen-difference#before',
          name: 'Before and Afters',
          anchor: 'before'
        }
      ],
      component: HalvorsenDifference
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
