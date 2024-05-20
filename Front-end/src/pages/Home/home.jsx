


import useUserContext from '../../hooks/useUserContext'

import Sidebar from '../../components/Sidebar'
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import EventosProximos from '../../components/EventosProximos';
import DestaquesForum from '../../components/DestaquesForum';
import MenuExplorar from '../../components/MenuExplorar';


const Home = ()=>{
    const {user} = useUserContext();
   

    console.log(user)
    return(
        <div className='w-full min-h-screen overflow-y-hidden flex bg-[#fbfbfb] '>
        <Sidebar/>
        <HeaderHome>
            <img src="images/img-logo-pree.png" className='mp:ml-28 mp:w-32 mm:ml-28 sm:ml-40 md:ml-52 lg:ml-28  w-40' alt="" />
            <img className='mp:w-7 object-cover cursor-pointer mp:mr-8 mm:mr-0 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
        </HeaderHome>
        <div id='container-home' className='lg:grid lg:grid-cols-4'>
            <div className='col-span-3'>
                <EventosProximos/>
            </div>
            <div className='col-span-3'>
                <DestaquesForum/>
            </div>
            <div className='col-span-1'>
                <MenuExplorar/>
            </div>
        </div>
           
        </div>
       
    )
}

export default Home