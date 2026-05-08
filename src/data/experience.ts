import { Experience } from '../types';

export const experience: Experience[] = [
{
  id: 'rabitabank',
  company: 'Rabitabank OJSC',
  role: 'Front End Developer',
  period: 'September 2022',
  current: true,
  projects: [
  'IB - Internet Banking',
  'Ani Pay',
  'Rabitabank.com',
  'Rabitabank Lottery'],

  description:
  'Leading frontend development for critical banking applications serving thousands of users daily. Implementing secure, scalable solutions with focus on performance and user experience.'
},
{
  id: 'timesoft',
  company: 'Timesoft Group of Company',
  role: 'Front End Developer',
  period: 'December 2021 - August 2022',
  current: false,
  projects: [
  'dma.gov.az',
  'mgtimetower.az',
  'dev.oneof.az',
  'aictia.org',
  'asinshaat.az',
  'asgroup.az'],

  description:
  'Developed diverse web applications across government and corporate sectors. Collaborated with cross-functional teams to deliver high-quality solutions.'
}];