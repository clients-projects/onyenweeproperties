const Backdrop = (props: any) => {
    const handleBackdrop = () => {
        const toggle = document.getElementById('sidebar-toggle'),
            nav = document.getElementById('nav-bar'),
            bodySelector = document.getElementById('bodyId'),
            sidebar = document.getElementById('sidebar'),
            header = document.getElementById('header-body')

        if (toggle && nav && bodySelector && sidebar && header) {
            toggle.addEventListener('click', () => {
                nav.classList.remove('show')
                toggle.classList.remove('bx-x')
                bodySelector.classList.remove('bodyId')
                sidebar.classList.remove('bodyId')
                sidebar.classList.remove('toggleMenu')
                sidebar.classList.remove('toggleColor')
            })

            console.log('toggle backdrop')
        }
    }

    return (
        <div className='backdrop' id='backdrop' onClick={handleBackdrop}>
            {props.children}
        </div>
    )
}

export default Backdrop
