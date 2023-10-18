import LayoutDefault from "../layouts/LayoutDefault";
import Answer from "../pages/answers";
import Home from "../pages/home";
import Logout from "../pages/logout";
import Topic from "../pages/topic";
import Quiz from "../pages/quiz";
import Login from "../pages/auth/login";
import AuthMiddleware from "../middleware/auth"
import Error404 from "../pages/notFoundPage/404"
import DetailAnswer from "../pages/detailAnswers";
import Register from "../pages/auth/register";
export const routes = [
  {
    path: "/",
    element: <AuthMiddleware> 
                <LayoutDefault/>,
              </AuthMiddleware>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "answers",
        element: <Answer />,
        children: [
          {
            
          }
        ]
      },
      {
        path: "topic",
        element: <Topic />,
        
      },
      
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "quiz/:topicId",
        element:<Quiz/>
      },
      {
        path: "detail/:id",
        element: <DetailAnswer />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  // Route 404
  {
    path: "*",
    element: <Error404 />
  }
];