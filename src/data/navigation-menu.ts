import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

// const GITHUB_PROFILE_LINK = process.env.GITHUB_PROFILE_LINK as string;
// const LINKEDIN_PROFILE_LINK = process.env.LINKEDIN_PROFILE_LINK as string;
// const TWITTER_PROFILE_LINK = process.env.TWITTER_PROFILE_LINK as string;

const GITHUB_PROFILE_LINK = "https://github.com/Dhananjoy43"
const LINKEDIN_PROFILE_LINK = "https://www.linkedin.com/in/dhananjoy-mahata-ab00b4229/"
const TWITTER_PROFILE_LINK = "https://twitter.com/Dhananjoy_99"

export const navigationLinks = [
    {
        label: "About me",
        href: "/about"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Blogs",
        href: "/blogs"
    }
]

export const socialLinks = [
    {
        name: "Github",
        icon: GitHubLogoIcon,
        url: GITHUB_PROFILE_LINK
    },
    {
        name: "Twitter",
        icon: TwitterLogoIcon,
        url: TWITTER_PROFILE_LINK
    },
    {
        name: "LinkedIn",
        icon: LinkedInLogoIcon,
        url: LINKEDIN_PROFILE_LINK
    },
]