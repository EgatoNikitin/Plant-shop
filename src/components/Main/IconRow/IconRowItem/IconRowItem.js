import './IconRowItem.scss';

export const IconRowItem = ({url, size = 'large'})=> {
    return (
        <img className="iconRowItem" src={url} alt='icon' data-size={size}/>
    )
}