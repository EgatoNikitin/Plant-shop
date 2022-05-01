import './CheckOut.scss'

export const CheckOut = ({number})=>{
    return (
        <div className='checkOutWrapper'>
            <span>
                Check out {number}
            </span>
        </div>
    )
}