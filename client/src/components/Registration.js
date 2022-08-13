// package imports
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { motion } from "framer-motion";

// component imports
import BasicHeader from "./BasicHeader";

// image imports
import imageFamily from "../assets/family.png"

// animation import
import { pageTransition } from "./AnimationHandlers";

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "", lastName: "", dateOfBirth: "", gender: "", email: "", phoneNumber: "", address: "",
            city: "", stateProvince: "", zipCode: "", profession: "", maritalStatus: "", weight: "",
            height: "", emergContact: "", relationship: "", contactNum: ""
        }
    })

    const navigate = useNavigate();

    const submitFunc = (data) => {
        console.log(data)
        sessionStorage.setItem("name", `${data.firstName}`)

        fetch("/registration", {
            method: "POST",
            body: JSON.stringify({
                _id: uuid(),
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                gender: data.gender,
                phoneNumber: data.phoneNumber,
                email: data.email,
                address: data.address,
                city: data.city,
                stateProvince: data.stateProvince,
                zipCode: data.zipCode,
                profession: data.profession,
                maritalStatus: data.maritalStatus,
                weight: data.weight,
                height: data.height,
                emergContact: data.emergContact,
                relationship: data.relationship,
                contactNum: data.contactNum
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
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <Container>
                    <Image src={imageFamily} />
                    <Form onSubmit={handleSubmit((data) => submitFunc(data))}>

                        <InnerWrap>
                            {/* <Title>Registration</Title> */}
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
                                    style={errors.gender && errorStyle}
                                    {...register("gender", { required: true })} placeholder="Gender"
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
                            <Section>
                                <StyledInput
                                    style={errors.profession && errorStyle}
                                    {...register("profession", { required: true })} placeholder="Profession"
                                />

                                <StyledInput
                                    style={errors.maritalStatus && errorStyle}
                                    {...register("maritalStatus", { required: true })} placeholder="Marital Status"
                                />

                            </Section>
                        </InnerWrap>

                        <InnerWrap>
                            <Section>
                                <StyledInput
                                    style={errors.weight && errorStyle}
                                    {...register("weight", { required: true })} placeholder="Weight (pounds)"
                                />
                                <StyledInput
                                    style={errors.height && errorStyle}
                                    {...register("height", { required: true })} placeholder="Height (inches)"
                                />
                            </Section>
                        </InnerWrap>

                        <InnerWrap>
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
                                    type="tel"
                                    style={errors.contactNum && errorStyle}
                                    {...register("contactNum", { required: true })} placeholder="Contact Number"
                                />
                            </Section>
                        </InnerWrap>

                        <InnerWrap>
                            <Section>
                                <Terms>
                                    <input
                                        type="checkbox"
                                        id="termsOfService"
                                        style={errors.agreeToPolicy && errorStyle}
                                        {...register("agreeToPolicy", { required: true })} placeholder="Privacy Policy"
                                    />
                                    <label htmlFor="termsOfService">Agree with our Terms of Service</label>
                                </Terms>
                            </Section>
                        </InnerWrap>

                        <ButtonWrap>
                            <StyledButton type="submit">Continue</StyledButton>
                            <FinePrint>I have read, understood, and accepted the rules for membership into After(tm). Also, you decree that you are 18 years of age or older, of sound body and mind, and have chosen to upload your conscious of your own free will. Further, by agreeing to our terms, you grant TrueNeural and its subsidiaries a non-transferable option to claim your physical representation ("body") while you are uploaded and do as we wish with said body. Should We wish to exercise this option, and we do, you agree to surrender your "body", and any claim you may have on it, within 5 (five) working days of receiving written notification from TrueNeural.</FinePrint>
                        </ButtonWrap>
                    </Form>
                </Container>
            </Wrapper>
        </>
    )
}

export default Registration

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
    height: 670px;
    width: 90%;
    max-width: 950px;
    background-color: #A4BDBA;
`
const Image = styled.img`
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 25px 25px 10px 25px;
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
    width: 40%;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0%;
    background-color: inherit;
    background: inherit;
    color: black;
    &:-webkit-autofill {
        box-shadow: 0 0 0 30px #A4BDBA inset !important;
    }
    &:-webkit-autofill:hover {
        box-shadow: 0 0 0 30px #A4BDBA inset !important;
    }
    &:-webkit-autofill:focus {
        box-shadow: 0 0 0 30px #A4BDBA inset !important;
    }
    ::placeholder {
        color: black;
    }
`
const Terms = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const StyledButton = styled.button`
    background-color: inherit;
    border: 2px solid white;
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
    color: white;
    text-decoration:none;
    &:active{
        transform: translateY(4px);
    }
`
const FinePrint = styled.div`
    font-size: 5px;
    opacity: 0.2;
`
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`