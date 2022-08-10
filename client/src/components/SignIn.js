// package imports
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// component imports
import BasicHeader from "./BasicHeader";

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { firstName: "", lastName: "", dateOfBirth: "", sex: "", email: "" }
    })
    
    const navigate = useNavigate();

    const submitFunc = (data) => {
        data.preventDefault();
        fetch("/membership", {
            method: "POST",
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                sex: data.sex,
                email: data.email,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(() => {
                navigate("/registration-confirmed");
            });
    }

console.log("errors", errors)
return (
    <>
        <BasicHeader />
        <Form onSubmit={handleSubmit((data) => {
            submitFunc(data)
        })}>

            <input
                style={errors.firstName && { border: "3px solid #fa0a0aa5", margin: "-1px" }}
                {...register("firstName", { required: true })} placeholder="First Name"
            />
            <input {...register("lastName", { required: true })} placeholder="Last Name" />
            <input {...register("dateOfBirth", { required: true })} placeholder="Date of Birth" />
            <input {...register("sex", { required: true })} placeholder="Sex" />
            <input {...register("email", { required: true })} placeholder="Phone Number" />
            {/*         
            <input name="email" placeholder="Address" />
            <input name="email" placeholder="City" />
            <input name="email" placeholder="State/Province" />
            <input name="email" placeholder="Zip Code" />

            <input name="profession" placeholder="Profession" />
            <input name="email" placeholder="Marital Status" />
            <input name="email" placeholder="Emergency Contact" />
            <input name="email" placeholder="Relationship" />
            <input name="email" placeholder="Contact Number" />
            <input name="email" placeholder="Weight (pounds)" />
            <input name="email" placeholder="Height (inches)" />
            <input name="email" placeholder="Blood Type" />

            <input name="email" placeholder="Taking any medications, currently?" />
            <input name="email" placeholder="Passport ID/Citizenship Number" />
            <input name="BMI" placeholder="Body Mass Index" />
            <input name="email" placeholder="If yes, please list it here" />
            <input name="email" placeholder="Membership Rules" />
            <input name="email" placeholder="Privacy Policy" /> */}
            <input type="submit" />
        </Form>
    </>
)
}

// 1. Membership is available to anyone 18 years of age or older.
// 2. You promise NOT to use to conduct any fraudulent or business activity or have more than one Member Account at any time.
// i have read, understood, and accepted the rules for membership
// Please reach out and read our Privacy Policy in order to understand how your information is used and shared, and check below if you accept the policy.
// Once you submit your application, we will contact you shortly to complete your membership application. 
// Thank you!

export default SignIn

const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 30px;
    flex-wrap: wrap;

`