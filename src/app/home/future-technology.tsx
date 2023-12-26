import React from 'react'
import Heading from '../components/Heading';
import FlexFuture from '../components/FlexFuture';
import FutureImage from '../components/FutureImage';
import FutureContent from '../components/FutureContent';
import Paragraph from '../components/Paragraph';
import LinkText from '../components/LinkText';

export default function FutureTechnology() {
  return (
    <div>
      <Heading center margin>
        Crafting the Future of Technology
      </Heading>

      <FlexFuture>
        <FutureImage source={"./images/future-technology.png"}></FutureImage>
        <FutureContent>
          <div>
            <Paragraph large>
              At Praxio, we&#39;re more than just technologists. We&#39;re
              visionaries. With a team that brings together decades of combined
              experience, we&#39;re committed to shaping a world where
              technology amplifies potential and simplifies complexities. Our
              expertise spans the areas of business consulting, Application
              Development, implementation and support services in cutting edge
              technologies.
            </Paragraph>
            <LinkText>Learn More</LinkText>
          </div>
        </FutureContent>
      </FlexFuture>
    </div>
  );
}
