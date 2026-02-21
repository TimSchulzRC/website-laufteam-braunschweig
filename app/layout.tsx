import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Laufteam Braunschweig",
	description: "Laufteam Braunschweig",
};

import { Josefin_Sans, Roboto } from "next/font/google";
import cn from "@/util/classnames";

const fontRoboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto",
});
const fontJosefinSans = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-josefin-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body
				className={cn(
					fontRoboto.variable,
					fontJosefinSans.variable,
					fontRoboto.className,
					"overflow-x-hidden hyphens-auto",
				)}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
