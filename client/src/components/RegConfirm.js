// component imports
import BasicHeader from "./BasicHeader";

const RegConfirm = () => {
    const name = sessionStorage.getItem("name")

    return (
        <div>
            <BasicHeader />
            <div>Thank you {name}</div>
            <div>Your Confirmation was Successful</div>
        </div>
    )
}

export default RegConfirm