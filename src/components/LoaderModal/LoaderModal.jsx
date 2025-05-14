"use client";

import { Activity } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/Dialog";
import DirectoriesMarquee from "./DirectoriesMarquee";
import { Progress } from "@/components/ui/Progress";

function LoaderModal({ open, progress }) {
    return (
        <Dialog open={open}>
            <DialogContent
                className="bg-grayBlue border-0 py-8 px-0 xs:min-w-[600px]"
                closeClassName="text-light"
                onClose={() => {
                    /** closes dialogs */
                }}
            >
                <div className="md:px-8 pb-0">
                    <Activity size={48} className="mx-auto text-light" />
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold my-3 text-light !text-center mx-auto">
                            Online search for your company
                        </DialogTitle>

                        <DialogDescription className="text-light text-center mx-auto">
                            Please wait - this search can take up to 30 seconds
                        </DialogDescription>
                    </DialogHeader>
                </div>
                <DirectoriesMarquee />
                <hr className="border-gray-500/30 mx-4 border-[1px]" />
                <div className="flex justify-center pt-4 pb-10">
                    <Progress
                        value={progress}
                        className="w-[60%] bg-gray-200/20 h-1"
                        barClassName="bg-gray-200"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default LoaderModal;
