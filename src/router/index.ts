import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import LandingPage from "../controllers/LandingPage.vue"
import Listing from "../controllers/Listing.vue"
import Detail from "../controllers/Detail.vue"
import About from "../controllers/About.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/pesquisa",
    name: "Listing",
    component: Listing
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/dados/sites/:filterOption",
    name: "ListingBySite",
    component: Listing,
    props: {
      category: "sites"
    }
  },
  {
    path: "/dados/organizacoes/:filterOption",
    name: "ListingByOrganization",
    component: Listing,
    props: {
      category: "organizations"
    }
  },
  {
    path: "/dados/tags/:filterOption",
    name: "ListingByTag",
    component: Listing,
    props: {
      category: "tags"
    }
  },
  {
    path: "/dados/:dataset_id",
    name: "Detail",
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
