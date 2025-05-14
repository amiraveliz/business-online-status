const search = async (payload) =>
    // mock data
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                response: {
                    searchData: {
                        id: 175888641,
                        dateCreated: "2025-03-25T19:15:35.680+01:00",
                        token: "123",
                        streetNo: "68",
                        city: "France",
                        province: "France",
                        streetAndNo: "3 Rue Charles Robin 66",
                        ...payload,
                    },
                    alreadyManaged: false,
                },
            });
        }, 500);
    });

const searchDirectories = async (id, token, directory) =>
    // mock data
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                response: {
                    result: {
                        listingId: null,
                        listingUrl: null,
                        dateCreated: "2025-03-25T19:15:36.992+01:00",
                        directoryType: directory,
                        name: null,
                        street: null,
                        streetNo: null,
                        city: null,
                        phone: null,
                        website: null,
                        openingHours: null,
                        photos: null,
                    },
                },
            });
        }, 500);
    });

export { search, searchDirectories };
