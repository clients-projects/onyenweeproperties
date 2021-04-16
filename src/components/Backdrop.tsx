const Backdrop = (props: any) => {
    return (
        <div className='backdrop' id='backdrop'>
            {props.children}
        </div>
    )
}

export default Backdrop