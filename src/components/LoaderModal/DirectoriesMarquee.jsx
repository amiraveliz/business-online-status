import Marquee from "react-fast-marquee";
import directories from "@/data/directory_logos.json";
import Image from "next/image";
import React from "react";

const DirectoriesMarquee = React.memo(() => {
    return (
        <div className="w-screen xs:max-w-[inherit] xs:min-w-[inherit]">
            <Marquee speed={90}>
                {Object.keys(directories).map((key) => (
                    <div className="h-full">
                        <div
                            key={key}
                            className="px-4 py-2 flex flex-col items-center align-top mb-auto"
                        >
                            <Image
                                src={directories[key]}
                                alt={`${key} directoy`}
                                height={54}
                                width={54}
                                className="shadow-directory"
                            />
                            <span className="capitalize text-xs text-light font-semibold w-[80px] overflow-hidden text-ellipsis text-center">
                                {key.toLocaleLowerCase()}
                            </span>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
});

export default DirectoriesMarquee;
