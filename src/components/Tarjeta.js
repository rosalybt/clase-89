import '../App.css'

const tarjeta = ({ img, name, shortDescrip }) => {
    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img src={img} alt="gatito" />
                </div>
                <div className="card_info">
                    <h3>{name}</h3>
                    <p>{shortDescrip}</p>
                    <button className="ver-mas">Ver mas</button>
                </div>
            </div>
        </>
    );
}

export default tarjeta