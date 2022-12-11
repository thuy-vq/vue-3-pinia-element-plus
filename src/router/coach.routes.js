import {
  Layout,
  CoachDetail,
  CoachesList,
  CoachRegistation,
  ContactCoach,
  RequestsReceived,
} from "@/views/coaches";

export default {
  path: "/coach",
  component: Layout,
  children: [
    { path: '', redirect: '/coach/list' },
    { path: "list", component: CoachesList },
    {
      path: "/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistation },
    { path: "/requests", component: RequestsReceived },
  ],
};
