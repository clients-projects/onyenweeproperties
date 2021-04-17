export const showNavBar = (
    toggleId: string,
    navId: string,
    bodyId: string,
    sidebarId: string,
    headerId: string,
    logoId: string,
    backdropId: string
) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodySelector = document.getElementById(bodyId),
        sidebar = document.getElementById(sidebarId),
        header = document.getElementById(headerId),
        logo = document.getElementById(logoId),
        getBackdrop = document.getElementById(backdropId)

    if (toggle && nav && bodySelector && sidebar && header) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
            bodySelector.classList.toggle('bodyId')
            sidebar.classList.toggle('bodyId')
            sidebar.classList.toggle('toggleMenu')
            sidebar.classList.toggle('toggleColor')
            logo!.classList.toggle('toggleLogo')
            getBackdrop!.classList.toggle('toggleBackdrop')

            console.log('nav bar items', toggle, nav, sidebar)
        })
    }
    
    console.log("nav bar")
}
