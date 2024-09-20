import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-b to-[#ABABAB] from-[#FFFFFF] h-screen grid grid-rows-[5rem_auto]">
            <Header />
            <main className="flex flex-col sm:gap-y-1 gap-y-4 sm:w-7/12 h-screen px-4 py-2">{ children }</main>
            <Footer />
        </div>
    )
}

export default Layout;