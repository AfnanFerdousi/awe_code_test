/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { updateFormData } from "../redux/actions/formActions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const StepTwo = ({ setStep }) => {
    const formData = Cookies.get('formData') ? JSON.parse(Cookies
        .get('formData')) : {};
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleChange = (data) => {
        dispatch(updateFormData(data));
        setStep(3);
        console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleChange)} action="" className='flex flex-col items-center  gap-[30px] w-full'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-[18px] font-semibold">Timeline*</span>
                    </div>
                    <select
                        className="select select-bordered  w-full rounded-full bg-[#fff] border-[#DCDCDC]"
                        {...register("timeline", {
                            required: true,
                        })}
                    >
                        <option selected>{formData.timeline}</option>
                        <option>Within 1 month</option>
                        <option>Within 3 month</option>
                        <option>Within 6 month</option>
                    </select>
                    {errors.timeline && <p className="text-red-500">Timeline is required</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-[18px] font-semibold">Product*</span>
                        </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-full bg-[#fff] border-[#DCDCDC]"
                    defaultValue={formData.product}
                        {...register("product", { required: true })} />
                    {errors.product && <p className="text-red-500">Product is required</p>}
                    </label>

                <div className='flex items-center justify-between w-full'>
                    <button onClick={() => setStep(1)} className="btn bg-[#F0F2FF] text-[#5B6CFF] rounded-full border-none text-[18px] px-[45px] ">Go back</button>
                    <button type="submit" className="btn bg-[#5B6CFF] text-[#fff] rounded-full border-none text-[18px] px-[45px] ">Go Next</button>
               </div>
            </form>
        </div>
    );
};

export default StepTwo;