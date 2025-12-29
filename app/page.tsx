
import dynamic from "next/dynamic";
const Header = dynamic(() => import('./components/header'))
const MainNavbar = dynamic(() => import('./components/nav-bar'))
const ProductSlider = dynamic(() => import('./components/product-slider'))
const TopNav = dynamic(() => import('./components/top_nav'))
const Footer = dynamic(() => import('./components/footer'))

export default function Home() {
  return (
    <div>
      <TopNav />
      <MainNavbar />
      <Header />
      <ProductSlider />
      <Footer />
    </div>
  );
}
