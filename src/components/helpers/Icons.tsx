import linkedinLogo from '../../assets/social/linkedin.svg';
import appStoreIcon from '../../assets/social/app-store.png';
import gitHubLogo from '../../assets/social/github.png';
import emailIcon from '../../assets/social/email.svg';

export const CustomGithubIcon = () => {
  return <img src={gitHubLogo} alt="GitHub" className="w-5 h-5 object-contain" />;
};

export const CustomLinkedinIcon = () => {
  return <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 object-contain" />;
};

export const CustomAppStoreIcon = () => {
  return <img src={appStoreIcon} alt="App Store" className="w-5 h-5 object-contain" />;
};

export const CustomEmailIcon = () => {
  return <img src={emailIcon} alt="Email" className="w-5 h-5 object-contain" />;
};
