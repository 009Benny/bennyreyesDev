import { CustomGithubIcon, CustomLinkedinIcon, CustomAppStoreIcon, CustomEmailIcon } from '../helpers/Icons.tsx';

export const SocialPlatform = {
  EMAIL: 'email',
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  APP_STORE: 'app_store',
} as const;

export type SocialPlatform = (typeof SocialPlatform)[keyof typeof SocialPlatform];

interface SocialConfig {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  arrowColor: string;
}

export const SOCIAL_CONFIG: Record<SocialPlatform, SocialConfig> = {
  [SocialPlatform.GITHUB]: {
    title: 'GitHub',
    subtitle: '009Benny',
    icon: CustomGithubIcon,
    iconBg: 'bg-white/10 border-white/15',
    iconColor: 'text-purple-400',
    arrowColor: 'text-white-400 group-hover:text-white',
  },
  [SocialPlatform.LINKEDIN]: {
    title: 'LinkedIn',
    subtitle: '/in/benny-reyes-sosa/',
    icon: CustomLinkedinIcon,
    iconBg: 'bg-blue-600/20 border-blue-500/30',
    iconColor: 'text-blue-400',
    arrowColor: 'text-blue-500 group-hover:text-blue-400',
  },
  [SocialPlatform.APP_STORE]: {
    title: 'App Store',
    subtitle: 'My apps',
    icon: CustomAppStoreIcon,
    iconBg: 'bg-indigo-600/20 border-indigo-500/30',
    iconColor: 'text-blue-400',
    arrowColor: 'text-white-500 group-hover:text-indigo-400',
  },
  [SocialPlatform.EMAIL]: {
    title: 'Email',
    subtitle: '009bennyreyes@gmail.com',
    icon: CustomEmailIcon, // Replace with your email icon
    iconBg: 'bg-red-600/20 border-red-500/30',
    iconColor: 'text-red-400',
    arrowColor: 'text-red-500 group-hover:text-red-400',
  }
};

export interface SocialCardProps {
  platform: SocialPlatform;
  url: string;
}
