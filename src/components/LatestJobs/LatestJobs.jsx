'use client';
import React, { useEffect, useState } from 'react';
// import useTheme from "../../hooks/useTheme";
import { motion } from 'motion/react';
import JobCard from './JobCard';
// import useAxios from "../../hooks/useAxios";
import Link from 'next/link';

const latestJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    postedBy: 'Arif Hossain',
    category: 'Web Development',
    summary:
      'We are looking for an experienced React.js developer to build responsive web applications and collaborate with the backend team.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'arif.hossain@techco.bd',
    salary: 'BDT 80,000 - 120,000',
    vacancy: '2',
    postedDate: '2025-11-11T09:18:00+06:00',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    postedBy: 'Fatima Rahman',
    category: 'Digital Marketing',
    summary:
      'We are hiring a results-driven Digital Marketing Specialist to spearhead online growth initiatives for our portfolio of e-commerce brands at MarketPro. In this strategic role, you will design, execute, and optimize multi-channel campaigns across SEO, PPC (Google Ads, Meta Ads, etc.), and social media platforms (Facebook, Instagram, LinkedIn, TikTok, and emerging channels) to maximize ROI, drive qualified traffic, and boost conversion rates. Your day-to-day responsibilities will include conducting in-depth keyword research and on-page/off-page SEO audits, crafting compelling ad copy and creative assets, setting up conversion tracking and attribution models, performing A/B testing, and analyzing performance metrics using tools like Google Analytics 4, Google Tag Manager, Search Console, and platform-native dashboards. You will collaborate with content creators, graphic designers, and the sales team to align marketing efforts with business goals, develop customer personas, map out user journeys, and create data-backed content calendars. Additionally, you will stay ahead of algorithm updates, industry trends, and emerging tools (AI-driven ad optimization, automation workflows, etc.) to keep our strategies competitive. This full-time position offers a competitive salary range of BDT 50,000 to 75,000 per month based on experience and proven results, with three vacancies open immediately. If you have a track record of scaling e-commerce revenue through paid and organic channels, possess strong analytical skills, and thrive in a fast-paced, target-oriented environment, we invite you to apply and help propel our brands to the next level of digital success.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service11.jpg',
    userEmail: 'fatima@marketpro.bd',
    salary: 'BDT 50,000 - 75,000',
    vacancy: '3',
    postedDate: '2025-11-10T14:30:00+06:00',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    postedBy: 'Rahim Khan',
    category: 'Graphics Designing',
    summary:
      'We are seeking a talented and creative UI/UX Designer to join DesignHub and lead the creation of intuitive, user-centered digital experiences for both mobile and web platforms. In this role, you will conduct user research, develop detailed personas and journey maps, translate complex requirements into clean wireframes, interactive prototypes, and high-fidelity mockups using tools like Figma, Sketch, or Adobe XD. You will collaborate closely with product managers, developers, and stakeholders to ensure designs are feasible, accessible, and aligned with business goals. Key responsibilities include performing usability testing, iterating based on user feedback, establishing and maintaining design systems, ensuring WCAG compliance, and optimizing interfaces for performance and responsiveness across devices. The ideal candidate has a strong portfolio showcasing end-to-end design processes, proficiency in interaction design principles, animation micro-interactions, and a deep understanding of modern design trends. This is a full-time position with a salary range of BDT 60,000 to 90,000 per month, depending on experience and portfolio strength, with one vacancy currently available. If you are passionate about solving real user problems through thoughtful, visually compelling design and thrive in a collaborative environment, apply today to shape the future of our digital products.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'rahim.khan@designhub.bd',
    salary: 'BDT 60,000 - 90,000',
    vacancy: '1',
    postedDate: '2025-11-10T14:30:00+06:00',
  },
  {
    id: 4,
    title: 'Technical Support Engineer',
    postedBy: 'Sanjida Akter',
    category: 'Technical Support',
    summary:
      'CloudCare is expanding its support team and is looking for dedicated Technical Support Engineers to deliver exceptional 24/7 customer assistance for our cloud infrastructure and SaaS platforms. You will be the first point of contact for clients experiencing technical issues, responsible for diagnosing problems, providing timely resolutions, escalating complex cases to senior engineers, and documenting solutions in our knowledge base. Using ticketing systems (Zendesk, Freshdesk), live chat, phone, and email, you will troubleshoot server downtime, network connectivity, application errors, security incidents, and performance bottlenecks while maintaining strict SLAs for response and resolution times. The role requires hands-on experience with Linux/Windows servers, cloud platforms (AWS, Azure, GCP), networking (DNS, VPN, firewalls), and scripting (Bash, Python). You will also contribute to proactive monitoring, root cause analysis, customer onboarding, and internal training. This is a full-time, shift-based position (including night shifts) offering BDT 40,000 to 60,000 per month based on certifications and experience, with four openings available immediately. If you have strong problem-solving skills, excellent communication, and a customer-first mindset, join us to ensure uninterrupted service for thousands of businesses.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'sanjida@cloudcare.bd',
    salary: 'BDT 40,000 - 60,000',
    vacancy: '4',
    postedDate: '2025-11-10T14:30:00+06:00',
  },
  {
    id: 5,
    title: 'Full-Stack WordPress Developer',
    postedBy: 'Karim Ahmed',
    category: 'Web Development',
    summary:
      'WP Studio is hiring an experienced Full-Stack WordPress Developer to build, customize, and optimize high-traffic, performance-driven WordPress websites for enterprise clients. You will develop custom themes from scratch using modern PHP, create reusable Gutenberg blocks and plugins, integrate third-party APIs (payment gateways, CRMs, analytics), and implement advanced functionality such as membership systems, e-learning platforms, and multisite networks. Performance optimization will be critical — leveraging caching (Redis, Varnish), CDN integration, image optimization, database tuning, and front-end techniques like lazy loading and minification. Security hardening (WAF, malware scanning, secure coding) and SEO best practices are also essential. You will work with designers to ensure pixel-perfect implementations, collaborate via Git, and deploy using CI/CD pipelines. Proficiency in WP-CLI, Composer, Docker, and REST/GraphQL APIs is highly valued. This full-time role offers BDT 70,000 to 100,000 monthly, based on expertise and portfolio, with two positions open. If you live and breathe WordPress, love solving complex challenges, and deliver scalable solutions, we want you on our team.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service9.jpg',
    userEmail: 'karim@wpstudio.bd',
    salary: 'BDT 70,000 - 100,000',
    vacancy: '2',
    postedDate: '2025-11-06T13:15:00+06:00',
  },
  {
    id: 6,
    title: 'Motion Graphics Artist',
    postedBy: 'Nabila Islam',
    category: 'Graphics Designing',
    summary:
      'Animake Studio is looking for a skilled Motion Graphics Artist to create engaging animated content that captivates audiences across digital platforms. You will conceptualize, storyboard, design, and animate explainer videos, promotional ads, social media stories, branding sequences, and UI animations using Adobe After Effects, Premiere Pro, Cinema 4D, and other industry-standard tools. Projects will range from 15-second Instagram Reels to 2-minute product explainers, requiring a strong sense of timing, typography, color theory, and storytelling through motion. You will collaborate with scriptwriters, voiceover artists, and marketing teams to align visuals with brand voice and campaign goals, while meeting tight deadlines in a fast-paced agency environment. A reel demonstrating dynamic transitions, character animation, 2.5D parallax, and trendy effects is mandatory. Knowledge of sound design sync and export optimization for web/social is a plus. This full-time position pays BDT 55,000 to 80,000 per month depending on experience and demo reel quality, with one vacancy available. If you turn ideas into mesmerizing motion and thrive on creative challenges, apply now to bring brands to life through animation.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'nabila@animake.bd',
    salary: 'BDT 55,000 - 80,000',
    vacancy: '1',
    postedDate: '2025-11-06T13:15:00+06:00',
  },
  {
    id: 7,
    title: 'Data Analyst',
    postedBy: 'Mahmudul Hasan',
    category: 'Web Development',
    summary:
      'Data Insights Ltd. is seeking a detail-oriented Data Analyst to transform raw data into actionable business intelligence that drives strategic decisions. You will work with large datasets from multiple sources (SQL databases, CRM systems, web analytics, third-party APIs), clean and validate data integrity, and build comprehensive dashboards and reports using Tableau, Power BI, or Google Data Studio. Key responsibilities include writing complex SQL queries for ad-hoc analysis, performing statistical analysis (trend forecasting, cohort analysis, A/B test evaluation), identifying KPIs, and presenting findings to non-technical stakeholders through clear visualizations and storytelling. You will collaborate with marketing, product, and finance teams to uncover growth opportunities, detect anomalies, and optimize user funnels. Proficiency in Python (Pandas, NumPy) or R for advanced analysis, experience with ETL pipelines, and knowledge of data warehousing (Snowflake, BigQuery) are highly desirable. This full-time role offers BDT 65,000 to 95,000 per month based on expertise and impact demonstrated, with one position open. If you live for insights, love solving puzzles with data, and can translate numbers into narratives, join us to shape data-driven success.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'mahmudul@datainsights.bd',
    salary: 'BDT 65,000 - 95,000',
    vacancy: '1',
    postedDate: '2025-11-05T10:45:00+06:00',
  },
  {
    id: 8,
    title: 'Mobile App Developer (Flutter)',
    postedBy: 'Ayesha Siddika',
    category: 'Web Development',
    summary:
      'AppWave Studio is expanding and hiring a passionate Mobile App Developer specializing in Flutter to build high-performance, cross-platform applications for Android and iOS. You will take ownership of the full development lifecycle — from UI/UX implementation using Flutter widgets and custom animations to state management with Provider, Riverpod, or Bloc, API integration via REST/GraphQL, and deployment through App Store and Google Play. Performance optimization (smooth 60fps animations, minimal bundle size), offline functionality with SQLite/Hive, push notifications, in-app purchases, and CI/CD using Codemagic or GitHub Actions are core to the role. You will work closely with backend engineers (Node.js, Firebase) and designers to deliver pixel-perfect, accessible apps that scale to millions of users. Experience with native modules (Kotlin/Swift) and testing (unit, widget, integration) is a plus. This full-time position offers BDT 80,000 to 120,000 monthly depending on portfolio and production app experience, with two vacancies available. If you craft beautiful, fast, and reliable mobile experiences, we want you to help redefine how users interact on the go.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service9.jpg',
    userEmail: 'ayesha@appwave.bd',
    salary: 'BDT 80,000 - 120,000',
    vacancy: '2',
    postedDate: '2025-11-04T11:20:00+06:00',
  },
  {
    id: 9,
    title: 'Content Writer & SEO Specialist',
    postedBy: 'Tanjim Rahman',
    category: 'Digital Marketing',
    summary:
      'ContentCraft Agency is looking for a creative and strategic Content Writer & SEO Specialist to produce high-ranking, engaging content that converts. You will research trending topics, write long-form blog posts, landing pages, product descriptions, email campaigns, and social captions optimized for both users and search engines. Using tools like Ahrefs, SEMrush, or SurferSEO, you will perform keyword research, analyze competitor content, and implement on-page SEO best practices (meta tags, internal linking, schema markup). You will also track content performance via Google Analytics and Search Console, iterate based on data, and collaborate with designers for visual enhancements. A strong command of English (or Bengali for local campaigns), storytelling ability, and experience in niche industries (tech, health, finance) are essential. This is a full-time remote-friendly role offering BDT 45,000 to 70,000 per month based on writing samples and SEO results, with three openings. If you can turn keywords into compelling stories that rank and resonate, apply now to grow organic traffic and brand authority.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service11.jpg',
    userEmail: 'tanjim@contentcraft.bd',
    salary: 'BDT 45,000 - 70,000',
    vacancy: '3',
    postedDate: '2025-11-03T15:10:00+06:00',
  },
  {
    id: 10,
    title: 'DevOps Engineer',
    postedBy: 'Fahad Hossain',
    category: 'Technical Support',
    summary:
      'InfraCore Solutions is hiring a skilled DevOps Engineer to design, implement, and maintain scalable, secure, and automated cloud infrastructure for mission-critical applications. You will manage CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions, orchestrate containers with Kubernetes (EKS/GKE/AKS), and provision infrastructure as code using Terraform or Pulumi. Monitoring and logging with Prometheus, Grafana, ELK Stack, and alerting via PagerDuty will be daily tasks, along with performance tuning, cost optimization, and disaster recovery planning. Security best practices (IAM, VPC, WAF, secrets management with HashiCorp Vault) and compliance (GDPR, ISO 27001) are non-negotiable. You will bridge development and operations, automate repetitive tasks with Bash/Python, and ensure 99.99% uptime. Certifications (AWS DevOps, CKAD, Terraform Associate) are highly valued. This full-time role offers BDT 90,000 to 140,000 per month based on hands-on cloud and automation experience, with one senior position open. If you thrive on reliability, automation, and keeping systems running smoothly at scale, join us to power the backbone of modern software.',
    coverImage:
      'https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg',
    userEmail: 'fahad@infracore.bd',
    salary: 'BDT 90,000 - 140,000',
    vacancy: '1',
    postedDate: '2025-11-02T09:30:00+06:00',
  },
];

const LatestJobs = () => {
  //   const axiosInstance = useAxios();
  //   const [latestJobs, setLatestJobs] = useState([]);

  //   useEffect(() => {
  //     axiosInstance.get("/latest-jobs").then((data) => {
  //       setLatestJobs(data.data);
  //     });
  //   }, [axiosInstance]);

  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-[#244034] mb-2`}>
            Latest Jobs
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {latestJobs.slice(0, 6).map((job, index) => (
            <motion.div
              key={job.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <JobCard job={job}></JobCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/allJobs" target="_parent" className="my-btn text-black">
            See All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
