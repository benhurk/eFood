import CloseBtn from "./styled";
import closeIcon from '../../assets/closeX.svg';

type Props = {
    onClick: () => any;
}

export default function CloseButton({onClick}: Props) {
    return (
        <CloseBtn className='close_btn' onClick={onClick}><img src={closeIcon} alt="X"></img></CloseBtn>
    )
}