import { useState } from "react";
import {
    Command,
    CommandInput,
    CommandItem,
    CommandList,
    CommandEmpty,
} from "@/components/ui/Command";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

function AutocompleteInput({
    options,
    value,
    onChange,
    placeholder,
    name,
    disabled,
}) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="button"
                    aria-label={`Search a ${name}`}
                    disabled={disabled}
                    className="border p-2 rounded-md justify-between gap-0 max-h-8 h-8"
                >
                    <span className="block text-ellipsis overflow-hidden whitespace-nowrap font-normal text-sm text-skyBlue">
                        {value
                            ? options.find((o) => o.value === value)?.label
                            : placeholder}
                    </span>
                    <ChevronsUpDown
                        className="opacity-50"
                        aria-hidden="true"
                        focusable="false"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList role="listbox">
                        <CommandEmpty>{`No ${name} found`}</CommandEmpty>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                role="option"
                                onSelect={() => {
                                    onChange(option.value);
                                    setOpen(false);
                                }}
                            >
                                {option.label}
                                <Check
                                    className={cn(
                                        "ml-auto",
                                        option.value === value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default AutocompleteInput;
