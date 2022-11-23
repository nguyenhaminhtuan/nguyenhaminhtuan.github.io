import SectionHeaderText from './SectionHeaderText'

const frontend = [
  'HTML5 / CSS3 / Javascript',
  'Typescript',
  'ReactJS',
  'NextJS',
  'Bootstrap',
  'TailwindCSS',
  'Ant Design / Material UI',
  'styled-components / emotion',
  'Redux / Redux Toolkit',
  'Redux Thunk / Redux Saga',
  'React Query',
  'Webpack',
]
const backend = [
  'C# / Java',
  'Typescript',
  'SQL',
  'NodeJS',
  '.NET Core',
  'ExpressJS /NestJS',
  'ASP.NET Core',
  'TypeORM / Prisma',
  'Entity Framework Core',
  'REST API / GraphQL',
  'PostgreSQL',
  'MongoDB',
]
const devops = [
  'Docker',
  'GCP (GCE, GLB, GCS, GCR)',
  'AWS (Lambda, API Gateway, S3, Cognito)',
  'Github Actions / Bitbucket Pipelines',
  'Serverless Framework',
]
const others = ['Git', 'Familiar with Figma', 'Familiar with Agile/Scrum']

function HeaderText(props: {children: React.ReactNode}) {
  return (
    <div
      className="mb-1 font-hackernoonv2 text-lg font-bold text-green-200 md:text-2xl"
      {...props}
    />
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-12 md:mt-16">
      <SectionHeaderText>What can I do</SectionHeaderText>
      <div className="mt-6 bg-gray-100 p-4 text-center font-mono text-sm text-white-200  md:text-lg">
        <div className="flex flex-col justify-around gap-x-2 gap-y-4 md:flex-row">
          <div>
            <HeaderText>Back-end</HeaderText>
            <ul>
              {backend.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <HeaderText>Front-end</HeaderText>
            <ul>
              {frontend.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <HeaderText>DevOps</HeaderText>
          <ul>
            {devops.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
