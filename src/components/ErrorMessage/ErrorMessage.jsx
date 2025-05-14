import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/Dialog";

function ErrorMessage({ open, onClose }) {
    return (
        <Dialog open={open}>
            <DialogContent
                className="bg-grayBlue  border-0 p-10 xs:min-w-[570px]"
                closeClassName="text-light"
                onClose={onClose}
            >
                <DialogHeader>
                    <DialogTitle className="text-center text-light text-md">
                        Something went wrong
                    </DialogTitle>
                    <DialogDescription className="text-center mx-auto text-light pt-4">
                        We were unable to find the address you entered. Please
                        check it for errors and try again.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ErrorMessage;
