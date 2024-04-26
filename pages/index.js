import { AgencySelection } from "../sections";

const agencySelectionProps = {
  title: 'Managed Agency Selection',
  subtitle: 'Strengthen your onboarding process',
  image: {
    src: '/img/video.png',
    alt: 'video',
    width: 1000,
    height: 1680
  },
  btns: [
    { width: '15em', title: 'Brief' },
    { width: '17em', title: 'Search' },
    { width: '19em', title: 'Pitch' }
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
