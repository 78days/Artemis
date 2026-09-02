import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icon.svg";
export default function Logo() {
	return (
		<div>
			<Link href="/">
				<Image src={logo} width={50} height={100} alt="Artemis" />
			</Link>
		</div>
	);
}
