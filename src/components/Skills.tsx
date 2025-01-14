import React from 'react';
import { Cloud, Server, Lock, Database, Code, Settings, Terminal, DollarSign } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-400" />,
      title: "AWS Services",
      description: "EC2, S3, Lambda, ECS, RDS, DynamoDB, CloudFront, Route53, VPC, ELB"
    },
    {
      icon: <Terminal className="h-8 w-8 text-blue-400" />,
      title: "AWS Development Tools",
      description: "AWS CLI, AWS SDK, CloudFormation, AWS CDK"
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "Security",
      description: "IAM, Security Groups, WAF, Shield, GuardDuty"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "Database Management",
      description: "Aurora, RDS, DynamoDB, ElastiCache"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "DevOps",
      description: "CI/CD, CodePipeline, CodeBuild, CodeDeploy, Docker, Kubernetes"
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-400" />,
      title: "Monitoring",
      description: "CloudWatch, X-Ray, CloudTrail"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-400" />,
      title: "Cost Management",
      description: "AWS Cost Explorer, AWS Budgets, AWS Cost & Usage Reports, Savings Plans"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Cloud Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}