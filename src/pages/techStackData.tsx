import { Code2Icon, LayoutIcon, ServerIcon, DatabaseIcon, CloudIcon } from 'lucide-react';
import cplusIcon from '../assets/images/cplus.png';
import csharpIcon from '../assets/images/csharp.png';
import cssIcon from '../assets/images/css.png';
import gitIcon from '../assets/images/git.png';
import javaIcon from '../assets/images/java.png';
import jsIcon from '../assets/images/js.png';
import mysqlIcon from '../assets/images/mysql.png';
import pythonIcon from '../assets/images/python.png';
import htmlIcon from '../assets/images/html.png';
import githubIcon from '../assets/images/github.png';
import springbootIcon from '../assets/images/springboot.png';
import postmanIcon from '../assets/images/postman.png';
import mongodbIcon from '../assets/images/mongodb.png';
import nodejsIcon from '../assets/images/node.png';
import tailwindIcon from '../assets/images/tailwind.png';
import postgreIcon from '../assets/images/postgre.png';
import reactIcon from '../assets/images/react.png';
import restapiIcon from '../assets/images/restapi.png';
import bitbucketIcon from '../assets/images/bitbucket.png';
import angularIcon from '../assets/images/angular.png';
import dotnetIcon from '../assets/images/net.png';
import azureIcon from '../assets/images/azure.png';
import awsIcon from '../assets/images/aws.png';
import dockerIcon from '../assets/images/docker.png';
import kubernetesIcon from '../assets/images/k8s.png';
import grafanaIcon from '../assets/images/grafana.png';
import cicdIcon from '../assets/images/cicd.png';
import linuxIcon from '../assets/images/linux.png';

export const techCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2Icon,
    items: [
      {
        name: 'Java',
        icon: javaIcon,
        isImage: true
      },
      {
        name: 'C#',
        icon: csharpIcon,
        isImage: true
      },
      {
        name: 'Python',
        icon: pythonIcon,
        isImage: true
      },
      {
        name: 'JavaScript',
        icon: jsIcon,
        isImage: true
      },
      {
        name: 'TypeScript',
        icon: 'TS'
      },
      {
        name: 'C++',
        icon: cplusIcon,
        isImage: true
      },
      {
        name: 'SQL',
        icon: 'SQL'
      }
    ],
    className: 'md:col-span-1'
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: LayoutIcon,
    items: [
      {
        name: 'React',
        icon: reactIcon,
        isImage: true
      },
      {
        name: 'Next.js',
        icon: 'N'
      },
      {
        name: 'Angular',
        icon: angularIcon,
        isImage: true
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon,
        isImage: true
      },
      {
        name: 'HTML5',
        icon: htmlIcon,
        isImage: true
      },
      {
        name: 'CSS3',
        icon: cssIcon,
        isImage: true
      }
    ],
    className: 'md:col-span-1'
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: ServerIcon,
    items: [
      {
        name: 'Spring Boot',
        icon: springbootIcon,
        isImage: true
      },
      {
        name: '.NET Core',
        icon: dotnetIcon,
        isImage: true
      },
      {
        name: 'Node.js',
        icon: nodejsIcon,
        isImage: true
      },
      {
        name: 'Express.js',
        icon: 'EX'
      },
      {
        name: 'REST APIs',
        icon: restapiIcon,
        isImage: true
      }
    ],
    className: 'md:col-span-1'
  },
  {
    id: 'database',
    title: 'Databases & Tools',
    icon: DatabaseIcon,
    items: [
      {
        name: 'MySQL',
        icon: mysqlIcon,
        isImage: true
      },
      {
        name: 'PostgreSQL',
        icon: postgreIcon,
        isImage: true
      },
      {
        name: 'MongoDB',
        icon: mongodbIcon,
        isImage: true
      },
      {
        name: 'Git',
        icon: gitIcon,
        isImage: true
      },
      {
        name: 'GitHub',
        icon: githubIcon,
        isImage: true
      },
      {
        name: 'Bitbucket',
        icon: bitbucketIcon,
        isImage: true
      },
      {
        name: 'Postman',
        icon: postmanIcon,
        isImage: true
      }
    ],
    className: 'md:col-span-1'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: CloudIcon,
    items: [
      {
        name: 'Docker',
        icon: dockerIcon,
        isImage: true
      },
      {
        name: 'Kubernetes',
        icon: kubernetesIcon,
        isImage: true
      },
      {
        name: 'Grafana',
        icon: grafanaIcon,
        isImage: true
      },
      {
        name: 'Prometheus',
        icon: 'P'
      },
      {
        name: 'Azure',
        icon: azureIcon,
        isImage: true
      },
      {
        name: 'AWS',
        icon: awsIcon,
        isImage: true
      },
      {
        name: 'CI/CD',
        icon: cicdIcon,
        isImage: true
      },
      {
        name: 'Linux',
        icon: linuxIcon,
        isImage: true
      }
    ],
    className: 'md:col-span-1'
  }
];

// Flatten all items for the marquee
export const allTech = techCategories.flatMap((cat) => cat.items);