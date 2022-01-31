import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo.png'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
import './styles/styles.css'

const post = new Post('Webpack post Title', WebpackLogo);

console.log('Post to String', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
