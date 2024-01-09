"use client";
import React from "react";
import Heading from "../components/Heading";
import SubContent from "../components/SubContent";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import SemiHeading from "../components/SemiHeading";
import BorderBox from "../components/BorderBox";
import { createFormItem } from "../components/FormItem";
import TextInput from "../components/Input";
import Select from "../components/Select";
import { useForm } from "react-hook-form";
import { SimpleButton } from "../common/Button";
import FlexContent from "../components/FlexContent";
import CardContent from "../components/Cardcontent";
import NumberUnFill from "../components/Numberunfill";

export default function Content() {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const FormInput = React.useMemo(
    () => createFormItem(control, errors, TextInput),
    [control, errors]
  );

  const FormSelect = React.useMemo(
    () => createFormItem(control, errors, Select),
    [control, errors]
  );
  return (
    <div>
      <Heading>Support</Heading>
      <SubContent>We&#39;re Here to Help!</SubContent>
      <SubHeading>Where Every Query Finds a Solution.</SubHeading>
      <Paragraph>
        At Praxio, we are committed to providing exceptional support to our
        valued customers. Whether you have questions, need technical assistance,
        or want to explore our resources, you&#39;re in the right place. Our
        dedicated support team is here to assist you every step of the way.
      </Paragraph>
      <SubHeading>Development FAQ</SubHeading>
      <FlexContent>
        <CardContent>
          <NumberUnFill>01</NumberUnFill>
          <SemiHeading>What programming languages do you support?</SemiHeading>
          <Paragraph>
            We primarily support popular programming languages such as Python,
            JavaScript, Java, and C++. Our team of developers is well-versed in
            these languages to cater to a wide range of project requirements.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>02</NumberUnFill>
          <SemiHeading>Can I request custom development services?</SemiHeading>
          <Paragraph>
            Yes, absolutely! We offer custom development services tailored to
            your specific needs. Please contact our sales team or fill out the
            inquiry form on our Contact Us page, and we will get back to you
            shortly to discuss your requirements in detail.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>03</NumberUnFill>
          <SemiHeading>What is your development process like?</SemiHeading>
          <Paragraph>
            Our development process is collaborative and transparent. We start
            with a detailed consultation to understand your goals and
            requirements. Then, our expert developers work closely with you
            throughout the project, providing regular updates and seeking your
            feedback to ensure the end result meets your expectations.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>04</NumberUnFill>
          <SemiHeading>Where is PRAXIO located?</SemiHeading>
          <Paragraph>
            Our main office is located at Coimbatore and the address is given
            below No. 17, IInd Floor, SANHASA SQUARE, Bharathi Park Rd, Bharathi
            Pk Cross Rd 3, Coimbatore, Tamil Nadu 641043.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>05</NumberUnFill>
          <SemiHeading>
            What is the average level of expertise and experience that
            developers have at PRAXIO?
          </SemiHeading>
          <Paragraph>
            At Praxio developers have an average of 5+ years of expertise in
            their respective development field. Our developers keep up with the
            latest technologies and techniques to create world-class solutions
            that support market trends. They have a lot of expertise with
            various project sizes and industries.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>06</NumberUnFill>
          <SemiHeading>Did not find a Answer to your Question?</SemiHeading>
          <Paragraph>
            Fill out this simple form support team will respond to your query
            promptly.
          </Paragraph>
          <BorderBox>
            <form>
              <FormInput label={"Name"} name={"name"} />
              <FormInput label={"Mail ID"} name={"email"} />
              <FormInput label={"Your Query"} name={"query"} type="textarea" rows={6} />
              <SimpleButton text={"Submit"} />
            </form>
          </BorderBox>
        </CardContent>
      </FlexContent>
    </div>
  );
}
