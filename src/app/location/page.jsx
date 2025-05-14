import LocationStatus from "@/components/LocationStatus/LocationStatus";

export async function generateMetadata({ searchParams }) {
    const { name } = await searchParams;

    return {
        title: `${name} Online Presence Report`,
        description: `Report of how ${name} appears in the online directories`,
    };
}

async function page({ searchParams }) {
    const queryParams = await searchParams;

    return <LocationStatus queryParams={queryParams} />;
}

export default page;
