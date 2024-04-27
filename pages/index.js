import { AgencySelection } from "../sections";

const agencySelectionProps = {
  title: 'Managed Agency Selection',
  subtitle: 'Strengthen your onboarding process',
  image: {
    src: '/img/video.png',
    alt: 'video',
    width: 300,
    height: 504
  },
  cards: [
    { width: '25em', title: 'Brief', icon: <i class="fa-solid fa-chart-simple"></i>, text: <>Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.</> },
    { width: '26.5em', title: 'Search', icon: <i class="fa-solid fa-magnifying-glass"></i>, text: <>In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.</> },
    { width: '28em', title: 'Pitch', icon: <i class="fa-regular fa-lightbulb"></i>, text: <>Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.</> }
  ]
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <AgencySelection {...agencySelectionProps} />
      </div>
    </>
  );
}
