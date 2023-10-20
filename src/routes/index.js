import LayoutDefault from "../layouts/LayoutDefault";
import Answer from "../pages/answers";
import Home from "../pages/home";
import Logout from "../pages/logout";
import Topic from "../pages/topic";
import Quiz from "../pages/quiz";
import Login from "../pages/auth/login";
import AuthMiddleware from "../middleware/callAPI"
import Error404 from "../pages/notFoundPage/404"
import DetailAnswer from "../pages/detailAnswers";
import Register from "../pages/auth/register";
import ReqLogin from "../middleware/reqLogin";
export const routes = [
  {
    path: "/",
    element: <AuthMiddleware> 
                <LayoutDefault/>,
              </AuthMiddleware>,
    children: [
      {
        index: true,
        element:<ReqLogin>
                  <Home />
                </ReqLogin> 
        
      },
      {
        path: "answers",
        element:<ReqLogin>
                  <Answer />
                </ReqLogin>
                  
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
        element: 
                <ReqLogin>
                  <DetailAnswer />
                </ReqLogin>
        
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