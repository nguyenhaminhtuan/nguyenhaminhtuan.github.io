import SectionHeaderText from './SectionHeaderText'

function SkillItem({children}: {children: React.ReactNode}) {
  return <li>{children}</li>
}

function ListSkill({children}: {children: React.ReactNode}) {
  return (
    <ul className="mx-2 mt-1 grid list-disc grid-cols-2 gap-x-4 md:mx-12 md:grid-cols-3">
      {children}
    </ul>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="my-16">
      <SectionHeaderText>What can I do</SectionHeaderText>
      <div className="flex justify-center">
        <div className="text-sm md:text-lg">
          <div>
            <b>Front-end:</b>
            <ListSkill>
              <SkillItem>Javascript / Typescript</SkillItem>
              <SkillItem>ReactJS</SkillItem>
              <SkillItem>NextJS</SkillItem>
              <SkillItem>Typescript</SkillItem>
              <SkillItem>Redux / Redux Toolkit</SkillItem>
              <SkillItem>React Query</SkillItem>
              <SkillItem>HTML5 / CSS3</SkillItem>
              <SkillItem>Redux Thunk / Redux Saga</SkillItem>
              <SkillItem>TailwindCSS / Bootstrap</SkillItem>
              <SkillItem>CSS-in-JS</SkillItem>
              <SkillItem>Webpack</SkillItem>
            </ListSkill>
          </div>
          <div className="my-4">
            <b>Back-end:</b>
            <ListSkill>
              <SkillItem>Javascript / Typescript</SkillItem>
              <SkillItem>ExpressJS</SkillItem>
              <SkillItem>ASP.NET Core</SkillItem>
              <SkillItem>NodeJS</SkillItem>
              <SkillItem>NestJS</SkillItem>
              <SkillItem>Entity Framework Core</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>TypeORM / Prisma</SkillItem>
              <SkillItem>REST API / GraphQL</SkillItem>
            </ListSkill>
          </div>
          <div>
            <b>DevOps:</b>
            <ListSkill>
              <SkillItem>Docker</SkillItem>
              <SkillItem>Google Cloud (GCE, GLB, GCS)</SkillItem>
              <SkillItem>AWS Lambda / Serverless Framework</SkillItem>
              <SkillItem>Git</SkillItem>
              <SkillItem>Github Actions</SkillItem>
              <SkillItem>Bitbucket Pipelines</SkillItem>
            </ListSkill>
          </div>
        </div>
      </div>
    </section>
  )
}
