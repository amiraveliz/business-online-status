import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Company Presence Check",
    description: "Local business online status check",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${openSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
