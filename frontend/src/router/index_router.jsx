import { createBrowserRouter, redirect } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome.jsx";
import App from "../pages/App/App.jsx";
import OwnProfile from "../pages/OwnProfile/OwnProfile.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import NewPost from "../pages/NewPost/NewPost.jsx";
import OthersUserProfile from "../pages/OthersUserProfile/OthersUserProfile.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ShelterProfileFromUser from "../pages/ShelterProfileFromUser/ShelterProfileFromUser.jsx";
import PetCard from "../componentes/Petcard/PetCard.jsx";
import ViewPost from "../pages/ViewPost/ViewPost.jsx";
import SignUpShelter from "../pages/SignUpShelter/SignUpShelter.jsx";
import ChooseTypeUser from "../pages/ChooseTypeUser/ChooseTypeUser.jsx"
import NewPet from "../componentes/NewPet/NewPet.jsx";
import ShelterOwnProfile from "../pages/ShelterOwnProfile/ShelterOwnProfile.jsx"
import ListOfShelters from "../pages/ListOfShelters/ListOfShelters.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";


const router = createBrowserRouter([
    
    {
        path: '/app',
        element: <App/>,
        children: [
            {
                path: '/app',
                element: <Dashboard/>,
                loader: () => {
                    if (!localStorage.getItem('token')) {
                        return redirect('/')
                    } else {
                        return null
                    }
                }
            },
            {
                path: '/app/ownprofile',
                element: <OwnProfile/>
            },
            {
                path: '/app/newpost',
                element: <NewPost/>
            },
            {
                path: '/app/otherprofile',
                element: <OthersUserProfile/>
            },
            {

                path: '/app',
                element: <Dashboard/>
            },
            {
                path: '/app/shelter/:shelterId',
                element: <ShelterProfileFromUser/>
            },
            {
                path: '/app/petprofile/:petId',
                element: <PetCard/>
            },
            {
                path: '/app/viewpost/:postId',
                element: <ViewPost/>
            },
            {
                path: '/app/createpet',
                element: <NewPet/>
            },
            {
                path: '/app/listofshelters', 
                element: <ListOfShelters/>
            },
            {
                path: '/app/shelterownprofile/:shelterId',
                element: <ShelterOwnProfile/>
            },
            {
                path: '/app/aboutus',
                element: <AboutUs/>
            },
        ]
    }, 
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/chooseuser',
        element: <ChooseTypeUser/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/signups',
        element: <SignUpShelter/>
    }

    
])

export default router;

