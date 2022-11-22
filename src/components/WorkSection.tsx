import clsx from 'clsx'
import {useState} from 'react'
import SectionHeaderText from './SectionHeaderText'
import WorkCard from './WorkCard'

type CompanyNameProps = {
  children: React.ReactNode
  active?: boolean
  onClick: () => void
}

function CompanyName({children, active = false, onClick}: CompanyNameProps) {
  return (
    <div
      className={clsx(
        'cursor-pointer border-y-2  border-white-100 py-1 px-3 hover:bg-green-100 hover:text-green-400 dark:border-gray-200',
        {
          'bg-green-100 text-green-400': active,
        }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const companies = ['Eastshomemade', 'Beincom', 'Fiop']
const works: {jobTitle: string; time: string; description: string[]}[] = [
  {
    jobTitle: 'Front-end Developer',
    time: 'March 2022 - present',
    description: [
      'Developed, fixed bugs and maintained CRM website of main product by using Typescript, ReactJS, React Query, Zustand, Material UI, Vite.',
      'Built public product detail website with OpenMaps by using LeafletMap, Typescript, NextJS.',
    ],
  },
  {
    jobTitle: 'Web Developer',
    time: 'July 2020 - June 2021',
    description: [
      'Developed, fixed bugs and maintained main product API primarily using NodeJS, Typescript, NestJS, PostgresSQL.',
      'Implement serverless cloud environment with AWS Lambda, API Gateway, S3 by using Serverless Framework.',
      'Build Bitbucket Pipelines CI/CD.',
      'Developed public website follow by Figma design using Typescript, NextJS.',
    ],
  },
  {
    jobTitle: 'Front-end Developer',
    time: 'October 2019 - June 2020',
    description: [
      "Developed, fixed bugs and maintained code for client's ERP using Typescript, ReactJS, Ant Design, SASS.",
      'Built in-house projects follow by Figma design and make sure it cross-browser compatibility and responsiveness.',
      'Join a mobile app project built with React Native, Typescript, Redux, Redux Saga and FCM.',
    ],
  },
]

export default function WorkSection() {
  const [tab, setTab] = useState(0)

  return (
    <section id="projects" className="mx-auto md:max-w-3xl">
      <SectionHeaderText>Where I've Worked</SectionHeaderText>
      <div className="my-12 flex h-[400px] flex-col border-[3px] border-green-200 p-2 dark:border-green-300 md:h-[300px] md:flex-row md:p-6">
        <div className="no-scroll flex w-full flex-row overflow-x-auto font-mono text-sm font-bold text-green-200 dark:text-green-300 md:w-auto md:flex-col md:text-lg">
          {companies.map((c, i) => (
            <CompanyName key={i} active={i === tab} onClick={() => setTab(i)}>
              {c}
            </CompanyName>
          ))}
        </div>
        <div className="mt-3 flex-1 px-1 md:mt-0 md:ml-14 md:px-0">
          {works.map((w, i) => (
            <WorkCard
              key={i}
              visible={i === tab}
              jobTitle={w.jobTitle}
              time={w.time}
              description={w.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
