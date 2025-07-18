'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionMotion } from '@/components/ui/section'
import { ButtonLink } from '@/components/button-link'
import { ProjectCard } from '@/components/project-card'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon } from 'lucide-react'
import { data } from '@/constants'
import { ThemeToggle } from '@/components/theme-toggle'
import { RESUME_DATA } from '@/data/resume-data'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function Page() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
      <section className='mx-auto w-full max-w-5xl space-y-12 bg-background/50 backdrop-blur-sm text-foreground print:space-y-8 rounded-3xl p-8 border border-border/20'>
        <motion.div
          className='flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='flex-1 space-y-3 text-center sm:text-left'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-shine text-glow'>{data.name}</h1>
            <p className='w-full text-pretty font-mono text-base bright-text md:w-4/5'>
              {data.about}
            </p>
            <div className='flex items-center justify-center gap-x-2 font-mono text-sm text-muted-foreground sm:justify-start'>
              <a
                className='inline-flex items-center gap-x-1.5 hover:text-foreground hover:underline'
                href={data.locationLink}
                target='_blank'
                rel='noreferrer'
              >
                <GlobeIcon className='size-4' />
                {data.location}
              </a>
            </div>
            <div className='flex justify-center gap-2 pt-1 sm:justify-start'>
              <ButtonLink data={data} />
            </div>
          </motion.div>
          <motion.a
            href='https://github.com/dushf12'
            target='_blank'
            rel='noopener noreferrer'
            className='group'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          >
            <Avatar className='size-32 border-2 border-border transition-all duration-300 group-hover:scale-105 sm:size-40' active status="online">
              <AvatarImage src={RESUME_DATA.avatar} alt={RESUME_DATA.name} className='object-cover' />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </motion.a>
        </motion.div>

        {/* About Section */}
        <SectionMotion
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className='text-2xl font-bold mb-4 text-shine text-glow'>About</h2>
          <p className='text-pretty font-mono text-base leading-relaxed bright-text max-w-4xl text-justify'>{data.summary}</p>
        </SectionMotion>

        {/* Work Experience Section */}
        <SectionMotion
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className='text-2xl font-bold mb-6 text-shine text-glow'>Work Experience</h2>
          {data.work.map((work, i) => (
            <motion.div
              key={work.company}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className='mb-6'>
                <CardHeader className='pb-3'>
                  <h3 className='text-lg inline-flex items-center gap-x-2 font-semibold leading-none'>
                    {work.link ? (
                      <a
                        className='hover:underline text-primary bright-text'
                        href={work.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {work.company}
                      </a>
                    ) : (
                      <span className='text-primary bright-text'>{work.company}</span>
                    )}
                    <span className='inline-flex gap-x-2'>
                      {work.badges.map((badge) => (
                        <Badge variant='secondary' className='align-middle text-xs' key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                </CardHeader>
                {work.jobs.map((job, index) => (
                  <CardContent key={index} className='pt-0'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-x-2 mb-4'>
                      <h4 className='font-semibold text-base text-primary bright-text'>{job.title}</h4>
                      <time className='tabular-nums text-sm bright-text font-medium'>
                        {job.start} - {job.end}
                      </time>
                    </div>
                    <ul className='space-y-2'>
                      {job.description.map((item, index) => (
                        <li key={index} className='text-sm leading-relaxed bright-text text-justify'>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                ))}
              </Card>
            </motion.div>
          ))}
        </SectionMotion>

        {/* Education Section */}
        <SectionMotion
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className='text-2xl font-bold mb-6 text-shine text-glow'>Education</h2>
          {data.education.map((education, i) => (
            <motion.div
              key={education.school}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className='mb-6'>
                <CardHeader className='pb-3'>
                  <h3 className='font-semibold leading-none text-lg text-primary bright-text'>{education.school}</h3>
                </CardHeader>
                <CardContent className='pt-0'>
                  <div className='flex flex-col md:flex-row md:items-center justify-between gap-x-2 mb-4'>
                    <h4 className='font-semibold text-base text-primary bright-text'>{education.degree}</h4>
                    <time className='tabular-nums text-sm bright-text font-medium'>
                      {education.start} - {education.end}
                    </time>
                  </div>
                  <ul className='space-y-2'>
                    {education.description.map((item, index) => (
                      <li key={index} className='text-sm leading-relaxed bright-text text-justify'>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </SectionMotion>

        {/* Skills Section */}
        <SectionMotion
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className='text-2xl font-bold mb-6 text-shine text-glow'>Skills</h2>
          <motion.div
            className='flex flex-wrap gap-2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {data.skills.map((skill) => (
              <Badge key={skill} className='text-xs px-3 py-1'>{skill}</Badge>
            ))}
          </motion.div>
        </SectionMotion>

        {/* Projects Section */}
        <SectionMotion
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className='print-force-new-page scroll-mb-16'
        >
          <h2 className='text-2xl font-bold mb-6 text-shine text-glow'>Projects</h2>
          <motion.div
            className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {data.projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={'link' in project ? project.link.href : undefined}
                />
              </motion.div>
            ))}
          </motion.div>
        </SectionMotion>
      </section>

      <CommandMenu
        links={[
          {
            url: data.personalWebsiteUrl.url,
            title: data.personalWebsiteUrl.name
          },
          {
            url: `mailto:${data.contact.email.at}`,
            title: data.contact.email.name
          },
          {
            url: `tel:${data.contact.tel.phoneNumber}`,
            title: data.contact.tel.name
          },
          ...data.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name
          })),
          {
            url: data.contact.link.url,
            title: data.contact.link.name
          }
        ]}
      />
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 print:hidden">
                <ThemeToggle />
            </div>
    </main>
  )
}
