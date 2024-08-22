export default function AddressForm() {
    return (
        <form>
            <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="address"></label>
                <input type="text" id="address" />
            </div>
            <div>
                <label htmlFor="city"></label>
                <input type="text" id="city" />
            </div>
            <div>
                <label htmlFor="cep"></label>
                <input type="text" id="cep" />
            </div>
            <div>
                <label htmlFor="num"></label>
                <input type="text" id="num" />
            </div>
            <div>
                <label htmlFor="complement"></label>
                <input type="text" id="complement" />
            </div>
        </form>
    )
}