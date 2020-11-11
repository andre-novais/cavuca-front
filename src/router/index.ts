import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Listing from "../views/Listing.vue";
import Detail from "../views/Detail.vue";
import Sections from "../views/Sections.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Listing",
    component: Listing
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/datasets/sites",
    name: "Sites",
    component: Sections,
    props: {
      category: "sites"
    }
  },
  {
    path: "/datasets/sites/:filterOption",
    name: "ListingBySite",
    component: Listing,
    props: {
      category: "sites"
    }
  },
  {
    path: "/datasets/groups",
    name: "Group",
    component: Sections,
    props: {
      category: "groups"
    }
  },
  {
    path: "/datasets/groups/:filterOption",
    name: "ListingByGroup",
    component: Listing,
    props: {
      category: "groups"
    }
  },
  {
    path: "/datasets/organizations",
    name: "Organization",
    component: Sections,
    props: {
      category: "organizations"
    }
  },
  {
    path: "/datasets/organizations/:filterOption",
    name: "ListingByOrganization",
    component: Listing,
    props: {
      category: "organizations"
    }
  },
  {
    path: "/datasets/tags",
    name: "Tag",
    component: Sections,
    props: {
      category: "tags"
    }
  },
  {
    path: "/datasets/tags/:filterOption",
    name: "ListingByTag",
    component: Listing,
    props: {
      category: "tags"
    }
  },
  {
    path: "/datasets/:dataset_id",
    name: "Detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
