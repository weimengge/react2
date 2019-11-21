import Home from '../pages/Home'
import Login from '../pages/Login'
import Homepage from '../pages/Home/Homepage'
import Cart from '../pages/Home/Cart'
import Person from '../pages/Home/Person'
import Hot from '../pages/Home/Homepage/Hot'
import Recommend from '../pages/Home/Homepage/Recommend'
const routes = [
    {   
        path: "/login",
        component: Login
    },
    {
        path: "/",
        component: Home,
        children: [
            {
                path: "/home/homepage",
                component: Homepage,
                children: [
                    {
                        path: "/home/homepage/hot",
                        component: Hot
                    },
                    {
                        path: "/home/homepage/recommend",
                        component: Recommend
                    },
                    {
                        from: "/home/homepage",
                        to: "/home/homepage/hot"
                    }
                ]
            },
            {
                path: "/home/cart",
                component: Cart,
                auth: true
            },
            {
                path: "/home/person",
                component: Person,
                auth: true
            },
            {
                from: "/",
                to: "/home/homepage"   
            }
        ]
    },
    {
        from: "/",
        to: "/"
    }
]
export default routes