import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";
import directories from "@/data/directory_logos.json";

function DirectoryStatus({ locationDirectory, index }) {
    const {
        result: {
            directoryType,
            listingUrl,
            name,
            streetNo,
            street,
            city,
            phone,
            website,
            openingHours = [],
            photos = [],
        },
    } = locationDirectory;

    const notFound = !streetNo && !street && !city;

    const rowColor = index % 2 === 0 ? "bg-ligth" : "bg-ligthSkyBlue";

    const directoryIcon = (
        <>
            <Image
                src={directories[directoryType]}
                alt={`${directoryType.toLocaleLowerCase()} directory`}
                height={32}
                width={32}
            />
            <span className="capitalize font-normal text-sm">
                {directoryType.toLocaleLowerCase()}
            </span>
        </>
    );
    const directoryImageContainer = listingUrl ? (
        <Button
            variant="link"
            className="flex flex-col items-start gap-1"
            asChild
        >
            <Link href={listingUrl}>{directoryIcon}</Link>
        </Button>
    ) : (
        <div className="flex flex-col items-start gap-1">{directoryIcon}</div>
    );

    return (
        <tr
            className={`${rowColor} md:table-row flex flex-col md:flex-row text-left`}
        >
            <td className="p-4 flex items-center">{directoryImageContainer}</td>
            <td className="p-4 hidden md:table-cell text-xs flex-col gap-1">
                {name && <p>{name}</p>}
                <p className="text-red-600">
                    {notFound
                        ? "Listing not found"
                        : `${streetNo} ${street}, ${city}`}
                </p>
                {phone && <p>{phone}</p>}
                {website && (
                    <p className="w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                        {website}
                    </p>
                )}
            </td>
            <td className="p-4 hidden md:table-cell justify-center items-center relative group">
                {openingHours && openingHours.length ? (
                    <>
                        <Check className="text-green-500" strokeWidth={3} />
                        <div className="absolute bottom-[56%] left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Online
                        </div>
                    </>
                ) : (
                    ""
                )}
            </td>
            <td className="p-4 hidden md:table-cell justify-center items-center relative group">
                {photos && photos.length ? (
                    <>
                        <Check className="text-green-500" strokeWidth={3} />
                        <div className="absolute bottom-[56%] left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Online
                        </div>
                    </>
                ) : (
                    ""
                )}
            </td>
        </tr>
    );
}

export default DirectoryStatus;
