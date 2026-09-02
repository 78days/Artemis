import Image from "next/image";
import logo from "@/public/icon.svg";
import Link from "next/link";
export default function Logo() {
  return (
    <div>
        <Link href="/">
      <Image src={logo} width={50} height={100} alt="Artemis" />
      </Link>
    </div>
  )
}