import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import BodyCard from './components/ui/BodyCard.vue'
import ThePagination from './components/ui/ThePagination.vue'
import ArticleBody from './components/ui/ArticleBody.vue'
import CommentsBody from './components/ui/CommentBody.vue'

const app = createApp(App)
app.use(router)

app.component('article-body', ArticleBody)
app.component('the-pagination', ThePagination)
app.component('comments-body', CommentsBody)
app.component('body-card', BodyCard)
app.mount('#app')


