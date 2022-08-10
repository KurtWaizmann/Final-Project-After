// package imports
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

// component imports
import BasicHeader from "./BasicHeader";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { firstName: "", lastName: "", dateOfBirth: "", sex: "", email: "" }
    })

    const navigate = useNavigate();

    const submitFunc = (data) => {
        sessionStorage.setItem("name", `${data.firstName}`)

        fetch("/registration", {
            method: "POST",
            body: JSON.stringify({
                _id: uuid(),
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                sex: data.sex,
                phoneNumber: data.phoneNumber,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(() => {
                navigate("/registration-confirmed");
            });
    }

    const errorStyle = { borderBottom: "1px solid #fa0a0aa5" }

    return (
        <>
            <BasicHeader />
            <Wrapper>
                <Container>
                    <Form onSubmit={handleSubmit((data) => submitFunc(data))}>

                        <InnerWrap>
                            <Title>Identity</Title>
                            <Section>
                                <StyledInput
                                    style={errors.firstName && errorStyle}
                                    {...register("firstName", { required: true })} placeholder="First Name"
                                />
                                <StyledInput
                                    style={errors.lastName && errorStyle}
                                    {...register("lastName", { required: true })} placeholder="Last Name"
                                />
                                <StyledInput
                                    type="date"
                                    style={errors.dateOfBirth && errorStyle}
                                    {...register("dateOfBirth", { required: true })} placeholder="Date of Birth"
                                />
                                <StyledInput
                                    type="email"
                                    style={errors.email && errorStyle}
                                    {...register("email", { required: true })} placeholder="Email"
                                />
                                <StyledInput
                                    type="tel"
                                    style={errors.phoneNumber && errorStyle}
                                    {...register("phoneNumber", { required: true })} placeholder="Phone Number"
                                />
                            </Section>
                        </InnerWrap>


                        <InnerWrap>
                            <Title>Location</Title>
                            <Section>
                                <StyledInput
                                    style={errors.address && errorStyle}
                                    {...register("address", { required: true })} placeholder="Address"
                                />
                                <StyledInput
                                    style={errors.city && errorStyle}
                                    {...register("city", { required: true })} placeholder="City"
                                />
                                <StyledInput
                                    style={errors.stateProvince && errorStyle}
                                    {...register("stateProvince", { required: true })} placeholder="State/Province"
                                />
                                <StyledInput
                                    style={errors.zipCode && errorStyle}
                                    {...register("zipCode", { required: true })} placeholder="Zip Code"
                                />
                            </Section>
                        </InnerWrap>


                        <InnerWrap>
                            <Title>Life Achievements</Title>
                            <Section>
                                <StyledInput
                                    style={errors.profession && errorStyle}
                                    {...register("profession", { required: true })} placeholder="Profession"
                                />
                                <StyledInput
                                    style={errors.earnings && errorStyle}
                                    {...register("earnings", { required: true })} placeholder="Yearly Earning (estimate)"
                                />
                                <StyledInput
                                    style={errors.maritalStatus && errorStyle}
                                    {...register("maritalStatus", { required: true })} placeholder="Marital Status"
                                />

                            </Section>
                        </InnerWrap>

                        <InnerWrap>
                            <Title>Health</Title>
                            <Section>
                                <StyledInput
                                    style={errors.weight && errorStyle}
                                    {...register("weight", { required: true })} placeholder="Weight (pounds)"
                                />
                                <StyledInput
                                    style={errors.height && errorStyle}
                                    {...register("height", { required: true })} placeholder="Height (inches)"
                                />
                                <StyledInput
                                    style={errors.bloodType && errorStyle}
                                    {...register("bloodType", { required: true })} placeholder="Blood Type"
                                />

                                <select id="blood" name="blood">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>

                                <StyledInput
                                    style={errors.meds && errorStyle}
                                    {...register("meds", { required: true })} placeholder="Taking any medications, currently?"
                                />
                                <StyledInput
                                    style={errors.meds && errorStyle}
                                    {...register("meds", { required: true })} placeholder="If so, list here"
                                />
                            </Section>
                        </InnerWrap>

                        <InnerWrap>
                            <Title>In Case of Emergency</Title>
                            <Section>
                                <StyledInput
                                    style={errors.emergContact && errorStyle}
                                    {...register("emergContact", { required: true })} placeholder="Emergency Contact"
                                />
                                <StyledInput
                                    style={errors.relationship && errorStyle}
                                    {...register("relationship", { required: true })} placeholder="Relationship"
                                />
                                <StyledInput
                                    style={errors.contactNum && errorStyle}
                                    {...register("contactNum", { required: true })} placeholder="Contact Number"
                                />
                            </Section>
                        </InnerWrap>

                        <InnerWrap>
                            <Title>Personal</Title>
                            <Section>
                                <StyledInput
                                    style={errors.zipCode && errorStyle}
                                    {...register("rules", { required: true })} placeholder="Membership Rules"
                                />
                                <StyledInput
                                    style={errors.zipCode && errorStyle}
                                    {...register("policy", { required: true })} placeholder="Privacy Policy"
                                />
                            </Section>
                        </InnerWrap>

                        <StyledButton type="submit" />
                    </Form>
                </Container>
            </Wrapper>
        </>
    )
}

// 1. Membership is available to anyone 18 years of age or older.
// 2. You promise NOT to use to conduct any fraudulent or business activity or have more than one Member Account at any time.
// i have read, understood, and accepted the rules for membership
// Please reach out and read our Privacy Policy in order to understand how your information is used and shared, and check below if you accept the policy.
// Once you submit your application, we will contact you shortly to complete your membership application. 
// Thank you!

export default Register

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 95%;
    background-color: #A4BDBA;
;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 20px;
    text-align: left;
    width: 100%;
    border-bottom: 2px solid black;
    opacity: 0.5;

`
const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
`
const InnerWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0%;
    background-color: inherit;
    background: inherit;
    color: white;
    &:-webkit-autofill {
        box-shadow: 0 0 0 30px red inset !important;
    }
    &:-webkit-autofill:hover {
        box-shadow: 0 0 0 30px red inset !important;
    }
    &:-webkit-autofill:focus {
        box-shadow: 0 0 0 30px red inset !important;
    }
    ::placeholder {
       color: white;
   }
`
const StyledButton = styled.input`
    background-color: white;
    border: none;
    height: 61px;
    width: 249px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    font-variant: small-caps;
    color: black;
    text-decoration:none;
    &:active{
        transform: translateY(4px);
    }
`

