const Backdrop = (props: any) => {
    const handleBackdrop = () => {
        const nav = document.getElementById('nav-bar')
        nav!.classList.toggle('show')
    }

    return (
        <div className='backdrop' id='backdrop' onClick={handleBackdrop}>
            {props.children}
        </div>
    )
}

export default Backdrop
