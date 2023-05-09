import '../assets/css/components/header.css';
import { CloseButton } from './CloseButton';

export const Header = ({pageName}) => {
    return (
        <header className='header'>
            <CloseButton margin={"0 0 0 30px"}/>
            <h1 className='page-title'>{pageName}</h1>
        </header>
    )
}