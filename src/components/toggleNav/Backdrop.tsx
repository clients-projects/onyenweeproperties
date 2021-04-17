import { useEffect } from "react"
import { showNavBar } from "./ShowNavBar"

const Backdrop = (props: any) => {
   useEffect(() => {
       showNavBar(
           'sidebar-toggle',
           'nav-bar',
           'bodyId',
           'sidebar',
           'header-body',
           'header-logo',
           'backdrop'
       )
   }, [])

    return (
        <div className='backdrop' id='backdrop' onClick={handleBackdrop}>
            {props.children}
        </div>
    )
}

export default Backdrop
