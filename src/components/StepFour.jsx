
import Cookies from 'js-cookie';
const StepFour = () => {
    const formData = Cookies.get('formData') ? JSON.parse(Cookies.get('formData')) : {};
    return (
        <div>
            <h2>Thank you {formData.firstName}</h2>
            <p>Your form has been submitted successfully</p>

            <div>
                <h3>Data Summary</h3>
                <h2>Name: {formData.firstName} {formData.lastName}</h2>
                <h2>Email: {formData.email}</h2>
                <h2>Phone: {formData.phone}</h2>
                <h2>Timeline: {formData.timeline}</h2>
                <h2>Services: {formData.services.join(', ')}</h2>
                <h2>Message: {formData.message}</h2>
            </div>
        </div>
    );
};

export default StepFour;