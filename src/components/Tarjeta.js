import '../App.css'

const tarjeta = ({ img, name, shortDescrip }) => {
    return (
        <>
            <div class="card">
                <div class="card_img">
                    <img src={img} alt="gatito" />
                </div>
                <div class="card_info">
                    <h3>{name}</h3>
                    <p>{shortDescrip}</p>
                    <button class="ver-mas">Ver mas</button>
                </div>
            </div>
        </>
    );
}

export default tarjeta