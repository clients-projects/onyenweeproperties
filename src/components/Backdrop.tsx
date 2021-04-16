const Backdrop = (props: any) => {
    const handleBackdrop = () => {
      const toggle = document.getElementById('sidebar-toggle'),
          nav = document.getElementById('nav-bar'),
          bodySelector = document.getElementById('bodyId'),
          sidebar = document.getElementById('sidebar'),
          header = document.getElementById('header-body')

      if (toggle && nav && bodySelector && sidebar && header) {
          toggle.addEventListener('click', () => {
              nav.classList.toggle('show')
              toggle.classList.toggle('bx-x')
              bodySelector.classList.toggle('bodyId')
              sidebar.classList.toggle('bodyId')
              sidebar.classList.toggle('toggleMenu')
              sidebar.classList.toggle('toggleColor')

          })
      }
    }

    return (
        <div className='backdrop' id='backdrop' onClick={handleBackdrop}>
            {props.children}
        </div>
    )
}

export default Backdrop
