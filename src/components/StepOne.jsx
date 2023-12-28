/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { updateFormData } from "../redux/actions/formActions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";


const StepOne = ({ setStep }) => {
    const formData = Cookies.get('formData') ? JSON.parse(Cookies.get('formData')) : {};
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleChange = (data) => {
        dispatch(updateFormData(data));
        setStep(2);
        console.log(data)
    };

    console.log(formData)
    return (
        <div>
            <form onSubmit={handleSubmit(handleChange)} action="" className='flex flex-col items-center  gap-[30px] w-full'>
                <div className='flex items-center gap-x-[30px] w-full justify-center'>
                    <label className="form-control w-full max-w-[370px]">
                        <div className="label">
                            <span className="text-[18px] font-semibold">First Name*</span>
                        </div>
                        <input
                            defaultValue={formData.firstName}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-[370px] rounded-full bg-[#fff] border-[#DCDCDC]"
                            {...register("firstName", {
                                required: true,
                            })}
                        />
                        {errors.firstName && <p className="text-red-500">First Name is required</p>}
                    </label>
                    <label className="form-control w-full max-w-[370px]">
                        <div className="label">
                            <span className="text-[18px] font-semibold">Last Name*</span>
                        </div>
                        <input
                            defaultValue={formData.lastName}
                            type="text" placeholder="Type here" className="input input-bordered w-full max-w-[370px] rounded-full bg-[#fff] border-[#DCDCDC]"
                        {...register("lastName", {
                            required: true,
                        })}
                        />
                        {errors.lastName && <p className="text-red-500">Last Name is required</p>}
                    </label>
                </div>
                <div className='flex items-center gap-x-[30px] w-full justify-center'>
                    <label className="form-control w-full max-w-[370px]">
                        <div className="label">
                            <span className="text-[18px] font-semibold">Email*</span>
                        </div>
                        <input
                            defaultValue={formData.email}
                            type="email" placeholder="Type here" className="input input-bordered w-full max-w-[370px] rounded-full bg-[#fff] border-[#DCDCDC]"
                        {...register("email", {
                            required: true,
                        })}
                        />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </label>
                    <label className="form-control w-full max-w-[370px]">
                        <div className="label">
                            <span className="text-[18px] font-semibold">Phone Number*</span>
                        </div>
                        <input
                            defaultValue={formData.phoneNumber}
                            type="text" placeholder="Type here" className="input input-bordered w-full max-w-[370px] rounded-full bg-[#fff] border-[#DCDCDC]"
                        {...register("phoneNumber", {
                            required: true
                        })}
                        />
                        {errors.phoneNumber && <p className="text-red-500">Phone Number is required</p>}
                    </label>
                </div>

                <button
                    type="submit"
                    className="ml-auto btn bg-[#5B6CFF] text-[#fff] rounded-full border-none text-[18px] px-[45px] ">Go Next</button>
            </form>
        </div>
    );
};

export default StepOne;