/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { updateFormData } from "../redux/actions/formActions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const StepThree = ({ setStep }) => {
    const formdata = Cookies.get('formData') ? JSON.parse(Cookies.get('formData')) : {};
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleChange = (data) => {
        dispatch(updateFormData({ ...data }));
        console.log(data)

        alert('Form submitted successfully')
        setStep(1);

        
    };
    const services = [
        "Website Design",
        "App Design",
        "UI/UX Development",
    ]
    return (
        <div>
            <form onSubmit={handleSubmit(handleChange)} action="" className='flex flex-col items-center  gap-[30px] w-full'>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="text-[18px] font-semibold">Services</span>
                    </div>
                    <div className="form-control flex flex-row items-center">
                        {services.map((service, index) => (
                            <label key={index} className="label cursor-pointer gap-x-2">
                                <input
                                    {...register("services", { required: true })}
                                    // onChange={() => setRadio(service)}
                                    value={service}
                                    type="radio" name="radio-10" className="radio radio-sm checked:bg-blue-500" />
                                <span className="label-text">{service}</span>
                            </label>
                        ))}
                        {errors.services && <p className="text-red-500">Service is required</p>}
                    </div>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="text-[18px] font-semibold">Message</span>
                    </div>
                    <textarea
                    defaultValue={formdata.message}
                        {...register("message", { required: true })}
                        type="text" placeholder="Write your message" className="input input-bordered w-full rounded-lg bg-[#fff] border-[#DCDCDC] h-[180px] ps-4 pt-2" />
                    {errors.message && <p className="text-red-500">Message is required</p>}
                </label>


                <div className='flex items-center justify-between w-full'>
                    <button onClick={() => setStep(2)} className="btn bg-[#F0F2FF] text-[#5B6CFF] rounded-full border-none text-[18px] px-[45px] ">Go back</button>
                    <button type="submit" className="btn bg-[#5B6CFF] text-[#fff] rounded-full border-none text-[18px] px-[45px] ">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default StepThree;