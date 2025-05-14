import Search from "@/components/Search/Search";
import Directories from "@/components/Directories/Directories";

export default function Home() {
    return (
        <>
            <h1 className="text-center leading-10 my-10 text-3xl font-semibold text-darkBlue px-5 md:px-8">
                Company Presence Check
            </h1>
            <Search />
            <Directories />
        </>
    );
}
