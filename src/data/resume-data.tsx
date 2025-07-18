import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'DUSHYANTH BANDARU',
	initials: 'DB',
	location: 'United States',
	locationLink: 'https://www.google.com/maps/place/United+States',
	about: 
	    'Software Associate (AWS) with expertise in cloud infrastructure automation, DevOps practices, and full-stack development.',
    summary: `I specialize in DevOps, Cloud Computing, and Infrastructure Automation, with hands-on expertise in tools like Kubernetes, Terraform, Docker, and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    As an open-source contributor, I actively collaborate with the global tech community, sharing solutions and tackling real-world infrastructure challenges together.
    I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/dush_pic.jpg',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://dushf12.github.io'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://dushf12.github.io'
		},
		email: {
			name: 'Email',
			at: 'dushbanda99@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+13028537070'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/dushf12',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/dushf12',
				icon: LinkedInIcon
			}
		]
	},
	education: [
		{
		  school: 'Florida State University (TLH, FL)',
		  degree: "Master of Science, Information Technology",
		  start: 'Jan, 2023',
		  end: 'Dec, 2024',
		  description: [
			'Specialized in Information Technology with focus on cloud computing and software development.',
			'Completed research on "Student Placement Prediction Using Machine Learning" from January 2023 to December 2024.',
			'Developed expertise in modern software development practices and cloud-native technologies.',
			'Gained hands-on experience with AI/ML frameworks and data analysis tools.'
		  ]
		},
		{
		  school: 'Jawaharlal Nehru Technological University (HYD, IND)',
		  degree: "Bachelor of Technology, Information Technology",
		  start: 'Jul, 2017',
		  end: 'Aug, 2021',
		  description: [
			'Built a strong foundation in Information Technology principles and software development.',
			'Developed core programming skills in multiple languages and frameworks.',
			'Participated in technical projects and workshops, enhancing problem-solving abilities.',
			'Gained early exposure to cloud computing and modern development practices.'
		  ]
		}
	],
	work: [
		{
		  company: 'Optus InfoTech',
		  link: 'https://www.optusinfotech.com',
		  badges: ['AWS', 'DevOps'],
		  jobs: [
			{
			  title: 'Software Associate (AWS)',
			  start: 'Sep, 2021',
			  end: 'Oct, 2024',
			  description: [
				'Automated AWS infrastructure using Python/Boto3, reducing manual ops by 12 hours/week and access drift incidents by 90%.',
				'Built reusable Terraform modules for VPC, EC2, and RDS deployments, decreasing environment onboarding time by 60%.',
				'Executed lift-and-shift migrations for 9 business-critical apps with zero downtime, achieving $42K/year cost savings.',
				'Provisioned EKS clusters with auto-scaling and service mesh, improving resource utilization by 30% and reducing latency by 20%.',
				'Implemented full-stack observability with Prometheus, Grafana, and CloudWatch, reducing incident response time from 2 hours to 30 minutes.',
				'Designed granular IAM policies reducing overprivileged access by 95% in quarterly security audits.',
				'Built DevSecOps CI/CD pipelines with SonarQube and Snyk, reducing failed deployments by 70% and improving vulnerability detection by 3x.',
				'Integrated AI tools (GitHub Copilot, Cursor AI) boosting team productivity and code scaffolding times by 50%.',
				'Engineered cross-region disaster recovery achieving 99.99% durability and sub-15-minute RPO.',
				'Containerized legacy services using Docker and Helm, eliminating 90% of manual deployment errors.'
			  ]
			}
		  ]
		}
	],	  
	skills: [
		'Python',
		'Java',
		'JavaScript',
		'TypeScript',
		'Bash',
		'Shell',
		'Boto3',
		'Go',
		'SQL',
		'PostgreSQL',
		'MySQL',
		'MongoDB',
		'React',
		'NextJS',
		'NodeJS',
		'ExpressJS',
		'Spring Boot',
		'Spring MVC',
		'Django',
		'Hibernate',
		'NumPy',
		'Pandas',
		'TensorFlow',
		'Linux',
		'Docker',
		'Kubernetes',
		'Spark',
		'AWS',
		'Glue',
		'EMR',
		'Lambda',
		'S3',
		'Snowflake',
		'Airflow',
		'GitHub Actions',
		'Terraform',
		'EC2',
		'RDS',
		'EKS',
		'IAM',
		'CloudWatch',
		'Prometheus',
		'Grafana',
		'Kafka',
		'OpenSearch',
		'Helm',
		'Argo CD',
		'Liquibase',
		'Cosmos DB',
		'Machine Learning',
		'Regression',
		'Classification',
		'Clustering',
		'CNNs',
		'RNNs',
		'NLP',
		'Model Tuning',
		'Feature Engineering',
		'Time Series',
		'DevOps',
		'CI/CD',
		'Infrastructure as Code',
		'Microservices',
		'API Gateway',
		'Route 53',
		'VPC',
		'CloudFormation',
		'GuardDuty',
		'CloudTrail',
		'Sentinel',
		'SonarQube',
		'Snyk',
		'GitHub Copilot',
		'Cursor AI'
	],	  
	projects: [
		{
		  title: 'AI-Powered Data Pipeline with AWS Glue, S3, Athena, and SageMaker',
		  techStack: ['AWS Glue', 'S3', 'Athena', 'SageMaker', 'Python'],
		  description: 'Built an end-to-end data pipeline using AWS services for data processing, analysis, and machine learning model deployment.',
		  link: {
			label: 'github.com/dushf12/ai-powered-data-pipeline',
			href: 'https://github.com/dushf12/ai-powered-data-pipeline'
		  }
		},
		{
		  title: 'CI/CD Pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy',
		  techStack: ['AWS CodePipeline', 'CodeBuild', 'CodeDeploy', 'Python'],
		  description: 'Implemented automated CI/CD pipeline for application deployment using AWS services, reducing deployment time and improving reliability.',
		  link: {
			label: 'github.com/dushf12/aws-ci-cd-pipeline',
			href: 'https://github.com/dushf12/aws-ci-cd-pipeline'
		  }
		},
		{
		  title: 'Jenkins Pipeline for Java based application using Maven, SonarQube, Argo CD, Helm and Kubernetes',
		  techStack: ['Jenkins', 'Java', 'Maven', 'SonarQube', 'Argo CD', 'Helm', 'Kubernetes'],
		  description: 'Built end-to-end CI/CD pipeline for Java applications with code quality analysis, automated testing, and Kubernetes deployment.',
		  link: {
			label: 'github.com/dushf12/jenkins-end-to-end-cicd-pipeline',
			href: 'https://github.com/dushf12/jenkins-end-to-end-cicd-pipeline'
		  }
		},
		{
		  title: 'Multi-Region High Availability Architecture',
		  techStack: ['HCL', 'Terraform', 'Multi-Region', 'High Availability'],
		  description: 'Designed and implemented multi-region high availability architecture using Terraform HCL for improved reliability and performance.',
		  link: {
			label: 'github.com/dushf12/multi-region-ha-architecture',
			href: 'https://github.com/dushf12/multi-region-ha-architecture'
		  }
		},
		{
		  title: 'Serverless AWS Application',
		  techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Python'],
		  description: 'Built a serverless application using AWS Lambda, API Gateway, DynamoDB, and S3 for scalable and cost-effective cloud solutions.',
		  link: {
			label: 'github.com/dushf12/serverless-aws-application',
			href: 'https://github.com/dushf12/serverless-aws-application'
		  }
		},
		{
		  title: 'MERN Stack with Docker Compose',
		  techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker'],
		  description: 'Containerized a MERN stack application using Docker Compose for easy development and deployment.',
		  link: {
			label: 'github.com/dushf12/MERN-docker-compose',
			href: 'https://github.com/dushf12/MERN-docker-compose'
		  }
		}
	]
}
