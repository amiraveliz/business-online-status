import DirectoryStatus from "./DirectoryStatus";

function VisiblityTable({ locationDirectories }) {
    return (
        <div>
            <h5 className="text-darkBlue text-2xl font-semibold text-center pt-7">
                Results
            </h5>
            <p className="text-center pb-7">
                Your online business listing visibility
            </p>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-darkBlue text-light hidden md:table-row text-left font-normal text-sm">
                            <th className="p-4">Directory</th>
                            <th className="p-4">Business Info</th>
                            <th className="p-4 text-center">Hours</th>
                            <th className="p-4 text-center">Photos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locationDirectories.map((locationDirectory, index) => {
                            const {
                                result: { listingId, directoryType },
                            } = locationDirectory;

                            return (
                                <DirectoryStatus
                                    key={`${index}-${listingId}-${directoryType}`}
                                    index={index}
                                    locationDirectory={locationDirectory}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VisiblityTable;
