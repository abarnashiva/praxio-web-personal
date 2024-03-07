"use client";
import React from "react";
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
import FlexBox from "../components/FlexBox";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

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

  const services = [
    { id: 1, name: "Custom Hardware Design &  Prototyping" },
    { id: 2, name: "Custom Software Development & Integration" },
    { id: 3, name: "Testing & Quality Assurance" },
    { id: 4, name: "Deployment & Scalability" },
  ];

  return (
    <div>

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
          <SemiHeading top>Reach us out at</SemiHeading>
          <FlexAddress>
            <FlexBox contact>
              <Icons contact>
                <MdOutlineLocationOn className="text-3xl" />
              </Icons>
              <div>
                <Paragraph contact>
                  No. 17, IInd Floor, SANHASA SQUARE,
                </Paragraph>
                <Paragraph contact>Bharathi Park Rd,</Paragraph>
                <Paragraph contact>Bharathi Pk Cross Rd 3,</Paragraph>
                <Paragraph contact>Coimbatore,</Paragraph>
                <Paragraph contact>Tamil Nadu 641043.</Paragraph>
              </div>
            </FlexBox>
            <div>
              <FlexBox content>
                <Icons contact>
                  <MdOutlinePhone />
                </Icons>
                096000 43335
              </FlexBox>
              <FlexBox content>
                <Icons contact>
                  <MdOutlineEmail />
                </Icons>
                info@praxio.in
              </FlexBox>
            </div>
          </FlexAddress>
          <SemiHeading top>Follow us on</SemiHeading>
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
          <SubHeading>Connect With Our Team</SubHeading>  
          <BorderBox>
            <form>
              <FormInput label={"Name"} name={"name"} />
              <FormInput label={"Mail ID"} name={"email"} />
              <FormInput label={"Phone No"} name={"phone"} />
              <FormSelect
                label={"Service"}
                name={"service"}
                options={services}
              />
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
