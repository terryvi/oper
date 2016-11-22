'use strict'

var Vue = require('vue');

var VueRouter = require('vue-router');


Vue.use(VueRouter);

var VueResource = require('vue-resource'); 
Vue.use(VueResource); 

var router = new VueRouter();

var APP = Vue.extend({});

var home = require('./modules/home/index.vue');

router.map({
    '/': {
        component: home
    }
});


router.redirect({ 
    '*': '/'
});

router.start(APP, '#app');