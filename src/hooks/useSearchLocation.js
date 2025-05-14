import { search, searchDirectories } from "@/api";
import { useLocationStore } from "@/stores/useLocationStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import countriesDirectories from "@/data/countries_and_directories.json";

const useSearchLocation = () => {
    const router = useRouter();
    const { setLocation, setLocationDirectories } = useLocationStore();
    const [progress, setProgress] = useState(0);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [isLoadingLocationDirectories, setIsLoadingLocationDirectories] =
        useState(false);

    const searchLocation = async (data) => {
        let location;
        const response = await search(data);
        location = response.response;
        setLocation(location);
        return location;
    };

    const searchLocationDirectories = async (id, token, country) => {
        let locationDirectories;

        const countryDirectories = countriesDirectories[country];

        let completed = 0;
        const requests = [
            ...countryDirectories,
            ...countryDirectories,
            ...countryDirectories,
            ...countryDirectories,
        ].map(async (directory) => {
            const response = await searchDirectories(id, token, directory);
            completed += 1;
            setProgress((completed / countryDirectories.length) * 100); // Update progress
            return response.response;
        });
        const responses = await Promise.all(requests);
        const successfulStatusLocationDirectories = responses.filter(
            (response) => response.result
        );
        setLocationDirectories(successfulStatusLocationDirectories);
        locationDirectories = successfulStatusLocationDirectories;

        return locationDirectories;
    };

    const searchLocationAndDirectories = async (data, redirect = false) => {
        let locationLoaded = false;
        setIsLoadingLocation(true);
        try {
            const location = await searchLocation(data);
            if (location) {
                setLocation(location);
                const {
                    searchData: { id, token, country },
                } = location;

                setIsLoadingLocationDirectories(true);
                const locationDirectories = await searchLocationDirectories(
                    id,
                    token,
                    country
                );
                if (locationDirectories) {
                    locationLoaded = true;
                    setLocationDirectories(locationDirectories);
                    if (redirect) {
                        const params = new URLSearchParams(data);
                        router.push(`/location?${params}`);
                    }
                }
            }
        } catch (error) {
            console.log("Error: ", error);
        } finally {
            setIsLoadingLocation(false);
            setIsLoadingLocationDirectories(false);
            setProgress(0);
        }
        return locationLoaded;
    };

    return {
        isLoadingLocation,
        progress,
        isLoadingLocationDirectories,
        searchLocationAndDirectories,
    };
};

export { useSearchLocation };
