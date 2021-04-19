
const Backdrop = (props: any) => {
   
    return (
        <div
            className='backdrop'
            id='backdrop'
            onClick={props.handleClose}
        >
            
            {props.children}
        </div>
    )
}

export default Backdrop
