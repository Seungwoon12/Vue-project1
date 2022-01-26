import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
  {
    path: "/detail/:id(\\d+)", // id 파라미터값으로 숫자만 허용
    component: Detail,
    children: [
      {
        path: "author", // children은 상대경로로 작성
        component: Author
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anything(.*)", // 모든 문자가 들어오면 여기로 보내주세여. 같은 router에 걸리면 위에 있는걸 적용시킴. 그래서 /list는 정상 작동
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 