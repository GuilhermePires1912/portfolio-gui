export type Language = 'pt' | 'en';

export interface SpecialAction {
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  images: string[];
  videos: (string | null)[];
}

export interface VLTProject {
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  images: string[];
}

export interface AdvertisingProject {
  id: string;
  slug: string;
  titlePt: string;
  titleEn: string;
  client: string;
  year: number;
  categoryPt: string;
  categoryEn: string;
  descriptionPt: string;
  descriptionEn: string;
  thumbnail: string;
  thumbnailPosition?: string; // CSS object-position, e.g. 'top', 'center 20%'
  kvImages: string[];
  principalVideos: (string | null)[];
  socialVideos: (string | null)[];
  featured: boolean;
  specialAction?: SpecialAction;
  vltProject?: VLTProject;
}

export interface DevProject {
  id: string;
  name: string;
  descriptionPt: string;
  descriptionEn: string;
  url: string;
  liveUrl?: string;
  tech: string[];
  featured: boolean;
}

export interface TranslationStrings {
  nav: {
    work: string;
    dev: string;
    about: string;
    contact: string;
  };
  hero: {
    role1: string;
    role2: string;
    tagline: string;
    ctaWork: string;
    ctaDev: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    brandsLabel: string;
  };
  about: {
    title: string;
    bio: string;
    skillsAd: string[];
    skillsDev: string[];
    educationTitle: string;
    education: string[];
    langTitle: string;
    langs: string[];
    experienceTitle: string;
  };
  work: {
    title: string;
    subtitle: string;
    watchVideo: string;
    principal: string;
    socialDigital: string;
    specialAction: string;
    vltProject: string;
    kvGallery: string;
    noVideoYet: string;
    close: string;
  };
  dev: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewLive: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
}
