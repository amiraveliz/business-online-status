import directories from "@/data/directory_logos.json";
import Image from "next/image";

function Directories() {
    return (
        <div>
            <h2 className="text-xl font-semibold my-8 text-darkBlue text-center mx-auto px-5 md:px-8">
                Is your company listed accurately in these online directories?
            </h2>
            <div className="flex justify-center max-w-5xl mx-auto pb-8">
                {[
                    "GOOGLE",
                    "GOOGLE_MAPS",
                    "FACEBOOK",
                    "BING",
                    "APPLE_MAPS",
                ].map((directoy) => (
                    <div
                        key={directoy}
                        className="flex flex-col items-center gap-1 relative w-[20%]"
                    >
                        <Image
                            alt={`${directoy} directoy`}
                            src={directories[directoy]}
                            height={32}
                            width={32}
                        />
                        <span className="capitalize text-xs text-gray-500 font-semibold">
                            {directoy.toLocaleLowerCase()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Directories;
