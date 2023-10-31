import React from 'react'

const services = [
  {
    id: 1,
    heading: "What is Vision AI ?",
    content: "Vision Artificial Intelligence, refers to the field of artificial intelligence (AI) that focuses on enabling computers and machines to interpret, understand, and make sense of visual information from the world, primarily through images and videos. It involves the use of various technologies, including computer vision, machine learning, deep learning, and image processing, to analyze and extract meaningful insights from visual data."
  },
  {
    id: 2,
    heading: "How Does Vision AI Function?",
    content: "Vision AI functions by leveraging advanced algorithms and neural networks to process visual data, enabling machines to interpret and understand images and videos."
  },
  {
    id: 3,
    heading: "Uses of Vision AI in Rural Field",
    content: "Vision AI in rural areas can be employed for crop monitoring, disease detection, and yield prediction, aiding farmers in making informed decisions about their agriculture. It can also assist in automating manual tasks like livestock tracking and land mapping. Additionally, Vision AI can enhance healthcare by enabling telemedicine through image analysis and diagnostics, extending medical services to remote regions. Its potential applications in rural education include digitizing learning materials and providing personalized tutoring through image recognition technologies."
  },
  {
    id: 4,
    heading: "Uses of Vision AI in Urban Field",
    content: "Vision AI is employed for a multitude of applications. It enhances traffic management and safety through real-time monitoring of traffic flow and incident detection. Urban surveillance systems utilize Vision AI for security and crime prevention. Additionally, it aids in smart city initiatives by optimizing public transportation, managing energy consumption, and improving waste management, leading to more efficient and sustainable urban environments."
  },
  {
    id: 5,
    heading: "Uses of Vision AI in Industrial Field",
    content: "Vision AI has numerous applications in the industrial sector, revolutionizing quality control, safety, and efficiency. It's employed for tasks like defect detection in manufacturing, ensuring product quality, tracking and optimizing logistics and supply chains, and enhancing workplace safety through the monitoring of industrial environments."
  },
]

export default function Content() {
  return (
    <div className='mx-auto md:mx-0 p-6 pt-0'>
      {services.map((service, index) => (
        <div className='mb-6' key={index}>
          <h2 className='font-semibold text-xl md:text-2xl'>{service.heading}</h2>
          <p className='mt-2 md:text-md xl:text-lg'>{service.content}</p>
        </div>
      ))}
    </div>
  )
}
