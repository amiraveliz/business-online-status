"use client";

import { useLocationStore } from "@/stores/useLocationStore";
import QualityChart from "./QualityChart";
import VisiblityTable from "./VisiblityTable";
import Information from "./HeaderInformation";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoaderModal from "../LoaderModal/LoaderModal";
import { useSearchLocation } from "@/hooks/useSearchLocation";

function LocationStatus({ queryParams }) {
    const { location, locationDirectories } = useLocationStore();
    const {
        isLoadingLocation: isLoading,
        progress,
        searchLocationAndDirectories,
    } = useSearchLocation();
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const locationLoaded = await searchLocationAndDirectories(
                queryParams
            );
            if (!locationLoaded) {
                setShowErrorMessage(true);
            }
        };

        if (!location || !locationDirectories) {
            fetchData();
        }
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-8 py-10">
            <h1 className="text-3xl font-semibold text-darkBlue text-center pb-2">
                Your Online Presence Score for:
            </h1>
            {location && !isLoading && <Information location={location} />}
            {locationDirectories.length > 0 && !isLoading && <QualityChart />}
            {locationDirectories.length > 0 && !isLoading && (
                <VisiblityTable locationDirectories={locationDirectories} />
            )}
            <ErrorMessage
                open={showErrorMessage}
                onClose={() => setShowErrorMessage(false)}
            />
            <LoaderModal open={isLoading} progress={progress} />
        </div>
    );
}

export default LocationStatus;
