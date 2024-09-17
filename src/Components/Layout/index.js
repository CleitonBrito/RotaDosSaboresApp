import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const Layout = ({ children }) => {
    return (
        <div className="grid grid-rows-layout bg-gradient-to-b to-[#ABABAB] from-[#FFFFFF]">
            <Header />
            <main className="px-4 py-2">{ children }</main>
            <Footer />
        </div>
    )
}

export default Layout;