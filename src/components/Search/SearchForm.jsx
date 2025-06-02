import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AutocompleteInput from "@/components/Search/Autocomplete";
import jsonCountries from "@/data/country_names.json";
import { Button } from "@/components/ui/Button";
import { Loader } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

const schema = z.object({
    country: z.string().min(1, "Please select a Country"),
    name: z.string().min(1, "Please select a Company Name"),
    street: z.string().min(1, "Please select a Street and Number"),
    zip: z.string().min(1, "Please select a ZIP/Postcode"),
});

function SearchForm({ onSubmitForm, isLoading }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const countries = Object.keys(jsonCountries).map((key) => ({
        value: key,
        label: jsonCountries[key],
    }));

    const onSubmit = (data) => onSubmitForm(data);

    return (
        <div className="w-full bg-darkBlue">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-5xl flex flex-col md:flex-row items-start gap-3 md:gap-2 mx-auto w-full p-5 md:p-8"
            >
                <div className="flex flex-col w-full md:w-[20%] md:min-w-[20%]">
                    <Label
                        htmlFor="country"
                        className="text-xs text-light leading-5"
                    >
                        Country
                    </Label>
                    <Controller
                        name="country"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <AutocompleteInput
                                {...field}
                                options={countries}
                                name="Country"
                                placeholder="Select a Country"
                                disabled={isLoading}
                            />
                        )}
                    />
                    {errors.country && (
                        <p className="text-red-500 text-xs">
                            {errors.country.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full md:w-[25%]">
                    <Label
                        htmlFor="country"
                        className="text-xs text-light leading-5"
                    >
                        Company name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="border p-2 rounded-md max-h-8 h-8 flex-1 text-sm "
                        disabled={isLoading}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full md:w-[25%]">
                    <Label
                        htmlFor="country"
                        className="text-xs text-light leading-5"
                    >
                        Street and Number
                    </Label>
                    <Input
                        id="street"
                        {...register("street")}
                        className="border p-2 rounded-md max-h-8 h-8 flex-1 text-sm"
                        disabled={isLoading}
                    />
                    {errors.street && (
                        <p className="text-red-500 text-xs">
                            {errors.street.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full md:w-[13%]">
                    <Label
                        htmlFor="country"
                        className="text-xs text-light leading-5"
                    >
                        ZIP/Postcode
                    </Label>
                    <Input
                        id="zip"
                        {...register("zip")}
                        className="border p-2 rounded-md max-h-8 h-8 flex-1 text-sm"
                        disabled={isLoading}
                    />
                    {errors.zip && (
                        <p className="text-red-500 text-xs">
                            {errors.zip.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full md:w-[15%] mt-[20px]">
                    <Button
                        type="submit"
                        aria-label="Submit - Check Now"
                        className="px-6 py-2 max-h-8 h-8 flex-1 text-sm "
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Loader className="animate-spin w-12 h-12" />
                        ) : (
                            "SEARCH NOW"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
