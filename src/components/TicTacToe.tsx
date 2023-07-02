import coverImage from '../assets/images/cover01.jpg';

export const TicTacToe = () => {

    return (
        <div 
            className="cover"
            style={{ backgroundImage: `url(${coverImage})` }}
        >
            <div className="glass-overlay"></div>
        </div>
    )
}