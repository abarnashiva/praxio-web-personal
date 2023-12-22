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
import FlexContact from "../components/FlexContact";
import FlexAddress from "../components/FlexAddress";
import FlexSocial from "../components/FlexSocial";
import { useForm } from "react-hook-form";
import { SimpleButton } from "../common/Button";
import Icons from "../components/Icons";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

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
      <Heading>Contact US</Heading>
      <SubContent>Get in touch with PRAXIO</SubContent>
      <SubHeading>
        Connecting Dreams to Reality: Reach Out and Let&#39;s Create Together!
      </SubHeading>
      <Paragraph>
        Join us as we work together to create something truly amazing. We&#39;re
        excited to work with you to realize your goal because we&#39;re your
        go-to team for everything technological. Let&#39;s let our imaginations
        run wild and create magic!
      </Paragraph>
      <FlexContact>
        <div>
          <SemiHeading>Reach us out at</SemiHeading>
          <FlexAddress>
            <Paragraph>
              No. 17, IInd Floor, SANHASA SQUARE, Bharathi Park Rd, Bharathi Pk
              Cross Rd 3, Coimbatore, Tamil Nadu 641043
            </Paragraph>
            <Paragraph>sales@praxio.in</Paragraph>
            <Paragraph>096000 43335</Paragraph>
          </FlexAddress>
          <SemiHeading>Follow us on</SemiHeading>
          <FlexSocial>
            <Icons>
              <FaFacebookF />
            </Icons>
            <Icons>
              <BsInstagram />
            </Icons>
            <Icons>
              <BsLinkedin />
            </Icons>
          </FlexSocial>
        </div>
        <div>
          <BorderBox>
            <form>
              <FormInput label={"Name"} name={"name"} />
              <FormInput label={"Mail ID"} name={"email"} />
              <FormInput label={"Phone No"} name={"phone"} />
              <FormSelect label={""} name={""} />
              <FormInput
                label={"Your Comments (Optional)"}
                name={"comments"}
                type="textarea"
                rows={6}
              />
              <SimpleButton text={"Submit"} />
            </form>
          </BorderBox>
        </div>
      </FlexContact>
    </div>
  );
}
