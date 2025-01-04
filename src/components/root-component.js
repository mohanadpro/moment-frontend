
import {createBrowserRouter} from 'react-router-dom'
import { MainComponent } from './main-component';
import { SignInForm } from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
const router=createBrowserRouter([{
    path:'/',
    element:<MainComponent />,
    children:[
        {
            path:'signin',
            element:<SignInForm/>,
            
        },
        {
            path:'signup',
            element:<SignUpForm/>
        }
        // {
        //     path:'category',
        //     element:<CategoryView/>,
        //     children:[
        //         {   
        //             path:'add-category',
        //             element:<AddEditCategoy/>
        //         }]
        // },
        // {
        //     path:'cart',
        //     element:<CartView/>
        // },
        // {
        //     path:'order',
        //     element:<OrderView/>
        // }
    ]
}])

export default router;