import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import './index.css'
import ResumeCart from "../ResumeCart"

const Layout = ({ children }) => {
    const location = window.location.pathname;
    return (
        <div className="layout bg-gradient-to-b to-[#ABABAB] from-[#FFFFFF] h-screen grid grid-rows-[5rem_auto]">
            <Header />
            <main className="flex flex-col h-screen w-screen items-center px-4 py-2">
                <div className="animate-opacity w-full md:w-7/12 lg:w-6/12 xl:w-4/12">
                    { children }
                </div>
                {
                location === '/cart' ? '' :
                <ResumeCart />
                }
            </main>
            <Footer />
        </div>
    )
}

export default Layout;