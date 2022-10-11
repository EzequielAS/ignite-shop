import Image from "next/future/image"
import Link from "next/link"
import logo from '../../assets/logo.svg'

export function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="" />
    </Link>
  )
  }