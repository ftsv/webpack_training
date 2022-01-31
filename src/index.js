import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo.png'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
import './styles/styles.css'

const post = new Post('Webpack post Title', WebpackLogo);

$('pre').html(post.toString())

console.log('Post to String', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
