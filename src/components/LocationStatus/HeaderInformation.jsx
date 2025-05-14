import { Share2, FileDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

function HeaderInformation({ location }) {
    const {
        searchData: { name, streetAndNo, zip },
    } = location;

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 justify-center py-2">
                <span className="text-base text-center">
                    {`${name}, ${streetAndNo}, ${zip}`}
                </span>
                <Button asChild variant="link">
                    <Link href="/">CHANGE LOCATION</Link>
                </Button>
            </div>
            <div className="flex justify-center gap-4 pt-2 pb-5">
                <Button
                    className="flex items-center gap-1 text-sm"
                    variant="link"
                >
                    <Share2 size={16} />
                    Share result
                </Button>
                <Button
                    className="flex items-center gap-1 text-sm"
                    variant="link"
                >
                    <FileDown size={16} />
                    Export as PDF
                </Button>
            </div>
            <hr className="border-skyBlue/20 border-[1px] my-5" />
            <p className="text-base">
                Quality of your location data online, out of 26 directories we
                searched successfully:
            </p>
        </>
    );
}

export default HeaderInformation;
