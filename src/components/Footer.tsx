const Footer = () => {
    const date = new Date()

    const yearDisplay:number = date.getFullYear()

    return (
        <footer>
         
            <p className='copyright'>
                &copy;Copyright {yearDisplay} &mdash; Onyenwee Properties
            </p>
        </footer>
    )
}

export default Footer
