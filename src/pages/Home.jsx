import Footer from "../components/footer"
import NavMenu from "../components/nav"
import Presentation from "../components/presentation"

const Home = () => {
  return (
    <>
    <div className="w-full min-h-screen h-full flex flex-col">
      <NavMenu />
      <Presentation />
      <Footer />
    </div>
        
    </>
  )
}

export default Home
