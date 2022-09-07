// package imports
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { useContext } from "react";
import { motion } from "framer-motion";

// component imports
import { QuestionContext } from "./questionnaire/QuestionContext";
import { names } from "./data";

// image imports
import imageFamily from "../assets/family.png"

// animation import
import { pageTransition } from "./AnimationHandlers";

const Registration = () => {
    const { answers, setAnswers } = useContext(QuestionContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "", lastName: "", dateOfBirth: "", gender: "", email: "", phoneNumber: "", address: "",
            city: "", stateProvince: "", zipCode: "", profession: "", maritalStatus: "", weight: "",
            height: "", emergContact: "", relationship: "", contactNum: ""
        }
    })

    const navigate = useNavigate();

    const submitFunc = (data) => {
        const userId = uuid()
        sessionStorage.setItem("name", `${data.firstName}`)

        // fetch("/registration", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         _id: userId,
        //         firstName: data.firstName,
        //         lastName: data.lastName,
        //         gender: data.gender,
        //         phoneNumber: data.phoneNumber,
        //         email: data.email,
        //         address: data.address,
        //         city: data.city,
        //         stateProvince: data.stateProvince,
        //         zipCode: data.zipCode,
        //         profession: data.profession,
        //         maritalStatus: data.maritalStatus,
        //         weight: data.weight,
        //         height: data.height,
        //         emergContact: data.emergContact,
        //         relationship: data.relationship,
        //         contactNum: data.contactNum
        //     }),
        //     headers: { "Content-Type": "application/json" },
        // })
        //     .then((res) => res.json())
        //     .then(() => {
                setAnswers({ ...answers, userId: userId, name: `${names[Math.floor(Math.random() * 60)]}` })
                navigate("/registration-confirmed");
            // });
    }

    const errorStyle = { borderBottom: "1px solid #fa0a0aa5" }

    return (
        <>
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={pageTransition}>
                <Container>
                    <ImageWrapper>
                        <Image src={imageFamily} />
                    </ImageWrapper>
                    <Form onSubmit={handleSubmit((data) => submitFunc(data))}>

                        <InnerWrap>
                            <Section>
                                <StyledInput
                                    style={errors.firstName && errorStyle}
                                    {...register("firstName", { required: true })} placeholder="First Name"
                                />
                                <StyledInput
                                    style={errors.lastName && errorStyle}
                                    {...register("lastName", { required: true })} placeholder="Last Name"
                                />
                                {/* <StyledInput
                                    type="date"
                                    style={errors.dateOfBirth && errorStyle}
                                    {...register("dateOfBirth", { required: true })} placeholder="Date of Birth"
                                /> */}

                                <StyledInput
                                    style={errors.profession && errorStyle}
                                    {...register("profession", { required: true })} placeholder="Profession"
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
                                <StyledInput
                                    style={errors.maritalStatus && errorStyle}
                                    {...register("maritalStatus", { required: true })} placeholder="Marital Status"
                                />
                                <StyledInput
                                    style={errors.weight && errorStyle}
                                    {...register("weight", { required: true })} placeholder="Weight (pounds)"
                                />
                                <StyledInput
                                    style={errors.height && errorStyle}
                                    {...register("height", { required: true })} placeholder="Height (inches)"
                                />
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
                            <FinePrint>By checking the box, you are stating that you have read, understood, and accepted the following conditions for membership into After(tm). You agree that you are 18 years of age or older, that you are of sound body and mind in your decision to participate in your transition into TrueNeural(tm), and have chosen to upload your conscious completely of your own free will and no one has coherced you to do so. Over the course of the following 18 weeks — of which you will under go treatment at our reclusive comfort facility in preparation for your transfer —  you will not reach out or in anyway communicate with media outlets, public officials, bloggers, police about your experiences with TrueNeural no matter the results. If you happen to do so, you agree to lose all rights upon entering After(tm). Further, by agreeing to our terms, you grant TrueNeural and its many subsidiaries a non-transferable option to claim your physical representation (aka. "body") when you are fully uploaded. What we do with said body is entirely to our discretion and no information will be shared with family or friends. Should we wish to exercise this option — of which their is an 80% we do so — you agree to surrender your "body" and any claim you may have on it.</FinePrint>
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
    height: 88vh;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 580px;
    width: 70%;
    max-width: 950px;
    background-color: #A4BDBA;
    overflow: hidden;
`
const Image = styled.img`
    position: relative;
    left: -80px;
`
const ImageWrapper = styled.div`
    flex: 1;
    overflow: hidden;
    `
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 25px 25px 2px 25px;
    flex-wrap: wrap;
    flex: 1;
`
const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
`
const InnerWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const StyledInput = styled.input`
    width: 40%;
    font-size: 12px;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0%;
    background-color: inherit;
    background: inherit;
    color: #4a5655;
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
    color: #4a5655;
    font-size: 12px;
`
const StyledButton = styled.button`
    background-color: inherit;
    border: 2px solid white;
    height: 50px;
    width: 200px;
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
    &:hover{
        background-color: #b7c4c2;
    }
`
const FinePrint = styled.div`
    font-size: 6px;
    opacity: 0.2;
    text-align: justify;
    text-align-last: left;
    padding-top: 20px;
`
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`