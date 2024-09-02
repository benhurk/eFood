import logo from '../../assets/logo.svg';
import { H1 } from './styled';

export default function SiteTitle() {
    return (
        <H1>
            <img src={logo} alt="eFood" />
        </H1>
    )
}