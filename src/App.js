import { Features, Download, SectionWrapper } from "./components";
import styles from "./styles/Global";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Smart User Interface Market place"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="experience a battery UI of proNef NFT marketplace. smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all user's devices you can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. the first screen lists all NFTs while the second one shows the details of a spacific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
      <div className="px-4 py-2 bg-primary flex flex-col text-center justify-center items-center italic banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love ❤️ by <span className="font-bold">NG Sostene</span>
        </p>
      </div>
    </>
  );
};

export default App;
