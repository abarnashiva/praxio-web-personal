import React from "react";
import ReactMarkdown from "react-markdown";
import StartProject from "@/app/common/StartProject";
import SubHeading from "@/app/components/SubHeading";
import Paragraph from "@/app/components/Paragraph";
import FlexBox from "@/app/components/FlexBox";
import CommonPadding from "@/app/components/CommonPadding";
import FlexContent from "@/app/components/FlexContent";
import ProductImage from "@/app/components/ProductImage";

const markdownContent = `

## How does it work?
Visual Intelligence functions by leveraging advanced algorithms and
neural networks to process visual data, enabling machines to interpret
and understand images and videos.

## Visual Intelligence in Hardware Platforms
  In todays rapidly advancing technological landscape, visual
  intelligence stands at the forefront of innovation. It represents the
  ability of machines to interpret and understand visual information, a
  capability that has transformed various industries and applications.
  At the heart of this revolution are sophisticated hardware platforms
  designed to process and analyze visual data with remarkable precision
  and speed.

  Visual intelligence enables machines to recognize patterns, identify objects, and understand spatial relationships in images and videos. It plays a pivotal role in applications like computer vision, autonomous vehicles, facial recognition, and augmented reality, reshaping the way we interact with technology.

## Visual Intelligence in Software Algorithm and tools
  Visual intelligence in software algorithms and tools refers to the ability of computer programs and applications to understand and process visual information. This capability is essential for various applications, including image and video analysis, computer vision, augmented reality, autonomous vehicles, and more. There are several algorithms and tools used to enhance visual intelligence in software applications.

  **CNN:** CNNs (Convolutional Neural Network) are a class of deep learning algorithms specifically designed for processing grid-like data, such as images and videos. They use convolutional layers to automatically and adaptively learn spatial hierarchies of features from input images. CNNs are widely used in tasks like image classification, object detection, and image segmentation.

  **OpenCV:** OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. It contains various tools and algorithms for image and video analysis, including object detection, face recognition, feature detection, and image stitching.

## Visual Intelligence in Deployment Senario
  Visual intelligence transforms industries, enhancing safety, efficiency, and decision-making. From autonomous vehicles to healthcare, retail, and manufacturing, advanced visual systems revolutionize diverse sectors, ensuring higher quality, timely diagnoses, optimized customer experiences, and streamlined processes
`;

export default function Content() {
  return (
    <CommonPadding>
      <FlexBox product>
        <FlexContent product>
          <SubHeading>
            Transforming Perspectives : Unleashing the Power of Visual
            Intelligence
          </SubHeading>
          <Paragraph>
            We understand the significance of visual intelligence in today&#39;s
            data-driven world. Our innovative products harness the latest
            advancements in computer vision and artificial intelligence to
            provide you with unparalleled insights and efficiencies. Explore our
            range of visual intelligence solutions designed to transform raw
            visual data into actionable information, empowering businesses
            across various industries.
          </Paragraph>

          <div className="flex">
            <StartProject />
          </div>
        </FlexContent>
        <ProductImage
          product
          source={"../images/visual small.svg"}
        ></ProductImage>
      </FlexBox>

      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="text-primary font-bold text-lg py-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-700 py-4" {...props} />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </CommonPadding>
  );
}
