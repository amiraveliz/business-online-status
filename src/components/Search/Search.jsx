"use client";

import { useSearchLocation } from "@/hooks/useSearchLocation";
import SearchForm from "./SearchForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoaderModal from "../LoaderModal/LoaderModal";
import { useState } from "react";

function Search() {
    const {
        isLoadingLocation,
        progress,
        isLoadingLocationDirectories,
        searchLocationAndDirectories,
    } = useSearchLocation();
    const [showErrorMessage, setShowErrorMessage] = useState();

    const handleOnSubmitForm = async (data) => {
        const locationLoaded = await searchLocationAndDirectories(data, true);
        if (!locationLoaded) {
            setShowErrorMessage(true);
        }
    };

    return (
        <>
            <SearchForm
                onSubmitForm={handleOnSubmitForm}
                isLoading={isLoadingLocation}
            />
            <ErrorMessage
                open={showErrorMessage}
                onClose={() => setShowErrorMessage(false)}
            />
            <LoaderModal
                open={isLoadingLocationDirectories}
                progress={progress}
            />
        </>
    );
}

export default Search;
